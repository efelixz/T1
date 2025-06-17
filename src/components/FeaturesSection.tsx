
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Shield, Code, Mic, Rocket } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Agentes Especializados",
    description: "NeoDev, LogicQA, UIForge e outros agentes trabalham em paralelo, cada um expert em sua área.",
    gradient: "from-neon-purple to-neon-purple-light"
  },
  {
    icon: Zap,
    title: "Continuidade Inteligente",
    description: "Pause seu trabalho. A IA detecta o contexto, assume a tarefa e entrega código pronto quando você voltar.",
    gradient: "from-soft-blue to-neon-purple"
  },
  {
    icon: Shield,
    title: "100% Local & Privado",
    description: "Seu código nunca sai da sua máquina. Privacidade total com performance de cloud AI.",
    gradient: "from-green-500 to-soft-blue"
  },
  {
    icon: Code,
    title: "Memória de Estilo",
    description: "A IA aprende seu estilo de código, padrões e preferências. Cada linha parece escrita por você.",
    gradient: "from-yellow-500 to-neon-purple"
  },
  {
    icon: Mic,
    title: "Modo Podcast",
    description: "Escute sua IA narrando o código enquanto trabalha. Perfeito para aprender e revisar.",
    gradient: "from-pink-500 to-neon-purple-light"
  },
  {
    icon: Rocket,
    title: "Auto Deploy",
    description: "Deploy automático em produção após testes. Da ideia ao deploy sem intervenção manual.",
    gradient: "from-orange-500 to-soft-blue"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-graphite-light to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Funcionalidades</span>
            <span className="text-white"> Avançadas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            IA que não apenas completa código, mas entende, refatora, testa e documenta. 
            O futuro da programação autônoma.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-effect hover:neon-glow transition-all duration-300 group cursor-pointer animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
