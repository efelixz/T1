# neuroforge/agents/metacog.py (NOVO FICHEIRO)

from .base import BaseAgent
from neuroforge.integrations.gemini import GeminiClient

class MetaCog(BaseAgent):
    """
    O agente MetaCog é o revisor de código (Code Reviewer).
    Ele garante que o código gerado adere a um guia de estilo específico.
    """
    def __init__(self):
        self.gemini_client = GeminiClient()

    def run(self, code_to_review: str, style_guide: str) -> str:
        """
        Recebe um bloco de código e um guia de estilo, e retorna o código refatorado.

        Args:
            code_to_review (str): O código a ser analisado e refatorado.
            style_guide (str): As regras de estilo a serem seguidas.

        Returns:
            str: O código refatorado.
        """
        print("🤖 Agente MetaCog recebeu o código para revisão de estilo.")
        
        refactoring_prompt = f"""
        Você é um engenheiro de software sénior extremamente meticuloso, a fazer uma revisão de código.
        A sua única tarefa é refatorar o 'CÓDIGO A SER REVISTO' para que ele siga estritamente todas as
        regras definidas no 'GUIA DE ESTILO'.
        Não adicione novas funcionalidades. Não mude a lógica. Apenas aplique as regras de estilo.
        Retorne APENAS o ficheiro de código completo e refatorado.

        --- GUIA DE ESTILO ---
        {style_guide}
        ---

        --- CÓDIGO A SER REVISTO ---
        {code_to_review}
        ---
        """

        print("⚡️ A contactar a IA para aplicar o guia de estilo...")
        refactored_code = self.gemini_client.generate_code(refactoring_prompt)
        print("✅ Revisão de estilo concluída!")
        
        return refactored_code