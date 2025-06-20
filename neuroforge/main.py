# neuroforge/main.py (VERSÃO ATUALIZADA)

import argparse
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from neuroforge.engine.orchestrator import Orchestrator

def main():
    """
    Ponto de entrada principal para a execução do NeuroForge a partir da linha de comando.
    """
    parser = argparse.ArgumentParser(description="NeuroForge AI - O seu parceiro de programação autônomo.")
    # Alteramos a ajuda para refletir que agora recebemos um objetivo de projeto
    parser.add_argument("goal", type=str, help="O objetivo de alto nível do projeto que você quer que a IA execute.")
    
    args = parser.parse_args(sys.argv[1:])
    
    orchestrator = Orchestrator()
    # A chamada agora é para o novo método que lida com projetos
    orchestrator.handle_project_goal(args.goal)

if __name__ == "__main__":
    main()