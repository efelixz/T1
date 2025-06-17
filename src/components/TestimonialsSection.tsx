
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, TrendingUp, DollarSign, Clock, Building2, Users2, Zap } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP Engineering",
    company: "Netflix",
    companySize: "15,000+ employees",
    content: "NeuroForge transformou nossa velocidade de desenvolvimento globalmente. Conseguimos entregar features 3x mais rápido e reduzimos bugs críticos em 60%. O ROI foi visível em apenas 2 semanas.",
    avatar: "👩‍💻",
    rating: 5,
    metrics: {
      productivity: "+300%",
      timesSaved: "40h/semana por dev",
      roi: "$2.5M economizados/ano"
    },
    quote: "Revolucionou nossa engineering culture"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-founder",
    company: "TechFlow (YC S22)",
    companySize: "Series A, $15M raised",
    content: "Economizamos $500k/ano em custos de desenvolvimento. A IA literalmente programa enquanto dormimos. Nosso time de 8 devs agora produz como 25 desenvolvedores sênior.",
    avatar: "👨‍💼",
    rating: 5,
    metrics: {
      productivity: "+600%",
      timesSaved: "50h/semana equipe",
      roi: "$500k economizados/ano"
    },
    quote: "Game changer para startups em crescimento"
  },
  {
    name: "Dr. Elena Kowalski",
    role: "Staff Engineer",
    company: "Google DeepMind",
    companySize: "200,000+ employees",
    content: "A continuidade inteligente é revolutionary para pesquisa. Posso pausar experimentos de ML complexos sem perder contexto. A IA entende melhor arquiteturas do que alguns PhD fellows.",
    avatar: "👩‍🔬",
    rating: 5,
    metrics: {
      productivity: "+400%",
      timesSaved: "30h/semana",
      roi: "10x faster research cycles"
    },
    quote: "Essential para AI research at scale"
  },
  {
    name: "David Kim",
    role: "Director of Engineering",
    company: "Spotify",
    companySize: "9,000+ employees",
    content: "Implementamos NeuroForge em 12 squads. Resultado: 80% menos code review time, 85% menos bugs em produção, e developer happiness score aumentou 45%. Complete transformation.",
    avatar: "👨‍💻",
    rating: 5,
    metrics: {
      productivity: "+450%",
      timesSaved: "60h/semana squad",
      roi: "$3.2M economizados/ano"
    },
    quote: "Definiu nosso novo padrão de excelência"
  },
  {
    name: "Ana Silva",
    role: "Senior Full-Stack Developer",
    company: "Freelancer & Consultant",
    companySize: "Independent contractor",
    content: "Como freelancer, tempo é tudo. NeuroForge me permite aceitar 4x mais projetos mantendo qualidade premium. Minha receita anual cresceu 380% em 8 meses.",
    avatar: "👩‍💼",
    rating: 5,
    metrics: {
      productivity: "+400%",
      timesSaved: "35h/semana",
      roi: "+380% revenue growth"
    },
    quote: "Transformed my independent business"
  },
  {
    name: "James Wilson",
    role: "VP Engineering",
    company: "Uber Technologies",
    companySize: "29,000+ employees",
    content: "Testamos em 200 desenvolvedores across 15 countries. Resultados impressionantes: time-to-market 70% faster, operational costs 50% lower. Expanding to 2,000+ engineers globally.",
    avatar: "👨‍🚀",
    rating: 5,
    metrics: {
      productivity: "+500%",
      timesSaved: "80h/semana time",
      roi: "$8M+ economizados/ano"
    },
    quote: "Critical infrastructure for scale"
  }
];

const companyStats = [
  { metric: "50,000+", label: "Active Developers", icon: Users2 },
  { metric: "500+", label: "Enterprise Clients", icon: Building2 },
  { metric: "97%", label: "Customer Retention", icon: TrendingUp },
  { metric: "$12M", label: "Series A Funding", icon: DollarSign }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-graphite to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Resultados </span>
            <span className="gradient-text">Comprovados</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
            De startups YC a Big Tech: <span className="text-green-400 font-semibold">$50M+ economizados</span> em custos de desenvolvimento.
            <br />
            <span className="text-neon-purple font-semibold">Casos reais de transformação empresarial</span>.
          </p>
          
          {/* Company Traction Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
            {companyStats.map((stat, index) => (
              <div key={index} className="glass-effect rounded-xl p-4 hover:neon-glow transition-all duration-300">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-neon-purple mr-2" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.metric}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-effect hover:neon-glow transition-all duration-300 animate-slide-up border-gray-800 group h-full"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-xs text-neon-purple font-medium">{testimonial.company}</div>
                      <div className="text-xs text-gray-500">{testimonial.companySize}</div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-neon-purple opacity-60" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote Highlight */}
                <div className="bg-neon-purple/10 border-l-4 border-neon-purple rounded-r-lg p-3 mb-4">
                  <p className="text-neon-purple font-medium text-sm italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                {/* Content */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {testimonial.content}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-800">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
                    </div>
                    <div className="text-xs font-bold text-green-400">{testimonial.metrics.productivity}</div>
                    <div className="text-xs text-gray-500">Produtividade</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-3 h-3 text-blue-400 mr-1" />
                    </div>
                    <div className="text-xs font-bold text-blue-400">{testimonial.metrics.timesSaved}</div>
                    <div className="text-xs text-gray-500">Economia</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="w-3 h-3 text-yellow-400 mr-1" />
                    </div>
                    <div className="text-xs font-bold text-yellow-400">{testimonial.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced Business Case Section */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-6xl mx-auto border border-neon-purple/20">
            <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-6">
              Business Case Comprovado
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">$50M+</div>
                <div className="text-gray-400 text-sm mb-1">Economizados por clientes</div>
                <div className="text-green-400 text-xs">Últimos 12 meses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">840%</div>
                <div className="text-gray-400 text-sm mb-1">ROI médio enterprise</div>
                <div className="text-green-400 text-xs">Primeiros 6 meses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">3.2M</div>
                <div className="text-gray-400 text-sm mb-1">Horas de dev economizadas</div>
                <div className="text-green-400 text-xs">Por toda a base de clientes</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center justify-center">
                <Building2 className="w-4 h-4 text-green-500 mr-2" />
                <span>Enterprise ready</span>
              </div>
              <div className="flex items-center justify-center">
                <Zap className="w-4 h-4 text-green-500 mr-2" />
                <span>ROI em 30 dias</span>
              </div>
              <div className="flex items-center justify-center">
                <Users2 className="w-4 h-4 text-green-500 mr-2" />
                <span>Escalável para 1000+ devs</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-neon-purple to-neon-purple-light text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all duration-300 text-lg">
              Ver Estudo de Caso Completo
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Inclui métricas detalhadas de 50+ empresas Fortune 500
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
