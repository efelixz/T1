
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const competitors = [
  {
    name: "NeuroForge X",
    logo: "🧠",
    features: {
      "IA Local": true,
      "Agentes Especializados": true,
      "Continuidade de Tarefas": true,
      "Aprendizado de Estilo": true,
      "Auto Deploy": true,
      "Modo Podcast": true,
      "Privacidade Total": true,
      "Performance 24/7": true
    },
    gradient: "from-neon-purple to-neon-purple-light",
    highlight: true
  },
  {
    name: "GitHub Copilot",
    logo: "🐙",
    features: {
      "IA Local": false,
      "Agentes Especializados": false,
      "Continuidade de Tarefas": false,
      "Aprendizado de Estilo": false,
      "Auto Deploy": false,
      "Modo Podcast": false,
      "Privacidade Total": false,
      "Performance 24/7": false
    },
    gradient: "from-gray-600 to-gray-800",
    highlight: false
  },
  {
    name: "CrewAI",
    logo: "🚢",
    features: {
      "IA Local": true,
      "Agentes Especializados": true,
      "Continuidade de Tarefas": false,
      "Aprendizado de Estilo": false,
      "Auto Deploy": false,
      "Modo Podcast": false,
      "Privacidade Total": true,
      "Performance 24/7": false
    },
    gradient: "from-blue-600 to-blue-800",
    highlight: false
  },
  {
    name: "TabNine",
    logo: "🔮",
    features: {
      "IA Local": false,
      "Agentes Especializados": false,
      "Continuidade de Tarefas": false,
      "Aprendizado de Estilo": true,
      "Auto Deploy": false,
      "Modo Podcast": false,
      "Privacidade Total": false,
      "Performance 24/7": false
    },
    gradient: "from-purple-600 to-purple-800",
    highlight: false
  }
];

const ComparisonSection = () => {
  const featureNames = Object.keys(competitors[0].features);
  
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-graphite to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">NeuroForge</span>
            <span className="text-white"> vs Concorrentes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Veja por que NeuroForge é a escolha certa para desenvolvimento autônomo com IA.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 mb-8">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-2">Funcionalidades</h3>
              </div>
              {competitors.map((competitor, index) => (
                <div key={index} className="text-center">
                  <Card className={`glass-effect ${competitor.highlight ? 'ring-2 ring-neon-purple' : ''}`}>
                    <CardHeader className="pb-4">
                      <div className="text-4xl mb-2">{competitor.logo}</div>
                      <CardTitle className={`text-lg ${competitor.highlight ? 'gradient-text' : 'text-white'}`}>
                        {competitor.name}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Features Comparison */}
            <div className="space-y-4">
              {featureNames.map((feature, featureIndex) => (
                <div 
                  key={featureIndex} 
                  className="grid grid-cols-5 gap-4 items-center py-4 animate-slide-up"
                  style={{animationDelay: `${featureIndex * 0.1}s`}}
                >
                  <div className="text-left">
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                  
                  {competitors.map((competitor, competitorIndex) => (
                    <div key={competitorIndex} className="text-center">
                      <div className={`glass-effect rounded-lg p-4 ${competitor.highlight ? 'ring-1 ring-neon-purple/50' : ''}`}>
                        {competitor.features[feature] ? (
                          <Check className={`w-6 h-6 mx-auto ${competitor.highlight ? 'text-neon-purple' : 'text-green-500'}`} />
                        ) : (
                          <X className="w-6 h-6 mx-auto text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Por que NeuroForge é Diferente?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Não somos apenas mais um assistente de código. Somos uma plataforma completa de desenvolvimento autônomo 
              que combina múltiplos agentes especializados, IA local para privacidade total, e capacidade de trabalhar 
              continuamente mesmo quando você não está. É o futuro da programação, disponível hoje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
