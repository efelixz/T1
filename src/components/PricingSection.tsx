
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star, Zap, Crown, Building } from "lucide-react";

const plans = [
  {
    name: "Starter Local",
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
    icon: null,
    savings: null,
    trial: "Sempre gratuito"
  },
  {
    name: "Pro Gemini",
    price: "R$ 97",
    period: "/mês",
    originalPrice: "R$ 197",
    description: "Para desenvolvedores sérios que querem máxima performance",
    features: [
      "IA Local + Gemini Cloud",
      "Todos os agentes ativos",
      "Modo pausa ilimitado",
      "Auto deploy integrado",
      "Suporte prioritário",
      "API externa completa",
      "Modo podcast avançado",
      "Integrações premium",
      "Analytics avançado"
    ],
    cta: "Teste 15 dias grátis",
    popular: true,
    gradient: "from-neon-purple to-neon-purple-light",
    icon: Star,
    savings: "Economize 50%",
    trial: "15 dias grátis"
  },
  {
    name: "Dev Squad",
    price: "R$ 297",
    period: "/mês",
    originalPrice: "R$ 497",
    description: "Para equipes que querem acelerar desenvolvimento exponencialmente",
    features: [
      "Tudo do Pro incluído",
      "Até 10 desenvolvedores",
      "Agentes customizados",
      "Relatórios de ROI",
      "Integração Slack/Discord",
      "White-label completo",
      "Onboarding dedicado",
      "Analytics de produtividade",
      "SLA 99.9% garantido"
    ],
    cta: "Agendar Demo",
    popular: false,
    gradient: "from-soft-blue to-neon-purple",
    icon: Zap,
    savings: "Economize 40%",
    trial: "30 dias grátis"
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
      "SLA 99.99% garantido",
      "Suporte 24/7 dedicado",
      "Integração SSO/LDAP",
      "Auditoria completa",
      "Customização total",
      "Account manager dedicado",
      "Treinamento personalizado"
    ],
    cta: "Falar com Vendas",
    popular: false,
    gradient: "from-yellow-500 to-orange-500",
    icon: Building,
    savings: null,
    trial: "POC gratuito"
  }
];

const PricingSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-graphite-light via-black to-graphite">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Planos que </span>
            <span className="gradient-text">Geram ROI</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            Desde desenvolvimento pessoal até enterprise. <span className="text-green-400 font-semibold">ROI médio de 400% em 6 meses</span>.
          </p>
          <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-sm text-green-400">
            <Crown className="w-4 h-4 mr-2" />
            Oferta de Lançamento: 50% OFF nos primeiros 3 meses
          </div>
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
              
              {plan.savings && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {plan.savings}
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
                  {plan.originalPrice && (
                    <div className="text-sm text-gray-500 line-through mb-1">
                      {plan.originalPrice}
                    </div>
                  )}
                  <span className="text-3xl sm:text-4xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm sm:text-base">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {plan.description}
                </p>
                <div className="text-xs text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded">
                  {plan.trial}
                </div>
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
                
                {plan.popular && (
                  <p className="text-xs text-center text-gray-500">
                    ROI médio de R$ 15.000/mês após 3 meses
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced ROI Calculator Section */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-6xl mx-auto border border-gray-800">
            <h3 className="text-2xl font-bold gradient-text mb-6">
              Calculadora de ROI
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">20h</div>
                <div className="text-gray-400 text-sm">Economia semanal média</div>
                <div className="text-green-400 text-xs mt-1">por desenvolvedor</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">R$ 5.000</div>
                <div className="text-gray-400 text-sm">Economia mensal em custos</div>
                <div className="text-green-400 text-xs mt-1">dev sênior (R$ 250/h)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">400%</div>
                <div className="text-gray-400 text-sm">ROI médio em 6 meses</div>
                <div className="text-green-400 text-xs mt-1">baseado em 500+ clientes</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
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
                <span>Garantia de ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
