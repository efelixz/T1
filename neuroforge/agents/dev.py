# neuroforge/agents/dev.py (VERSÃO ATUALIZADA)

from .base import BaseAgent
from neuroforge.integrations.gemini import GeminiClient

class NeoDev(BaseAgent):
    """
    O agente NeoDev agora pode tanto criar código do zero quanto
    modificar código existente, dando-lhe "memória de contexto".
    """
    def __init__(self):
        self.gemini_client = GeminiClient()

    def run(self, task: str, existing_code: str = "") -> str:
        """
        Executa uma tarefa de desenvolvimento. Se 'existing_code' for fornecido,
        a tarefa será modificar esse código.

        Args:
            task (str): A descrição da tarefa a ser executada.
            existing_code (str, optional): O código existente a ser modificado.

        Returns:
            str: O código completo e atualizado.
        """
        print(f"🤖 Agente NeoDev recebeu a tarefa: {task}")

        if existing_code:
            print("   (Contexto: A modificar código existente)")
            prompt = f"""
            Você é um programador de IA de elite. Sua tarefa é modificar ou adicionar funcionalidades a um código Python existente.
            NÃO remova funcionalidades existentes, a menos que a tarefa peça explicitamente.
            Retorne APENAS o ficheiro de código completo e atualizado.

            CÓDIGO EXISTENTE:
            ---
            {existing_code}
            ---

            TAREFA DE MODIFICAÇÃO: "{task}"
            """
        else:
            print("   (Contexto: A criar novo ficheiro de código)")
            prompt = f"""
            Você é um assistente de programação de elite.
            Sua tarefa é gerar o código Python para o seguinte pedido: "{task}"
            O código deve ser limpo, eficiente e bem documentado.
            Gere apenas o bloco de código, sem explicações adicionais.
            """

        print("⚡️ A contactar a IA para gerar/modificar o código...")
        generated_code = self.gemini_client.generate_code(prompt)
        print("✅ Código gerado/modificado com sucesso!")
        return generated_code