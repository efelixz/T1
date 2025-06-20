# neuroforge/api_server.py (NOVA LOCALIZAÇÃO)

from fastapi import FastAPI, BackgroundTasks, HTTPException
from pydantic import BaseModel

# A importação agora é relativa, pois estamos dentro do mesmo pacote 'neuroforge'
from .engine.orchestrator import Orchestrator

# --- Definição da Aplicação FastAPI ---
app = FastAPI(
    title="NeuroForge API",
    description="Uma API para controlar o NeuroForge e iniciar projetos de desenvolvimento de forma remota.",
    version="1.0.0"
)

# --- Modelo de Dados para o Pedido ---
class ProjectGoalRequest(BaseModel):
    goal: str
    
    class Config:
        schema_extra = {
            "example": {
                "goal": "criar um jogo da cobrinha em Python com Pygame"
            }
        }


# --- Endpoint da API ---
@app.post("/project", status_code=202)
async def start_project(request: ProjectGoalRequest, background_tasks: BackgroundTasks):
    """
    Aceita um novo objetivo de projeto e inicia a sua execução em segundo plano.
    """
    if not request.goal:
        raise HTTPException(status_code=400, detail="O campo 'goal' não pode ser vazio.")

    print(f"API: Recebido novo pedido de projeto: '{request.goal}'")
    
    orchestrator = Orchestrator()
    
    background_tasks.add_task(orchestrator.handle_project_goal, request.goal)
    
    return {"message": "Projeto aceite. A execução foi iniciada em segundo plano."}


@app.get("/")
def read_root():
    """Endpoint raiz para verificar se a API está online."""
    return {"message": "Bem-vindo à API do NeuroForge. Vá para /docs para ver a documentação interativa."}