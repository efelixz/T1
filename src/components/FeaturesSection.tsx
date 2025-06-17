
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Shield, Code, Mic, Rocket, ArrowRight, Users, DollarSign } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Agentes Especializados",
    description: "NeoDev, LogicQA, UIForge e outros agentes trabalham em paralelo, cada um expert em sua área específica.",
    gradient: "from-neon-purple to-neon-purple-light",
    details: ["Arquitetura multi-agente", "Especialização por domínio", "Trabalho paralelo otimizado"],
    roi: "↑ 300% produtividade"
  },
  {
    icon: Zap,
    title: "Continuidade Inteligente",
    description: "Pause seu trabalho. A IA detecta o contexto, assume a tarefa e entrega código pronto quando você voltar.",
    gradient: "from-soft-blue to-neon-purple",
    details: ["Detecção de contexto", "Pausas inteligentes", "Retomada automática"],
    roi: "↓ 80% tempo perdido"
  },
  {
    icon: Shield,
    title: "100% Local & Privado",
    description: "Seu código nunca sai da sua máquina. Privacidade total com performance de cloud AI local.",
    gradient: "from-green-500 to-soft-blue",
    details: ["Zero telemetria", "Processamento local", "Dados seguros"],
    roi: "0 vazamentos de dados"
  },
  {
    icon: Code,
    title: "Memória de Estilo",
    description: "A IA aprende seu estilo de código, padrões e preferências. Cada linha parece escrita por você.",
    gradient: "from-yellow-500 to-neon-purple",
    details: ["Aprendizado contínuo", "Padrões pessoais", "Consistência de código"],
    roi: "↑ 90% code quality"
  },
  {
    icon: Mic,
    title: "Modo Podcast",
    description: "Escute sua IA narrando o código enquanto trabalha. Perfeito para aprender e revisar mudanças.",
    gradient: "from-pink-500 to-neon-purple-light",
    details: ["Narração em tempo real", "Explicações técnicas", "Aprendizado auditivo"],
    roi: "↑ 50% aprendizado"
  },
  {
    icon: Rocket,
    title: "Auto Deploy",
    description: "Deploy automático em produção após testes completos. Da ideia ao deploy sem intervenção manual.",
    gradient: "from-orange-500 to-soft-blue",
    details: ["Testes automatizados", "Deploy contínuo", "Rollback inteligente"],
    roi: "↓ 95% tempo deploy"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Tech Lead @ Netflix",
    content: "NeuroForge transformou nossa velocidade de desenvolvimento. Agora conseguimos entregar features 3x mais rápido.",
    avatar: "👩‍💻"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder @ TechStartup",
    content: "Economizamos $200k/ano em custos de desenvolvimento. ROI impressionante em apenas 3 meses.",
    avatar: "👨‍💼"
  },
  {
    name: "Elena Kowalski",
    role: "Senior Dev @ Google",
    content: "A continuidade inteligente é revolutionary. Posso pausar projetos sem perder contexto.",
    avatar: "👩‍🔬"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-graphite-light to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Funcionalidades</span>
            <span className="text-white"> que Geram ROI</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            IA que não apenas completa código, mas entende, refatora, testa e documenta. 
            <span className="text-green-400 font-semibold"> ROI médio de 400% em 6 meses</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
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
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <span className="text-xs text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded">
                      {feature.roi}
                    </span>
                  </div>
                  
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
        
        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center gradient-text mb-8">
            O que os Clientes Dizem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-effect rounded-xl p-6 animate-slide-up hover:neon-glow transition-all duration-300"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced CTA with Investment Focus */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto border border-neon-purple/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-4">
                  Pronto para 10x sua Produtividade?
                </h3>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  Junte-se a 15.000+ desenvolvedores que já economizam 20+ horas por semana com NeuroForge.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-green-400" />
                    <span>15 dias grátis</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1 text-green-400" />
                    <span>ROI garantido</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <button className="bg-gradient-to-r from-neon-purple to-neon-purple-light text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center text-lg">
                  Começar Teste Grátis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <p className="text-xs text-gray-500">
                  Sem cartão de crédito • Cancelamento imediato • Suporte 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
