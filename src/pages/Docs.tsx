
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, Copy, ExternalLink, Book, Zap, Settings, Code, Shield, Users } from "lucide-react";
import { useState } from "react";

const Docs = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarSections = [
    {
      title: "Começando",
      icon: Book,
      items: [
        { id: "getting-started", title: "Instalação", active: true },
        { id: "quick-start", title: "Quick Start" },
        { id: "first-project", title: "Primeiro Projeto" }
      ]
    },
    {
      title: "Agentes",
      icon: Zap,
      items: [
        { id: "neodev", title: "NeoDev - Desenvolvedor" },
        { id: "logicqa", title: "LogicQA - Testes" },
        { id: "uiforge", title: "UIForge - Interface" },
        { id: "docgenius", title: "DocGenius - Documentação" }
      ]
    },
    {
      title: "Configuração",
      icon: Settings,
      items: [
        { id: "config", title: "Configuração Geral" },
        { id: "integrations", title: "Integrações" },
        { id: "custom-agents", title: "Agentes Personalizados" }
      ]
    },
    {
      title: "API",
      icon: Code,
      items: [
        { id: "api-reference", title: "Referência da API" },
        { id: "webhooks", title: "Webhooks" },
        { id: "sdk", title: "SDK" }
      ]
    },
    {
      title: "Segurança",
      icon: Shield,
      items: [
        { id: "privacy", title: "Privacidade" },
        { id: "security", title: "Segurança" },
        { id: "compliance", title: "Compliance" }
      ]
    },
    {
      title: "Comunidade",
      icon: Users,
      items: [
        { id: "contributing", title: "Contribuindo" },
        { id: "support", title: "Suporte" },
        { id: "changelog", title: "Changelog" }
      ]
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                {/* Search */}
                <div className="relative mb-8">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Buscar na documentação..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-neon-purple"
                  />
                </div>

                {/* Navigation */}
                <nav className="space-y-6">
                  {sidebarSections.map((section) => (
                    <div key={section.title}>
                      <h3 className="flex items-center gap-2 text-white font-semibold mb-3">
                        <section.icon className="w-4 h-4 text-neon-purple" />
                        {section.title}
                      </h3>
                      <ul className="space-y-2 ml-6">
                        {section.items.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => setActiveSection(item.id)}
                              className={`text-left w-full p-2 rounded transition-colors ${
                                activeSection === item.id
                                  ? "text-neon-purple bg-gray-800"
                                  : "text-gray-400 hover:text-white hover:bg-gray-800"
                              }`}
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="max-w-4xl">
                
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                  <span>Docs</span>
                  <ChevronRight className="w-4 h-4" />
                  <span>Começando</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Instalação</span>
                </div>

                {/* Content */}
                <div className="prose prose-invert max-w-none">
                  <h1 className="text-4xl font-bold text-white mb-8">Instalação do NeuroForge</h1>
                  
                  <p className="text-xl text-gray-300 mb-8">
                    Comece a usar o NeuroForge em menos de 5 minutos. Nossa IA local está pronta para revolucionar seu workflow de desenvolvimento.
                  </p>

                  {/* Quick Install */}
                  <div className="glass-effect rounded-xl p-6 mb-8 neon-glow">
                    <h2 className="text-2xl font-bold text-white mb-4">Instalação Rápida</h2>
                    <p className="text-gray-300 mb-4">Execute este comando para instalar o NeuroForge:</p>
                    
                    <div className="relative">
                      <div className="code-block flex items-center justify-between">
                        <code className="text-neon-purple">bash &lt;(curl -fsSL https://get.neuroforge.dev)</code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard("bash <(curl -fsSL https://get.neuroforge.dev)")}
                          className="text-gray-400 hover:text-white"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Requirements */}
                  <h2 className="text-2xl font-bold text-white mb-6">Requisitos do Sistema</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="glass-effect rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Mínimo</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• 8GB RAM</li>
                        <li>• 4 cores CPU</li>
                        <li>• 10GB espaço livre</li>
                        <li>• Python 3.9+</li>
                        <li>• Node.js 18+</li>
                      </ul>
                    </div>
                    <div className="glass-effect rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Recomendado</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• 32GB RAM</li>
                        <li>• 8+ cores CPU</li>
                        <li>• 100GB SSD</li>
                        <li>• GPU NVIDIA (opcional)</li>
                        <li>• Docker instalado</li>
                      </ul>
                    </div>
                  </div>

                  {/* Step by step */}
                  <h2 className="text-2xl font-bold text-white mb-6">Instalação Passo a Passo</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-neon-purple rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Download do CLI</h3>
                        <p className="text-gray-300 mb-3">Baixe e instale a CLI oficial do NeuroForge:</p>
                        <div className="code-block">
                          <code>npm install -g @neuroforge/cli</code>
                          <Button variant="ghost" size="sm" className="ml-4 text-gray-400 hover:text-white">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-neon-purple rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Inicializar Projeto</h3>
                        <p className="text-gray-300 mb-3">Crie e configure seu primeiro projeto:</p>
                        <div className="code-block">
                          <code>neuroforge init meu-projeto</code>
                          <Button variant="ghost" size="sm" className="ml-4 text-gray-400 hover:text-white">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-neon-purple rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Ativar Agentes</h3>
                        <p className="text-gray-300 mb-3">Inicie os agentes IA locais:</p>
                        <div className="code-block">
                          <code>neuroforge start</code>
                          <Button variant="ghost" size="sm" className="ml-4 text-gray-400 hover:text-white">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Verification */}
                  <div className="glass-effect rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">✅ Verificar Instalação</h3>
                    <p className="text-gray-300 mb-3">Execute para verificar se tudo está funcionando:</p>
                    <div className="code-block">
                      <code>neuroforge status</code>
                      <Button variant="ghost" size="sm" className="ml-4 text-gray-400 hover:text-white">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Next Steps */}
                  <h2 className="text-2xl font-bold text-white mb-6">Próximos Passos</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="glass-effect rounded-lg p-6 hover:neon-glow transition-all cursor-pointer">
                      <h3 className="text-lg font-semibold text-white mb-2">Quick Start Guide</h3>
                      <p className="text-gray-300 mb-4">Aprenda os conceitos básicos e crie seu primeiro projeto automatizado.</p>
                      <div className="flex items-center text-neon-purple">
                        <span>Começar tutorial</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                    <div className="glass-effect rounded-lg p-6 hover:neon-glow transition-all cursor-pointer">
                      <h3 className="text-lg font-semibold text-white mb-2">Configurar Agentes</h3>
                      <p className="text-gray-300 mb-4">Personalize os agentes IA para seu estilo de desenvolvimento.</p>
                      <div className="flex items-center text-neon-purple">
                        <span>Ver configurações</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="glass-effect rounded-xl p-6 border border-neon-purple/30">
                    <h3 className="text-lg font-semibold text-white mb-2">Precisa de ajuda?</h3>
                    <p className="text-gray-300 mb-4">
                      Nossa comunidade e suporte estão sempre disponíveis para ajudar.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-neon-purple hover:text-white">
                        Discord Community
                      </Button>
                      <Button className="bg-neon-purple hover:bg-neon-purple-light">
                        Contatar Suporte
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Docs;
