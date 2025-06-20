# neuroforge/main.py

import argparse
import asyncio
from engine.orchestrator import Orchestrator

def main():
    """
    Ponto de entrada principal para a aplicação NeuroForge.
    
    Esta função configura e executa o orquestrador principal da IA.
    """
    # 1. Configuração de Argumentos
    # Usamos argparse para permitir a passagem de parâmetros via linha de comando.
    # Por exemplo, poderíamos passar o caminho de um projeto: `python main.py --project /path/to/project`
    parser = argparse.ArgumentParser(description="NeuroForge - Assistente de Desenvolvimento com IA Autônoma")
    parser.add_argument("--project", type=str, help="Caminho para o diretório do projeto a ser trabalhado.")
    parser.add_argument("--task", type=str, help="Uma tarefa específica para a IA executar.")
    
    args = parser.parse_args()

    print("🚀 Iniciando NeuroForge X Ultimate v3.0...")

    # 2. Inicialização do Orquestrador
    # O Orchestrator será a peça central que gerencia os agentes e o fluxo de trabalho.
    try:
        orchestrator = Orchestrator(project_path=args.project)
        
        # 3. Execução do Loop Principal
        # Usamos asyncio para lidar com operações assíncronas, como monitorar
        # a atividade do usuário e executar tarefas em segundo plano.
        asyncio.run(orchestrator.start_main_loop(initial_task=args.task))

    except KeyboardInterrupt:
        print("\n🛑 NeuroForge desligado pelo usuário.")
    except Exception as e:
        print(f"\n❌ Erro crítico no NeuroForge: {e}")
    
    print("NeuroForge finalizado.")

if __name__ == "__main__":
    # Este é um padrão em Python. O código dentro deste `if` só é executado
    # quando o script é chamado diretamente (ex: `python main.py`).
    # Ele não executa se o arquivo for importado por outro script.
    main()