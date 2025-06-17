
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Gratuito Local",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para projetos pessoais e aprendizado",
    features: [
      "IA Local básica",
      "2 agentes ativos",
      "Projetos ilimitados",
      "Suporte comunidade",
      "Modo pausa 2h/dia"
    ],
    cta: "Começar Grátis",
    popular: false,
    gradient: "from-gray-600 to-gray-800"
  },
  {
    name: "Pro Gemini",
    price: "R$ 97",
    period: "/mês",
    description: "Integração com Google Gemini para performance máxima",
    features: [
      "IA Local + Gemini Cloud",
      "Todos os agentes",
      "Modo pausa ilimitado",
      "Auto deploy",
      "Suporte prioritário",
      "API externa",
      "Modo podcast"
    ],
    cta: "Começar Pro",
    popular: true,
    gradient: "from-neon-purple to-neon-purple-light"
  },
  {
    name: "Dev Squad",
    price: "R$ 297",
    period: "/mês",
    description: "Para equipes que querem acelerar desenvolvimento",
    features: [
      "Tudo do Pro",
      "10 desenvolvedores",
      "Agentes customizados",
      "Relatórios avançados",
      "Integração Slack/Discord",
      "White-label",
      "Onboarding dedicado"
    ],
    cta: "Falar com Vendas",
    popular: false,
    gradient: "from-soft-blue to-neon-purple"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Solução completa para grandes organizações",
    features: [
      "Tudo do Dev Squad",
      "Usuários ilimitados",
      "Deploy on-premise",
      "SLA 99.9%",
      "Suporte 24/7",
      "Integração SSO",
      "Auditoria completa"
    ],
    cta: "Contato Enterprise",
    popular: false,
    gradient: "from-yellow-500 to-orange-500"
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-graphite-light via-black to-graphite">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Planos </span>
            <span className="gradient-text">Para Todos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Desde desenvolvimento pessoal até enterprise. Escolha o plano ideal para sua necessidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative glass-effect hover:neon-glow transition-all duration-300 animate-slide-up ${
                plan.popular ? 'ring-2 ring-neon-purple scale-105' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-neon-purple to-neon-purple-light text-white px-6 py-2 rounded-full text-sm font-medium">
                    Mais Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-neon-purple mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 text-white font-medium rounded-xl transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-neon-purple to-neon-purple-light hover:opacity-90 neon-glow' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Teste grátis por 14 dias. Sem cartão de crédito.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>✓ Cancelamento a qualquer momento</span>
            <span>✓ Migração gratuita entre planos</span>
            <span>✓ Suporte especializado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
