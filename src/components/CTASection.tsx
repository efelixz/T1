
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-graphite-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-soft-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Pronto para o </span>
              <span className="gradient-text">Futuro?</span>
            </h2>
          </div>
          
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Junte-se a milhares de desenvolvedores que já descobriram o poder da programação autônoma. 
              Comece gratuitamente e sinta a diferença.
            </p>
          </div>
          
          <div className="animate-slide-up space-y-8" style={{animationDelay: '0.4s'}}>
            {/* Installation Command */}
            <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="code-block text-left">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">Instalação Rápida</span>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    Ver no GitHub
                  </Button>
                </div>
                <div className="text-neon-purple">$</div>
                <div className="text-white ml-4 break-all">
                  curl -sSL https://neuroforge.dev/install.sh | bash
                </div>
                <div className="text-gray-500 mt-4 text-sm">
                  ✓ Instalação automática<br/>
                  ✓ Configuração inteligente<br/>
                  ✓ Pronto para usar em 30s
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-purple to-neon-purple-light hover:opacity-90 text-white px-12 py-4 text-xl font-medium rounded-xl neon-glow hover:animate-glow-pulse transition-all duration-300"
              >
                <Download className="mr-3 h-6 w-6" />
                Baixar NeuroForge
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-12 py-4 text-xl rounded-xl transition-all duration-300"
              >
                Ver Documentação
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">10,000+</div>
                <div className="text-gray-400">Desenvolvedores Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50M+</div>
                <div className="text-gray-400">Linhas de Código Geradas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-gray-400">Uptime Garantido</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
