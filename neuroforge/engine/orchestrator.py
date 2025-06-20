# neuroforge/engine/orchestrator.py (VERSÃO ATUALIZADA)

import os
import re
import time
from neuroforge.agents.dev import NeoDev
from neuroforge.agents.qa import LogicQA
from neuroforge.agents.pm import AutoPM
from neuroforge.engine.pause_detector import PauseDetector
# ... (outros imports)

class Orchestrator:
    """
    O Orquestrador agora usa uma espera inteligente, permitindo que o usuário
    continue manualmente ou que o sistema continue autonomamente.
    """
    def __init__(self, output_dir="output", idle_timeout_seconds=120): # Pode ajustar o tempo padrão aqui
        # ... (o __init__ continua igual)
        self._load_agents()
        self.output_dir = output_dir
        self.idle_timeout = idle_timeout_seconds
        self.pause_detector = PauseDetector()
        os.makedirs(self.output_dir, exist_ok=True)


    def _load_agents(self):
        # ... (função _load_agents continua igual)
        self.agents = { "AutoPM": AutoPM(), "NeoDev": NeoDev(), "LogicQA": LogicQA() }
        print("🤖 Agentes carregados com sucesso: AutoPM, NeoDev, LogicQA.")

    def _limpar_bloco_codigo(self, raw_text: str):
        # ... (função _limpar_bloco_codigo continua igual)
        match = re.search(r'```(python|html|css|javascript|bash|sh|text)?\n(.*?)\n```', raw_text, re.DOTALL)
        return match.group(2).strip() if match else raw_text.strip()

    def _wait_for_user_or_idle(self):
        """
        Espera pela confirmação do usuário (Enter) ou continua automaticamente.
        """
        self.pause_detector.start()
        self.pause_detector.reset() # Limpa o estado anterior

        print(f"\n⏳ Próximo passo pronto. Pressione [Enter] para continuar ou aguarde {self.idle_timeout}s para autonomia.")
        
        try:
            # Espera até que um dos eventos aconteça
            while True:
                # Verifica se o [Enter] foi pressionado (o evento foi ativado)
                if self.pause_detector.continue_event.is_set():
                    print("\n👍 Comando recebido! A continuar imediatamente...")
                    break
                
                # Verifica se o tempo de inatividade foi excedido
                idle_seconds = self.pause_detector.get_idle_time()
                if idle_seconds >= self.idle_timeout:
                    print("\n☕ Tempo de inatividade detetado! A assumir o controlo...")
                    break
                
                # Atualiza o status na mesma linha
                print(f"   (A continuar automaticamente em {self.idle_timeout - idle_seconds:.0f}s...)    ", end='\r')
                time.sleep(1)
        except KeyboardInterrupt:
            print("\n🛑 Execução interrompida pelo usuário.")
            self.pause_detector.stop()
            raise
        finally:
            self.pause_detector.stop()

    def handle_project_goal(self, project_goal: str):
        # ... (o resto da função handle_project_goal continua a mesma)
        print(f"\n🚀 Orquestrador recebeu o objetivo do projeto: '{project_goal}'")
        
        pm_agent = self.agents["AutoPM"]
        plan = pm_agent.run(project_goal)

        if not plan: print("❌ O planeamento falhou. A abortar a missão."); return

        print("\n📋 Plano de Execução do Projeto:")
        if isinstance(plan, list):
            for i, step in enumerate(plan, 1):
                if isinstance(step, dict): print(f"  {i}. Agente: {step.get('agent', 'N/A')}, Ficheiro: {step.get('filename', 'N/A')}")
        
        print("\n▶️  A iniciar a execução do plano...")
        try:
            for i, step in enumerate(plan, 1):
                if i > 1: self._wait_for_user_or_idle()

                if not isinstance(step, dict):
                    print(f"\n--- A ignorar Passo {i}/{len(plan)}: O passo não é um dicionário estruturado. ---"); continue

                print(f"\n--- Executando Passo {i}/{len(plan)}: {step.get('task', 'Tarefa sem descrição')} ---")
                
                agent_name = step.get('agent'); task = step.get('task'); filename = step.get('filename')
                if not all([agent_name, task, filename]): print("❌ Erro: O passo do plano está incompleto. A ignorar."); continue

                filepath = os.path.join(self.output_dir, filename)
                
                os.makedirs(os.path.dirname(filepath), exist_ok=True)

                if agent_name == "NeoDev":
                    existing_code = ""
                    if os.path.exists(filepath):
                        print(f"   (Ficheiro '{filename}' encontrado, a ler para dar contexto...)")
                        with open(filepath, "r", encoding="utf-8") as f: existing_code = f.read()
                    
                    agent = self.agents["NeoDev"]
                    raw_code = agent.run(task, existing_code=existing_code)
                    clean_code = self._limpar_bloco_codigo(raw_code)
                    with open(filepath, "w", encoding="utf-8") as f: f.write(clean_code)
                    print(f"✅ Código guardado com sucesso em: {filepath}")

                elif agent_name == "LogicQA":
                    source_file = step.get('source_file', filename.replace('test_', ''))
                    source_filepath = os.path.join(self.output_dir, source_file)
                    try:
                        with open(source_filepath, "r", encoding="utf-8") as f: source_code = f.read()
                        agent = self.agents["LogicQA"]
                        raw_tests = agent.run(source_code)
                        clean_tests = self._limpar_bloco_codigo(raw_tests)
                        with open(filepath, "w", encoding="utf-8") as f: f.write(clean_tests)
                        print(f"✅ Testes guardados com sucesso em: {filepath}")
                    except FileNotFoundError:
                        print(f"❌ Erro Crítico: Não foi possível encontrar o ficheiro fonte '{source_filepath}' para gerar os testes.")
            
            print("\n\n🎉 Projeto concluído! Todos os ficheiros foram gerados na pasta 'output'.")
        
        except KeyboardInterrupt:
            print("\n\n👋 NeuroForge parado. Até à próxima!")