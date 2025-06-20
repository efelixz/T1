# neuroforge/integrations/gemini.py (VERSÃO CORRIGIDA COMPLETA)

import os
import google.generativeai as genai
from dotenv import load_dotenv

class GeminiClient:
    """
    Um cliente para interagir com a API do Google Gemini.
    
    Esta classe encapsula a configuração e os métodos para enviar prompts
    e receber respostas do modelo generativo do Gemini.
    """
    def __init__(self):
        """
        Inicializa o cliente Gemini.
        - Carrega as variáveis de ambiente do ficheiro .env.
        - Configura a API do Gemini com a chave fornecida.
        - Inicializa o modelo generativo.
        """
        load_dotenv()
        api_key = os.getenv("GEMINI_API_KEY")
        
        if not api_key:
            raise ValueError("A chave da API do Gemini não foi encontrada. Verifique o seu ficheiro .env.")
            
        genai.configure(api_key=api_key)
        
        # --- ALTERAÇÃO AQUI ---
        # Atualizamos o nome do modelo para um mais recente e disponível.
        self.model = genai.GenerativeModel('gemini-1.5-flash-latest')

    def generate_code(self, prompt: str) -> str:
        """
        Gera conteúdo (código, texto, etc.) com base num prompt.

        Args:
            prompt (str): A instrução ou pergunta a ser enviada para o modelo.

        Returns:
            str: A resposta de texto gerada pelo modelo.
        """
        try:
            # Adicionando um contexto mais específico para a geração de código
            enhanced_prompt = f"""
            Você é um assistente de programação de elite.
            Sua tarefa é gerar o código Python para o seguinte pedido.
            O código deve ser limpo, eficiente e bem documentado.

            Pedido do usuário: "{prompt}"

            Por favor, gere apenas o bloco de código Python, sem explicações adicionais em texto.
            """
            response = self.model.generate_content(enhanced_prompt)
            return response.text
        except Exception as e:
            print(f"Ocorreu um erro ao chamar a API do Gemini: {e}")
            return "Desculpe, não foi possível gerar o código neste momento."