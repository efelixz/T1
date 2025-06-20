# neuroforge/agents/base.py

from abc import ABC, abstractmethod

class BaseAgent(ABC):
    """
    Classe base abstrata para todos os agentes do NeuroForge.
    
    Define a estrutura que todo agente deve seguir, garantindo que eles
    tenham um método `run` para executar suas tarefas.
    """
    def __init__(self, name: str, description: str):
        """
        Inicializa o agente base.

        Args:
            name (str): O nome do agente (ex: "NeoDev").
            description (str): Uma breve descrição do que o agente faz.
        """
        self.name = name
        self.description = description

    @abstractmethod
    async def run(self, task_description: str) -> str:
        """
        O método principal que executa a tarefa do agente.
        
        Este método deve ser implementado por todas as subclasses.

        Args:
            task_description (str): A descrição da tarefa a ser executada.

        Returns:
            str: O resultado da execução da tarefa (código, texto, etc.).
        """
        pass

    def __str__(self):
        return f"Agent(name={self.name}, description={self.description})"