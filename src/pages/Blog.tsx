
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Como a IA Local está Revolucionando o Desenvolvimento",
      excerpt: "Descubra como desenvolvedores estão economizando 8+ horas por dia com IA que trabalha enquanto você descansa.",
      author: "Dr. Marcus Chen",
      date: "15 Jan 2024",
      readTime: "8 min",
      category: "Tecnologia",
      image: "photo-1461749280684-dccba630e2f6",
      featured: true
    },
    {
      id: 2,
      title: "Agentes Autônomos vs. Copilot: O Futuro Chegou",
      excerpt: "Análise comparativa detalhada entre ferramentas tradicionais e a nova geração de agentes de desenvolvimento.",
      author: "Sarah Johnson",
      date: "12 Jan 2024",
      readTime: "6 min",
      category: "Comparação",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 3,
      title: "ROI Real: Cases de Sucesso com NeuroForge",
      excerpt: "Empresas reportam redução de 70% no tempo de desenvolvimento e aumento de 300% na produtividade.",
      author: "Alex Rivera",
      date: "10 Jan 2024",
      readTime: "12 min",
      category: "Business",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      id: 4,
      title: "Guia Completo: Configurando Agentes Especializados",
      excerpt: "Tutorial passo a passo para configurar NeoDev, LogicQA, UIForge e outros agentes do ecossistema.",
      author: "Tech Team",
      date: "8 Jan 2024",
      readTime: "15 min",
      category: "Tutorial",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: 5,
      title: "Privacidade First: Por que IA Local Importa",
      excerpt: "Entenda os riscos de compartilhar código proprietário e como o NeuroForge protege seus dados.",
      author: "Security Team",
      date: "5 Jan 2024",
      readTime: "7 min",
      category: "Segurança",
      image: "photo-1488590528505-98d2b5aba04b"
    }
  ];

  const categories = ["Todos", "Tecnologia", "Tutorial", "Business", "Segurança", "Comparação"];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Blog</span> NeuroForge
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, tutorials e cases reais sobre o futuro do desenvolvimento com IA autônoma
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className={category === "Todos" 
                  ? "bg-neon-purple hover:bg-neon-purple-light" 
                  : "border-gray-700 text-gray-300 hover:border-neon-purple hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <div className="glass-effect rounded-2xl overflow-hidden neon-glow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img 
                    src={`https://images.unsplash.com/${articles[0].image}?auto=format&fit=crop&w=800&q=80`}
                    alt={articles[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-neon-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <span className="bg-gray-800 px-3 py-1 rounded-full">{articles[0].category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {articles[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {articles[0].readTime}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{articles[0].title}</h2>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{articles[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-purple-light rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-300">{articles[0].author}</span>
                    </div>
                    <Button className="bg-neon-purple hover:bg-neon-purple-light group">
                      Ler Artigo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <div key={article.id} className="glass-effect rounded-xl overflow-hidden hover:neon-glow transition-all duration-300 group cursor-pointer">
                <div className="relative h-48">
                  <img 
                    src={`https://images.unsplash.com/${article.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-purple-light rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-400">{article.author}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-neon-purple group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:border-neon-purple hover:text-white">
              Carregar Mais Artigos
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
