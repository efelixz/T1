# neuroforge/integrations/github.py (NOVO FICHEIRO)

import os
from github import Github, GithubException
from git import Repo, GitCommandError
from dotenv import load_dotenv

class GitHubManager:
    """
    Gere a criação de repositórios no GitHub e o envio de código local.
    """
    def __init__(self):
        load_dotenv()
        self.github_token = os.getenv("GITHUB_TOKEN")
        if not self.github_token:
            raise ValueError("O token do GitHub não foi encontrado. Verifique o seu ficheiro .env.")
        self.github_api = Github(self.github_token)
        self.user = self.github_api.get_user()

    def create_repo(self, repo_name: str, description: str) -> str | None:
        """
        Cria um novo repositório privado na conta do usuário no GitHub.
        """
        try:
            print(f"📦 A criar o repositório '{repo_name}' no GitHub...")
            repo = self.user.create_repo(
                name=repo_name,
                description=description,
                private=True, # Cria como privado por segurança
            )
            print(f"✅ Repositório '{repo.full_name}' criado com sucesso.")
            return repo.clone_url
        except GithubException as e:
            # Código 422 indica que o repositório provavelmente já existe
            if e.status == 422:
                print(f"⚠️ Aviso: O repositório '{self.user.login}/{repo_name}' já existe.")
                # Retorna o URL de um repo existente
                return self.user.get_repo(repo_name).clone_url
            else:
                print(f"❌ Erro ao criar o repositório no GitHub: {e}")
                return None

    def push_to_repo(self, local_path: str, repo_url: str, commit_message: str):
        """
        Inicializa um repositório git local, faz o commit e envia para o GitHub.
        """
        print(f"🛰️  A preparar para enviar o código de '{local_path}'...")
        try:
            # Inicializa o repositório local
            repo = Repo.init(local_path)

            # Adiciona todos os ficheiros
            repo.git.add(A=True)

            # Faz o commit
            repo.index.commit(commit_message)
            print("   - Commit inicial criado.")

            # Adiciona o remote e faz o push
            if "origin" in repo.remotes:
                origin = repo.remotes.origin
                origin.set_url(repo_url)
            else:
                origin = repo.create_remote("origin", repo_url)
            
            # Garante que estamos a enviar para o branch 'main'
            if repo.head.ref.name != 'main':
                 repo.head.ref = repo.create_head('main')
            
            print(f"   - A enviar para {repo_url}...")
            origin.push(refspec="main:main", force=True)
            
            print("✅ Push para o GitHub concluído com sucesso!")
            return True
        except GitCommandError as e:
            print(f"❌ Erro durante a execução dos comandos Git: {e}")
            return False