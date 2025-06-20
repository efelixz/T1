# neuroforge/engine/orchestrator.py (versão atualizada)

import asyncio
from typing import Optional

# Importamos nosso novo agente!
from agents.dev import NeoDev
# from agents.qa import LogicQA
# ... e assim por diante

class Orchestrator:
    """
    O maestro do NeuroForge.
    ... (o resto da descrição continua a mesma) ...
    """
    def __init__(self, project_path: Optional[str] = None):
        """
        Inicializa o Orchestrator.
        """
        self.project_path = project_path
        self.current_task = None
        self.is_user_active = True
        self.agents = {} 
        
        self._load_agents() # <-- Vamos descomentar esta linha!
        self._load_project_context()

    def _load_agents(self):
        """
        Carrega e inicializa todos os agentes de IA disponíveis.
        """
        print("🧠 Carregando agentes de IA...")
        self.agents["dev"] = NeoDev() # <-- Adicionamos a instância do NeoDev!
        # self.agents["qa"] = LogicQA()
        print("✅ Agentes carregados com sucesso.")

    def _load_project_context(self):
        # ... (código existente sem alterações) ...
        pass

    async def start_main_loop(self, initial_task: Optional[str] = None):
        # ... (código existente sem alterações) ...
        # Vamos modificar o loop para uma demonstração
        print("Orquestrador iniciado. Pressione Ctrl+C para sair.")
        if initial_task:
            self.current_task = initial_task
            print(f"Tarefa inicial recebida: {self.current_task}")
            # Roteia a tarefa inicial imediatamente
            await self.route_task_to_agent(self.current_task)

        # O loop while foi removido para uma execução única e simples por enquanto
        # while True: ...
    
    async def route_task_to_agent(self, task: str):
        """
        Delega uma tarefa para o agente de IA mais apropriado.
        """
        # Por enquanto, vamos sempre chamar o NeoDev
        if "dev" in self.agents:
            dev_agent = self.agents["dev"]
            resultado = await dev_agent.run(task)
            print("\n--- Resultado da IA ---")
            print(resultado)
            print("-----------------------\n")
        else:
            print("❌ Agente de desenvolvimento (NeoDev) não encontrado.")