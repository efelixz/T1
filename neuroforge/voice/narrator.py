# neuroforge/voice/narrator.py (NOVO FICHEIRO)

import os
from gtts import gTTS
from playsound import playsound
import time

class Narrator:
    """
    Converte texto em fala e reproduz o áudio.
    """
    def __init__(self, temp_dir="temp_audio"):
        self.temp_dir = temp_dir
        # Garante que o diretório de áudio temporário exista
        os.makedirs(self.temp_dir, exist_ok=True)
        # Limpa ficheiros de áudio antigos ao iniciar
        self._cleanup()

    def _cleanup(self):
        """Remove ficheiros de áudio temporários antigos."""
        for f in os.listdir(self.temp_dir):
            os.remove(os.path.join(self.temp_dir, f))

    def say(self, text: str):
        """
        Converte uma string de texto em fala.

        Args:
            text (str): O texto a ser falado.
        """
        # Remove emojis ou caracteres que podem não ser suportados pela gTTS
        text_to_speak = ''.join(c for c in text if c.isalnum() or c.isspace() or c in '.,-!?')
        
        if not text_to_speak.strip():
            # Não tenta falar um texto vazio
            return

        try:
            # Cria um nome de ficheiro único para evitar colisões
            temp_filename = os.path.join(self.temp_dir, f"speech_{int(time.time() * 1000)}.mp3")
            
            # Gera o áudio
            tts = gTTS(text=text_to_speak, lang='pt-br', slow=False)
            tts.save(temp_filename)

            # Toca o áudio
            playsound(temp_filename)

            # Remove o ficheiro de áudio após tocar
            os.remove(temp_filename)

        except AssertionError:
            # A gTTS lança um AssertionError se não houver texto para falar
            print("⚠️ Aviso do Narrador: Nenhum texto para falar.")
        except Exception as e:
            # Captura outras exceções (ex: problemas de rede com a gTTS)
            print(f"❌ Erro do Narrador: Não foi possível reproduzir o áudio. {e}")