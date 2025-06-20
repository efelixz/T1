# neuroforge/agents/qa.py (VERSÃO ATUALIZADA)

from .base import BaseAgent
from neuroforge.integrations.gemini import GeminiClient
import re # Usaremos regex para encontrar o nome da função

class LogicQA(BaseAgent):
    """
    O agente LogicQA é o especialista em qualidade e testes.
    Ele recebe um bloco de código e gera testes unitários para ele.
    """
    def __init__(self):
        """
        Inicializa o agente LogicQA e o cliente Gemini.
        """
        self.gemini_client = GeminiClient()

    def _extrair_nome_funcao(self, source_code: str) -> str:
        """
        Uma função auxiliar para extrair o nome da primeira função definida no código.
        """
        match = re.search(r'def\s+(\w+)\s*\(', source_code)
        if match:
            return match.group(1)
        return "funcao_desconhecida" # Retorna um nome padrão se não encontrar

    def run(self, source_code: str) -> str:
        """
        Executa uma tarefa de geração de testes.

        Args:
            source_code (str): O código fonte para o qual os testes devem ser gerados.

        Returns:
            str: O código dos testes unitários gerados.
        """
        print(f"🤖 Agente LogicQA recebeu o código para testar.")
        
        function_name = self._extrair_nome_funcao(source_code)
        module_name = "codigo_gerado" # O nome do ficheiro onde o código será guardado

        print(f"⚡️ A contactar a IA para gerar os testes para a função '{function_name}'...")

        test_generation_prompt = f"""
        Você é um engenheiro de QA (Quality Assurance) especialista em Python.
        Sua tarefa é criar testes unitários rigorosos para uma função que está no módulo '{module_name}.py'.
        A função a ser testada é '{function_name}'.

        O código da função é o seguinte:
        ---
        {source_code}
        ---

        Por favor, gere um script de teste completo usando a biblioteca 'unittest' que importe a função '{function_name}' do módulo '{module_name}'.
        O seu output deve ser APENAS o código Python do teste, pronto para ser executado. NÃO inclua a definição da função no seu código de teste.
        """
        
        generated_tests = self.gemini_client.generate_code(test_generation_prompt)
        
        print("✅ Testes gerados com sucesso!")
        return f"--- TESTES GERADOS PELO LOGICQA ---\n\n{generated_tests}"