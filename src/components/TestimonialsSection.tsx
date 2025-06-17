
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, TrendingUp, DollarSign, Clock } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Tech Lead",
    company: "Netflix",
    content: "NeuroForge transformou nossa velocidade de desenvolvimento. Conseguimos entregar features 3x mais rápido e com 40% menos bugs. O ROI foi visível em apenas 2 semanas.",
    avatar: "👩‍💻",
    rating: 5,
    metrics: {
      productivity: "+300%",
      timesSaved: "25h/semana",
      roi: "R$ 50k/mês"
    }
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Founder",
    company: "TechStartup (YC S22)",
    content: "Economizamos $200k/ano em custos de desenvolvimento. A IA literalmente programa enquanto dormimos. Nosso time de 3 devs agora produz como 15.",
    avatar: "👨‍💼",
    rating: 5,
    metrics: {
      productivity: "+500%",
      timesSaved: "40h/semana",
      roi: "R$ 200k/ano"
    }
  },
  {
    name: "Elena Kowalski",
    role: "Senior Engineer",
    company: "Google",
    content: "A continuidade inteligente é revolutionary. Posso pausar projetos complexos sem perder contexto. A IA entende melhor meu código do que alguns colegas.",
    avatar: "👩‍🔬",
    rating: 5,
    metrics: {
      productivity: "+250%",
      timesSaved: "15h/semana",
      roi: "R$ 30k/mês"
    }
  },
  {
    name: "David Kim",
    role: "Engineering Manager",
    company: "Spotify",
    content: "Implementamos NeuroForge em toda a equipe. Resultado: 70% menos code review, 80% menos bugs em produção, e developers mais felizes. Game changer total.",
    avatar: "👨‍💻",
    rating: 5,
    metrics: {
      productivity: "+400%",
      timesSaved: "35h/semana",
      roi: "R$ 150k/mês"
    }
  },
  {
    name: "Ana Silva",
    role: "Freelancer Full-Stack",
    company: "Independent",
    content: "Como freelancer, tempo é dinheiro. NeuroForge me permite aceitar 3x mais projetos mantendo a qualidade. Minha receita triplicou em 6 meses.",
    avatar: "👩‍💼",
    rating: 5,
    metrics: {
      productivity: "+300%",
      timesSaved: "20h/semana",
      roi: "R$ 25k/mês"
    }
  },
  {
    name: "James Wilson",
    role: "VP Engineering",
    company: "Uber",
    content: "Testamos em 50 desenvolvedores. Resultados impressionantes: time-to-market 60% mais rápido, custos 45% menores. Agora expandindo para toda a engineering org.",
    avatar: "👨‍🚀",
    rating: 5,
    metrics: {
      productivity: "+350%",
      timesSaved: "30h/semana",
      roi: "R$ 500k/mês"
    }
  }
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
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Mais de 15.000 desenvolvedores já transformaram sua produtividade. 
            <span className="text-green-400 font-semibold"> Veja os números reais</span>.
          </p>
          
          {/* Overall Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-xl p-4">
              <div className="text-2xl font-bold gradient-text">15,000+</div>
              <div className="text-sm text-gray-400">Desenvolvedores</div>
            </div>
            <div className="glass-effect rounded-xl p-4">
              <div className="text-2xl font-bold gradient-text">4.9/5</div>
              <div className="text-sm text-gray-400">Rating Médio</div>
            </div>
            <div className="glass-effect rounded-xl p-4">
              <div className="text-2xl font-bold gradient-text">400%</div>
              <div className="text-sm text-gray-400">ROI Médio</div>
            </div>
            <div className="glass-effect rounded-xl p-4">
              <div className="text-2xl font-bold gradient-text">25h</div>
              <div className="text-sm text-gray-400">Economia/Semana</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-effect hover:neon-glow transition-all duration-300 animate-slide-up border-gray-800 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-xs text-neon-purple font-medium">{testimonial.company}</div>
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
                
                {/* Content */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  "{testimonial.content}"
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
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto border border-neon-purple/20">
            <h3 className="text-xl font-bold gradient-text mb-4">
              Pronto para Resultados Similares?
            </h3>
            <p className="text-gray-300 mb-6 text-sm">
              Junte-se a milhares de desenvolvedores que já transformaram sua carreira com NeuroForge.
            </p>
            <button className="bg-gradient-to-r from-neon-purple to-neon-purple-light text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300">
              Começar Teste Gratuito
            </button>
            <p className="text-xs text-gray-500 mt-3">
              ROI garantido ou seu dinheiro de volta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
