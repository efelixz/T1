# check_imports.py
import sys
import traceback
import os

print("--- Verificando o Ambiente de Importação ---")
print(f"Versão do Python: {sys.version}")
print(f"Diretório Atual: {os.getcwd()}")
print("\nCaminhos de Importação (sys.path):")
# Imprime os caminhos que o Python usa para encontrar módulos
for path in sys.path:
    print(f"- {path}")
print("-------------------------------------------\n")

try:
    print("Tentando importar 'neuroforge.api_server'...")
    # Esta é a linha que está a falhar dentro do Uvicorn
    from neuroforge import api_server
    
    print("\n✅ SUCESSO! O módulo 'neuroforge.api_server' foi importado com sucesso.")
    print("Isto significa que a estrutura do projeto e os ficheiros __init__.py estão corretos.")
    print("O problema está provavelmente na forma como o Uvicorn está a ser chamado ou no seu ambiente específico.")

except ImportError as e:
    print("\n❌ FALHA! Ocorreu um erro de importação.")
    print(f"Mensagem de Erro Específica: {e}")
    print("\n--- Rastreamento Completo do Erro (Traceback) ---")
    traceback.print_exc()
    print("-------------------------------------------------")
    print("\nPRÓXIMOS PASSOS:")
    print("O traceback acima deve dar-nos a causa exata. Se for um 'ModuleNotFoundError' para um módulo")
    print("específico, pode indicar um ficheiro __init__.py em falta numa subpasta, um erro de digitação,")
    print("ou uma dependência não instalada.")

except Exception as e:
    print(f"\n❌ FALHA! Ocorreu um erro inesperado do tipo: {type(e).__name__}")
    print(f"Mensagem de Erro: {e}")
    print("\n--- Rastreamento Completo do Erro (Traceback) ---")
    traceback.print_exc()
    print("-------------------------------------------------")