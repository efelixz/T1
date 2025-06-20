# neuroforge/ui/dashboard.py (VERSÃO COM LOG EM TEMPO REAL)

import streamlit as st
import sys
import io
import time
from contextlib import contextmanager

# Adiciona o caminho raiz ao sys.path para garantir que as importações funcionem
# quando o streamlit executa este ficheiro.
sys.path.insert(0, '.') 

from neuroforge.engine.orchestrator import Orchestrator

class StreamlitLogHandler:
    """
    Um objeto que se comporta como um ficheiro para redirecionar o stdout.
    Ele escreve cada mensagem numa área de texto do Streamlit em tempo real.
    """
    def __init__(self, placeholder):
        self.placeholder = placeholder
        self.buffer = ""

    def write(self, data):
        # Adiciona os novos dados ao buffer
        self.buffer += data
        # Atualiza o placeholder do Streamlit com o conteúdo completo do buffer
        self.placeholder.code(self.buffer, language='bash')

    def flush(self):
        # Necessário para a interface de ficheiro, mas o Streamlit atualiza por si só.
        pass

@contextmanager
def st_redirect_stdout():
    """
    Um gestor de contexto para redirecionar o stdout para o nosso StreamlitLogHandler.
    """
    # Cria o placeholder onde o log será exibido
    log_placeholder = st.empty()
    # Guarda o stdout original
    original_stdout = sys.stdout
    # Redireciona o stdout para a nossa classe personalizada
    sys.stdout = StreamlitLogHandler(log_placeholder)
    try:
        yield
    finally:
        # Quando o bloco 'with' termina, restaura o stdout original
        sys.stdout = original_stdout

def main():
    """
    Função principal que desenha a aplicação Streamlit.
    """
    st.set_page_config(page_title="NeuroForge UI", layout="wide")

    st.title("🧠 NeuroForge X Ultimate v3.0")
    st.caption("O seu parceiro de programação autônomo e proativo")

    # Coloca o input e o botão em colunas para um layout mais limpo
    col1, col2 = st.columns([3, 1])

    with col1:
        project_goal = st.text_area(
            "Qual é o objetivo do seu projeto?",
            height=100,
            placeholder="Ex: criar um jogo da cobrinha em Python com Pygame"
        )

    with col2:
        # Adiciona um espaço para alinhar o botão com a área de texto
        st.write("") 
        st.write("")
        start_button = st.button("▶️ Iniciar Projeto", type="primary", use_container_width=True)

    # Botão para iniciar o processo
    if start_button:
        if project_goal:
            # Redireciona todo o output do bloco 'with' para a página web
            with st_redirect_stdout():
                try:
                    # Inicializa e executa o orquestrador
                    # Reduzimos o timeout para a UI não parecer parada por muito tempo entre os passos
                    orchestrator = Orchestrator(idle_timeout_seconds=3)
                    orchestrator.handle_project_goal(project_goal)
                    st.success("Trabalho concluído!")
                    st.balloons()
                except Exception as e:
                    # Mostra erros de forma proeminente
                    st.error(f"Ocorreu um erro durante a execução: {e}")
        else:
            st.warning("Por favor, insira um objetivo para o projeto.")

if __name__ == "__main__":
    main()