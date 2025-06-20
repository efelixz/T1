import os

# Diretório base
base_dir = "neuroforge"

# Estrutura de pastas conforme documento, incluindo subpastas
estrutura = {
    "engine": ["orchestrator.py", "pause_detector.py", "intent_router.py"],
    "agents": ["neo_dev.py", "logic_qa.py", "auto_pm.py"],
    "personas": ["minimalist.py", "architect_senior.py"],
    "ui": ["flow_editor.vue", "node_palette.json", "code_preview.vue"],
    "integrations": ["google_docs.py", "drive_uploader.py", "calendar_bot.py"],
    "voice": ["narrator_engine.py", "podcast_compiler.py"],
    "memory": ["short_term.json", "long_term.json", "style_profile.json"],
    "vision": ["trend_analysis.py", "scenario_predictor.py"],
    "tests": ["unit_test_generator.py", "coverage_dashboard.vue"],
    "logs": ["activity_log.json"],
    "docs": ["readme.md", "usage_guide.html"],
    "plugins/vscode_extension": ["readme.txt"]
}

# Criar pastas e arquivos
for pasta, arquivos in estrutura.items():
    dir_path = os.path.join(base_dir, pasta)
    os.makedirs(dir_path, exist_ok=True)
    for arquivo in arquivos:
        file_path = os.path.join(dir_path, arquivo)
        with open(file_path, 'w') as f:
            f.write("")  # Cria o arquivo vazio

"✅ Estrutura completa com arquivos criada com sucesso."
