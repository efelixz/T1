
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Shield, Code, Mic, Rocket, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Agentes Especializados",
    description: "NeoDev, LogicQA, UIForge e outros agentes trabalham em paralelo, cada um expert em sua área específica.",
    gradient: "from-neon-purple to-neon-purple-light",
    details: ["Arquitetura multi-agente", "Especialização por domínio", "Trabalho paralelo otimizado"]
  },
  {
    icon: Zap,
    title: "Continuidade Inteligente",
    description: "Pause seu trabalho. A IA detecta o contexto, assume a tarefa e entrega código pronto quando você voltar.",
    gradient: "from-soft-blue to-neon-purple",
    details: ["Detecção de contexto", "Pausas inteligentes", "Retomada automática"]
  },
  {
    icon: Shield,
    title: "100% Local & Privado",
    description: "Seu código nunca sai da sua máquina. Privacidade total com performance de cloud AI local.",
    gradient: "from-green-500 to-soft-blue",
    details: ["Zero telemetria", "Processamento local", "Dados seguros"]
  },
  {
    icon: Code,
    title: "Memória de Estilo",
    description: "A IA aprende seu estilo de código, padrões e preferências. Cada linha parece escrita por você.",
    gradient: "from-yellow-500 to-neon-purple",
    details: ["Aprendizado contínuo", "Padrões pessoais", "Consistência de código"]
  },
  {
    icon: Mic,
    title: "Modo Podcast",
    description: "Escute sua IA narrando o código enquanto trabalha. Perfeito para aprender e revisar mudanças.",
    gradient: "from-pink-500 to-neon-purple-light",
    details: ["Narração em tempo real", "Explicações técnicas", "Aprendizado auditivo"]
  },
  {
    icon: Rocket,
    title: "Auto Deploy",
    description: "Deploy automático em produção após testes completos. Da ideia ao deploy sem intervenção manual.",
    gradient: "from-orange-500 to-soft-blue",
    details: ["Testes automatizados", "Deploy contínuo", "Rollback inteligente"]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-graphite-light to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Funcionalidades</span>
            <span className="text-white"> Avançadas</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            IA que não apenas completa código, mas entende, refatora, testa e documenta. 
            O futuro da programação autônoma.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group glass-effect hover:neon-glow transition-all duration-500 cursor-pointer animate-slide-up border-gray-800 hover:border-neon-purple/30"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                <div className="relative mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-neon-purple to-neon-purple-light rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-xs sm:text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-neon-purple/20">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-4">
              Pronto para Experimentar?
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Instale NeuroForge e sinta a diferença de ter uma IA que realmente entende seu código.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-neon-purple to-neon-purple-light text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center">
                Começar Agora
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
