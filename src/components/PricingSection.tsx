
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star, Zap } from "lucide-react";

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
      "Modo pausa 2h/dia",
      "Documentação completa"
    ],
    cta: "Começar Grátis",
    popular: false,
    gradient: "from-gray-600 to-gray-800",
    icon: null
  },
  {
    name: "Pro Gemini",
    price: "R$ 97",
    period: "/mês",
    description: "Integração com Google Gemini para performance máxima",
    features: [
      "IA Local + Gemini Cloud",
      "Todos os agentes ativos",
      "Modo pausa ilimitado",
      "Auto deploy integrado",
      "Suporte prioritário",
      "API externa completa",
      "Modo podcast avançado",
      "Integrações premium"
    ],
    cta: "Começar Pro",
    popular: true,
    gradient: "from-neon-purple to-neon-purple-light",
    icon: Star
  },
  {
    name: "Dev Squad",
    price: "R$ 297",
    period: "/mês",
    description: "Para equipes que querem acelerar desenvolvimento",
    features: [
      "Tudo do Pro incluído",
      "Até 10 desenvolvedores",
      "Agentes customizados",
      "Relatórios avançados",
      "Integração Slack/Discord",
      "White-label completo",
      "Onboarding dedicado",
      "Analytics de produtividade"
    ],
    cta: "Falar com Vendas",
    popular: false,
    gradient: "from-soft-blue to-neon-purple",
    icon: Zap
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
      "SLA 99.9% garantido",
      "Suporte 24/7 dedicado",
      "Integração SSO/LDAP",
      "Auditoria completa",
      "Customização total"
    ],
    cta: "Contato Enterprise",
    popular: false,
    gradient: "from-yellow-500 to-orange-500",
    icon: null
  }
];

const PricingSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-graphite-light via-black to-graphite">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Planos </span>
            <span className="gradient-text">Para Todos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Desde desenvolvimento pessoal até enterprise. Escolha o plano ideal para sua necessidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative glass-effect hover:neon-glow transition-all duration-300 animate-slide-up group ${
                plan.popular ? 'ring-2 ring-neon-purple scale-105 lg:scale-110' : ''
              } border-gray-800`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-neon-purple to-neon-purple-light text-white px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Mais Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 sm:pb-8 relative">
                {plan.icon && (
                  <div className="absolute top-4 right-4">
                    <plan.icon className="w-5 h-5 text-neon-purple" />
                  </div>
                )}
                <CardTitle className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm sm:text-base">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6 flex-grow flex flex-col">
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-neon-purple mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 text-white font-medium rounded-xl transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-neon-purple to-neon-purple-light hover:opacity-90 neon-glow shadow-lg' 
                      : 'bg-gray-700 hover:bg-gray-600 border border-gray-600'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto border border-gray-800">
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Teste grátis por 14 dias. Sem cartão de crédito. Cancele a qualquer momento.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-sm text-gray-500">
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>Cancelamento imediato</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>Migração gratuita</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>Suporte especializado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
