# neuroforge/agents/pm.py (VERSÃO ATUALIZADA)

import ast
import re
from .base import BaseAgent
from neuroforge.integrations.gemini import GeminiClient

class AutoPM(BaseAgent):
    """
    O agente AutoPM agora cria um plano de ação estruturado,
    com detalhes sobre o agente, tarefa e ficheiros.
    """
    def __init__(self):
        self.gemini_client = GeminiClient()

    def run(self, project_goal: str) -> list[dict]:
        """
        Recebe um objetivo de projeto e retorna uma lista de dicionários de tarefas.
        """
        print(f"🤖 Agente AutoPM recebeu o objetivo: '{project_goal}'")
        print("⚡️ A contactar a IA para criar o plano do projeto estruturado...")

        planning_prompt = f"""
        Você é um Gestor de Projetos de Software de elite. Sua tarefa é decompor um objetivo de alto nível
        numa lista de dicionários Python. Cada dicionário representa uma tarefa e deve conter as chaves:
        'agent' (o agente a executar, 'NeoDev' ou 'LogicQA'),
        'task' (a descrição da tarefa para a IA),
        'filename' (o nome do ficheiro a ser criado).
        Para tarefas de 'LogicQA', inclua também a chave 'source_file' com o nome do ficheiro a ser testado.
        A sua resposta deve ser APENAS a lista de dicionários Python.

        Exemplo de Objetivo: "Criar uma função de soma"
        Exemplo de Resposta: [
            {{"agent": "NeoDev", "task": "Criar uma função python chamada soma que recebe dois argumentos e retorna a sua soma.", "filename": "soma.py"}},
            {{"agent": "LogicQA", "task": "Criar testes unitários para a função soma.", "source_file": "soma.py", "filename": "test_soma.py"}}
        ]

        Objetivo do Projeto: "{project_goal}"
        """

        raw_response = self.gemini_client.generate_code(planning_prompt)
        clean_response = re.sub(r'```python\n(.*?)\n```', r'\1', raw_response, flags=re.DOTALL).strip()
        
        try:
            task_list = ast.literal_eval(clean_response)
            if not isinstance(task_list, list) or not all(isinstance(i, dict) for i in task_list):
                raise ValueError("A resposta da IA não é uma lista de dicionários.")
            print("✅ Plano estruturado do projeto criado com sucesso!")
            return task_list
        except (ValueError, SyntaxError) as e:
            print(f"❌ Erro ao processar o plano da IA: {e}")
            print(f"Resposta recebida (após limpeza): {clean_response}")
            return []