# NeuroForge X — Documento Detalhado de Funcionalidades por Módulo/Arquivo

---

## 1. ENGINE / Núcleo de Execução

### orchestrator.py  
- **Responsável por:** Controlar o fluxo geral do sistema via máquina de estados (FSM) e LangGraph.  
- **Funcionalidades:**  
  - Gerenciar estados dos agentes (ativos, em pausa, aguardando input).  
  - Encaminhar eventos para módulos relevantes (ex: pausa, comandos, resultados).  
  - Coordenar execução assíncrona entre agentes e módulos.  
- **Conexões:**  
  - pause_detector.py (para receber eventos de inatividade).  
  - intent_router.py (para receber comandos do usuário).  
  - decision_core.py (para determinar modo autônomo ou aguardando).  
  - Agentes (para disparar tarefas).  

### pause_detector.py  
- **Responsável por:** Detectar inatividade do usuário via monitoramento de mouse e teclado + timers.  
- **Funcionalidades:**  
  - Emitir eventos de “pausa iniciada” e “retorno detectado”.  
  - Ajustar timers conforme contexto da tarefa.  
- **Conexões:**  
  - orchestrator.py para informar mudanças de estado.  

### intent_router.py  
- **Responsável por:** Interpretar entrada natural (texto/voz) e identificar intenção.  
- **Funcionalidades:**  
  - Aplicar NLP para mapear intenções para agentes específicos.  
  - Suportar fallback para agentes genéricos.  
- **Conexões:**  
  - Recebe entrada do frontend/voz.  
  - Envia intenções para agentes como neo_dev.py, auto_pm.py, ui_forge.py, etc.  

### decision_core.py  
- **Responsável por:** Decidir se a IA age autonomamente ou espera input do usuário.  
- **Funcionalidades:**  
  - Avaliar contexto, histórico, perfil do usuário.  
  - Ajustar nível de autonomia dinamicamente.  
- **Conexões:**  
  - orchestrator.py para influenciar fluxo.  

### heartbeat_monitor.py  
- **Responsável por:** Monitorar foco e reações do usuário para ajustar comportamento.  
- **Funcionalidades:**  
  - Detectar pausas curtas, retorno ao trabalho e emoções (se possível).  
  - Adaptar ritmo de execução da IA.  

### fallback_manager.py  
- **Responsável por:** Gerenciar troca entre IA local (Ollama) e cloud (Gemini API).  
- **Funcionalidades:**  
  - Medir latência, custo, qualidade de resposta.  
  - Fazer switch transparente para o usuário.  

---

## 2. AGENTES CrewMind

### neo_dev.py  
- **Capaz de:**  
  - Gerar código backend, frontend e APIs completas com base em especificações ou comandos históricos.  
  - Suportar linguagens como Python (Flask, FastAPI), Node.js (Express), React, Vue.js, etc.  
  - Atualizar incrementalmente código existente, integrando com versionamento (GitHub).  
  - Criar documentação inicial via memory_smith.py.  
  - Invocar logic_qa.py para gerar testes unitários e E2E para o código gerado.  
  - Validar e refatorar código via meta_cog.py.  
- **Conecta com:**  
  - logic_qa.py para testes.  
  - github_commit.py para commits automáticos.  
  - memory_smith.py para documentação.  
  - fallback_manager.py para usar IA local ou cloud.  
- **Funcionalidades extras:**  
  - Geração automática de APIs REST e GraphQL.  
  - Criação de endpoints seguros com autenticação integrada.  
  - Capacidade de expor APIs para consumo externo via gateway.  

### logic_qa.py  
- **Capaz de:**  
  - Analisar código gerado para criar testes unitários e E2E.  
  - Gerar relatórios de cobertura e qualidade automaticamente.  
  - Integrar com pipelines CI/CD para execução contínua.  
- **Conecta com:**  
  - neo_dev.py para análise do código.  
  - coverage_dashboard.vue para visualização.  

### auto_pm.py  
- **Capaz de:**  
  - Gerenciar backlog, prazos e prioridades.  
  - Atualizar automaticamente calendário via calendar_bot.py.  
  - Enviar notificações e alertas via gmail_notifier.py.  
  - Adaptar planejamento conforme progresso e mudanças.  

### memory_smith.py  
- **Capaz de:**  
  - Gerar documentação técnica e explicações baseadas no código atual e histórico.  
  - Criar tutoriais personalizados.  
- **Conecta com:**  
  - neo_dev.py para base documental.  
  - docs/ para geração de documentação viva.  

### ui_forge.py  
- **Capaz de:**  
  - Criar interfaces visuais frontend a partir de comandos naturais ou fluxos.  
  - Atualizar preview em tempo real no builder visual.  
- **Conecta com:**  
  - builder visual (flow_editor.vue, code_preview.vue).  

### meta_cog.py  
- **Capaz de:**  
  - Analisar métricas de código (performance, legibilidade, complexidade).  
  - Aplicar refatoração automática baseada em métricas e feedback.  

### dynamic_agent.py  
- **Capaz de:**  
  - Criar novos agentes personalizados baseados em descrições do usuário.  

### vision_stream.py  
- **Capaz de:**  
  - Gerar roadmap de inovação e estratégias futuras.  
  - Analisar tendências de mercado para recomendar mudanças.  

### persona_bot.py  
- **Capaz de:**  
  - Imitar estilos específicos de programadores.  
  - Ajustar geração de código para refletir esses estilos.  

### collab_ghost.py  
- **Capaz de:**  
  - Simular times virtuais com diferentes visões e conflitos para testar robustez.  

### self_patch.py  
- **Capaz de:**  
  - Detectar erros no código e aplicar correções automaticamente.  

---

## 3. BUILDER VISUAL (ui/)

- Editor visual drag & drop que converte fluxos em chamadas de agentes.  
- node_palette.json lista agentes e ações disponíveis para arrastar.  
- Código gerado exibido em tempo real em code_preview.vue.  
- Linha do tempo para visualização e rollback de versões.  
- intent_to_node.js converte texto natural em nós do builder.

---

## 4. INTEGRAÇÕES (integrations/)

- google_docs.py: Cria documentação viva automaticamente.  
- drive_uploader.py: Backups incrementais dos projetos.  
- calendar_bot.py: Sincroniza e marca revisões, deadlines.  
- gmail_notifier.py: Envia alertas e relatórios.  
- gemini_wrapper.py: Fallback para geração IA na nuvem.  
- github_commit.py: Criação automática de commits explicativos.

---

## 5. MEMÓRIA / CONTEXTO (memory/)

- short_term.json: Contexto atual da tarefa.  
- long_term.json: Histórico completo de projetos.  
- style_profile.json: Perfil vetorial para personalização.  
- project_dna.json: Estrutura e estilo do projeto atual.  
- faiss_db/: Índice vetorial para busca rápida e embeddings.

---

## 6. VOZ / INTERAÇÃO (voice/)

- narrator_engine.py: Narração TTS do código/processos.  
- podcast_compiler.py: Podcast semanal automático com resumo.  
- speech_input.py: STT para comandos por voz.  
- avatar_face.py: Avatar expressivo para interação multimodal.

---

## 7. DOCUMENTAÇÃO VIVA (docs/)

- readme.md: Manual de setup e uso.  
- usage_guide.html: Documentação gerada automaticamente.  
- story_explainer.py: Narra “história” do projeto.  
- why_explainer.py: Explica motivos técnicos.  
- tutoriai.py: Tutor inteligente que acompanha usuário.

---

## 8. TESTES & LOGS (tests/ e logs/)

- unit_test_generator.py: Gera testes automáticos.  
- coverage_dashboard.vue: Painel visual de cobertura.  
- activity_log.json: Log detalhado com explicações.  
- rollback_snapshots/: Histórico de versões com rollback.

---

## 9. VISÃO / ROADMAP (vision/)

- trend_analysis.py: Análise de tendências tecnológicas.  
- scenario_predictor.py: Projeção de futuros com base em decisões.

---

## 10. PLUGINS E EXTENSÕES (plugins/)

- vscode_extension/: Extensão para integração no VSCode.  
- cli_tools/: Comandos para automação via terminal.

---

## 11. REQUISITOS DE SEGURANÇA

- Autenticação local + OAuth (Google, GitHub).  
- Criptografia AES para dados sensíveis.  
- Logs auditáveis e imutáveis.  
- Controle granular de permissões.

---

## 12. MODO ONLINE E OFFLINE (HÍBRIDO)

- Operação local completa com fallback automático para nuvem (Gemini).  
- Sincronização eventual do estado e memória entre local e online.  
- PWA para uso offline no browser.  
- App desktop (Electron/Tauri) para uso robusto local.  
- Geração e exposição de API REST/GraphQL para integrações externas.

---

## 13. FUNCIONALIDADES EXTRAS E DIFERENCIAIS

- IA explicável e transparente com logs interativos e visualização.  
- Auto-aprendizado contínuo com feedback do usuário.  
- Simulação e testes de impacto avançados.  
- Suporte multimodal (texto, voz, vídeo, avatar 3D).  
- Low-code/no-code para não-devs.  
- Deploy automático e gestão de ambientes.  
- Dashboards avançados com métricas e KPIs.  
- Gamificação para motivação e engajamento.  
- Suporte IoT e edge computing.  
- Inteligência de segurança integrada.  
- Internacionalização multilíngue avançada.  
- Personalização extrema de UI e perfis.  
- Monitoramento em tempo real com alertas proativos.  
- Assistente de código contextual para IDEs.

---

# Fim do Documento
