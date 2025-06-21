# NeuroForge X — Documento de Arquitetura e Detalhamento Técnico

---

## Sumário

- [1. Engine / Núcleo de Execução](#1-engine--núcleo-de-execução)  
- [2. Agentes CrewMind](#2-agentes-crewmind)  
- [3. Builder Visual](#3-builder-visual)  
- [4. Integrações (APIs)](#4-integrações-apis)  
- [5. Memória / Contexto](#5-memória--contexto)  
- [6. Voz / Interação](#6-voz--interação)  
- [7. Documentação Viva](#7-documentação-viva)  
- [8. Testes & Logs](#8-testes--logs)  
- [9. Visão / Roadmap](#9-visão--roadmap)  
- [10. Plugins e Extensões](#10-plugins-e-extensões)  
- [Requisitos de Segurança](#requisitos-de-segurança)  
- [Modo Online (Futuro)](#modo-online-futuro)

---

## 1. Engine / Núcleo de Execução

### 1.1 orchestrator.py  
**Função:**  
- Controlar o fluxo geral da aplicação via máquina de estados finita (FSM) e/ou grafo LangGraph.  
- Receber eventos do usuário, disparar agentes conforme o estado.  
- Gerenciar estados de pausa, execução e retomada.  
- Orquestrar chamadas assíncronas para agentes e integrações.

**Requisitos:**  
- Deve ser assíncrono, utilizando asyncio para rodar múltiplos agentes simultaneamente.  
- Deve suportar persistência e recuperação do estado atual do fluxo.  
- Interface para enviar comandos e receber status dos agentes.

---

### 1.2 pause_detector.py  
**Função:**  
- Detectar inatividade do usuário via eventos de mouse e teclado.  
- Definir pausas automáticas no fluxo e alertar `orchestrator.py`.  
- Ajustar timers para evitar falsos positivos.

**Requisitos:**  
- Configuração customizável do tempo para pausa.  
- Suportar modos de "pausa leve" (ex: não interrompe fluxo) e "pausa total".  
- Reportar eventos via callback/eventos assíncronos.

---

### 1.3 intent_router.py  
**Função:**  
- Receber comando natural do usuário (texto ou voz).  
- Interpretar intenção usando NLP (com IA local ou Gemini fallback).  
- Mapear intenção para agente específico e acionar.

**Requisitos:**  
- Suportar múltiplos idiomas (mínimo PT e EN).  
- Permitir extensão com novas intenções e agentes.  
- Logar cada interpretação para auditoria.

---

### 1.4 decision_core.py  
**Função:**  
- Decidir se o sistema age autonomamente ou aguarda comando explícito.  
- Basear decisão em contexto, perfil do usuário e estado atual.  
- Ajustar dinamicamente o nível de autonomia (modo assistente / modo automático).

**Requisitos:**  
- Algoritmo configurável com parâmetros de sensibilidade.  
- Interagir com `heartbeat_monitor.py` para análise de foco e reação do usuário.

---

### 1.5 heartbeat_monitor.py  
**Função:**  
- Monitorar foco do usuário na aplicação.  
- Detectar pausas curtas e retornos rápidos para ajustar fluxo.  
- Capturar reações (ex: confirmações, rejeições) para melhorar aprendizado.

**Requisitos:**  
- Fornecer eventos em tempo real para `decision_core.py`.  
- Suportar customização do tempo de análise.

---

### 1.6 fallback_manager.py  
**Função:**  
- Gerenciar troca entre IA local e Gemini API.  
- Avaliar latência, custo e qualidade para escolher motor de IA.  
- Fazer fallback transparente em caso de falha ou lentidão.

**Requisitos:**  
- Interface única para agentes usarem IA sem se preocupar com fallback.  
- Logs detalhados das decisões e métricas de performance.

---

## 2. Agentes CrewMind

### 2.1 neo_dev.py  
**Descrição:** Agente central para geração de backend, frontend e APIs.

**Responsabilidades:**  
- Receber descrição da tarefa em linguagem natural.  
- Gerar código backend (ex: APIs REST, GraphQL) com padrões definidos no `style_profile.json`.  
- Gerar frontend básico (React, Vue, etc) conforme necessidade.  
- Validar e ajustar o código gerado com base no contexto histórico e memória.  
- Entregar saída em formato estruturado (arquivos + estrutura JSON).  
- Comunicar-se com `github_commit.py` para commits automáticos.  
- Interagir com `logic_qa.py` para criar testes relacionados.

**Integrações:**  
- IA local Ollama (CodeGemma/Mistral) como base principal.  
- Gemini API para fallback ou geração avançada.  
- Memória vetorial para contexto e estilo.  
- GitHub para versionamento automático.

**Requisitos Funcionais:**  
- Suportar múltiplas linguagens backend (ex: Python Flask/FastAPI, Node.js Express).  
- Gerar código limpo e comentado, seguindo perfil do usuário.  
- Permitir extensão para novos frameworks via plugins.  
- Capacidade de atualizar código incrementalmente (patch).  
- Gerar relatórios simples de mudanças para auditoria.

---

### 2.2 logic_qa.py  
**Descrição:** Geração automática de testes unitários e end-to-end.

**Responsabilidades:**  
- Analisar código gerado pelo `neo_dev.py` ou código existente.  
- Gerar testes unitários, mocks e casos de teste E2E.  
- Produzir relatórios de cobertura de testes.  
- Integrar com ferramentas de CI/CD para execução automática.  
- Enviar relatórios via `gmail_notifier.py` e atualizar painel `coverage_dashboard.vue`.

**Requisitos Funcionais:**  
- Suportar frameworks comuns (pytest, jest, Cypress).  
- Adaptar estilo de testes ao perfil do usuário.  
- Suportar configuração para incluir/excluir testes específicos.

---

### 2.3 auto_pm.py  
**Descrição:** Planejamento autônomo de backlog, prazos e prioridades.

**Responsabilidades:**  
- Ler backlog atual e histórico de entregas.  
- Priorizar tarefas com base em deadlines, dependências e recursos.  
- Ajustar prazos dinamicamente conforme progresso e imprevistos.  
- Gerar relatórios de progresso e planejamento para equipes.  
- Atualizar agendas via `calendar_bot.py` e enviar notificações por `gmail_notifier.py`.

**Requisitos Funcionais:**  
- Integrar com ferramentas de gerenciamento (ex: Jira, Trello via APIs futuras).  
- Permitir intervenção manual para ajustes finos.  
- Suportar múltiplos projetos simultâneos.

---

### 2.4 memory_smith.py  
**Descrição:** Geração automática de documentação técnica e explicações.

**Responsabilidades:**  
- Criar documentação atualizada conforme código gerado/modificado.  
- Produzir explicações em linguagem natural para decisões de design.  
- Manter documentação viva sincronizada com repositórios.  
- Gerar tutoriais e guias interativos via `tutoriai.py`.

---

### 2.5 ui_forge.py  
**Descrição:** Criação de interfaces visuais via comandos do usuário.

**Responsabilidades:**  
- Interpretar comandos de UI e gerar código frontend (React/Vue).  
- Integrar com backend gerado pelo `neo_dev.py`.  
- Atualizar preview em tempo real no builder visual.

---

### 2.6 meta_cog.py  
**Descrição:** Refatoração de código baseada em métricas de qualidade.

**Responsabilidades:**  
- Analisar métricas de código (complexidade, duplicação, performance).  
- Sugerir e aplicar refatorações automáticas.  
- Gerar relatórios de melhoria.

---

### 2.7 dynamic_agent.py  
**Descrição:** Criação dinâmica de agentes com base em descrições do usuário.

**Responsabilidades:**  
- Gerar agentes novos programaticamente para tarefas específicas.  
- Registrar e integrar agentes ao builder visual.

---

### 2.8 vision_stream.py  
**Descrição:** Roadmap de inovação e estratégias de impacto.

**Responsabilidades:**  
- Analisar tendências do mercado e tecnologia.  
- Gerar cenários e estratégias para o produto.

---

### 2.9 persona_bot.py  
**Descrição:** Replica estilos específicos de programadores.

**Responsabilidades:**  
- Aprender e replicar estilo de código, comunicação e tomada de decisão.

---

### 2.10 collab_ghost.py  
**Descrição:** Simulação de times com visões e conflitos.

**Responsabilidades:**  
- Criar cenários de colaboração e conflito para teste da robustez do projeto.

---

### 2.11 self_patch.py  
**Descrição:** Auto correção e atualização de código.

**Responsabilidades:**  
- Detectar erros automaticamente.  
- Aplicar patches corretivos sem intervenção humana.

---

## 3. Builder Visual

### 3.1 flow_editor.vue  
- Editor visual para criação de fluxos estilo n8n.  
- Permite drag & drop, configuração de nós e ligações.

### 3.2 node_palette.json  
- Lista atualizada de agentes e ações disponíveis para fluxo.

### 3.3 code_preview.vue  
- Exibe código gerado em tempo real conforme fluxo executa.

### 3.4 timeline.vue  
- Mostra linha do tempo das execuções, versões e snapshots.

### 3.5 intent_to_node.js  
- Converte comandos naturais do usuário em blocos/configurações para o fluxo.

---

## 4. Integrações (APIs)

### 4.1 google_docs.py  
- Criação e atualização automática de documentação no Google Docs.

### 4.2 drive_uploader.py  
- Backups incrementais dos projetos para Google Drive.

### 4.3 calendar_bot.py  
- Gerencia agenda, prazos e eventos no Google Calendar.

### 4.4 gmail_notifier.py  
- Envio de notificações, relatórios e alertas via Gmail.

### 4.5 gemini_wrapper.py  
- Abstração para fallback inteligente com Gemini API.

### 4.6 github_commit.py  
- Criação automática de commits explicativos no GitHub.

---

## 5. Memória / Contexto

- Armazenamento curto prazo (`short_term.json`) para tarefa ativa.  
- Histórico longo (`long_term.json`) para aprendizado e contexto.  
- Perfil de estilo (`style_profile.json`) com tokens vetoriais.  
- Estrutura do projeto (`project_dna.json`).  
- Base vetorial local (`faiss_db/`) para busca e contextualização rápida.

---

## 6. Voz / Interação

- `narrator_engine.py`: narração em TTS do código/processo.  
- `podcast_compiler.py`: gera podcasts semanais com resumo das atividades.  
- `speech_input.py`: reconhece comandos via voz (STT).  
- `avatar_face.py`: avatar visual expressivo para interação.

---

## 7. Documentação Viva

- `readme.md`: manual inicial do projeto.  
- `usage_guide.html`: guia dinâmico de uso.  
- `story_explainer.py`: narrativa do projeto.  
- `why_explainer.py`: explicações técnicas de decisões.  
- `tutoriai.py`: tutor interativo em tempo real.

---

## 8. Testes & Logs

- `unit_test_generator.py`: geração automática de testes unitários.  
- `coverage_dashboard.vue`: painel para análise de cobertura.  
- `activity_log.json`: registro completo das ações e decisões da IA.  
- `rollback_snapshots/`: versões com possibilidade de rollback clicável.

---

## 9. Visão / Roadmap

- `trend_analysis.py`: análise de tendências e oportunidades.  
- `scenario_predictor.py`: projeções e cenários futuros.

---

## 10. Plugins e Extensões

- `vscode_extension/`: extensão para integração com VSCode.  
- `cli_tools/`: comandos para uso local via terminal.

---

## Requisitos de Segurança

- Autenticação local com fallback OAuth (Google, GitHub).  
- Criptografia AES para arquivos sensíveis.  
- Controle de versão e rollback automático.  
- Logs auditáveis para conformidade.  
- Monitoramento constante via heartbeat para estabilidade.

---

## Modo Online (Futuro)

- Multiusuário com permissões e autenticação segura.  
- Compartilhamento colaborativo de agentes e projetos.  
- Infraestrutura cloud: Firebase, Supabase, Railway.  
- IA colaborativa multiagente.  
- Marketplace para agentes/plugins.  
- Deploy via containers/Docker.

---

# Fim do Documento

---

Se quiser, posso gerar exemplos de código base para qualquer um desses módulos/agentes para acelerar seu desenvolvimento. Basta pedir!

