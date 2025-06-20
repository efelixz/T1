# neuroforge/engine/pause_detector.py (VERSÃO ATUALIZADA)

import time
import threading
from pynput import keyboard, mouse

class PauseDetector:
    """
    Monitoriza a atividade para detetar inatividade e também sinaliza
    quando uma tecla específica (Enter) é pressionada.
    """
    def __init__(self):
        self.last_activity_time = time.time()
        self.running = False
        self.listener_thread = None
        self.continue_event = threading.Event() # Evento para sinalizar a continuação

    def _update_activity_time(self, *args):
        """Callback chamado sempre que há atividade de rato ou qualquer tecla."""
        self.last_activity_time = time.time()

    def _on_press(self, key):
        """Callback específico para o teclado."""
        self._update_activity_time()
        # Se a tecla pressionada for Enter, ativa o nosso evento
        if key == keyboard.Key.enter:
            self.continue_event.set()

    def _start_listeners(self):
        """Inicia os listeners de teclado e rato."""
        self.running = True
        self.reset() # Garante que os estados estão limpos
        
        with mouse.Listener(on_move=self._update_activity_time, on_click=self._update_activity_time, on_scroll=self._update_activity_time) as m_listener:
            with keyboard.Listener(on_press=self._on_press) as k_listener:
                while self.running:
                    time.sleep(0.1)
                m_listener.stop()
                k_listener.stop()

    def start(self):
        """Inicia a monitorização em segundo plano."""
        if not self.running:
            self.listener_thread = threading.Thread(target=self._start_listeners, daemon=True)
            self.listener_thread.start()
            print("👁️  Detetor de pausa ativado. A observar a atividade...")

    def stop(self):
        """Para a monitorização."""
        if self.running:
            self.running = False
            if self.listener_thread:
                self.listener_thread.join(timeout=1)
            print("👁️  Detetor de pausa desativado.")

    def get_idle_time(self) -> float:
        """Retorna o tempo (em segundos) desde a última atividade detetada."""
        return time.time() - self.last_activity_time
    
    def reset(self):
        """Reseta o estado do detetor para um novo ciclo de espera."""
        self.last_activity_time = time.time()
        self.continue_event.clear()