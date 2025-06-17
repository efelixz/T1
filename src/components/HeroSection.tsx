
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-graphite via-black to-graphite-light"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_60%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-purple rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-soft-blue rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-neon-purple-light rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">NeuroForge</span>
            <br />
            <span className="text-white">X Ultimate</span>
            <span className="text-2xl md:text-4xl text-gray-400 block mt-2">v3.0</span>
          </h1>
        </div>
        
        <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            A IA local que <span className="gradient-text font-semibold">continua seu código</span>
            <br />
            mesmo quando você pausa.
          </p>
        </div>
        
        <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Agentes inteligentes trabalham 24/7, aprendem seu estilo, e entregam código pronto. 
            Privacidade total, performance máxima.
          </p>
        </div>
        
        <div className="animate-slide-up flex flex-col sm:flex-row gap-6 justify-center items-center" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            className="bg-neon-purple hover:bg-neon-purple-light text-white px-8 py-4 text-lg font-medium rounded-xl neon-glow hover:animate-glow-pulse transition-all duration-300"
          >
            Experimente Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-xl transition-all duration-300"
          >
            Ver Demonstração
          </Button>
        </div>
        
        <div className="mt-16 animate-slide-up" style={{animationDelay: '0.8s'}}>
          <div className="inline-block glass-effect rounded-2xl p-6 max-w-2xl">
            <div className="code-block text-left">
              <div className="text-gray-500 mb-2"># Instalação em 1 linha</div>
              <div className="text-neon-purple">bash</div>
              <div className="text-white ml-4">curl -sSL neuroforge.dev/install.sh | bash</div>
              <div className="text-gray-500 mt-2"># NeuroForge iniciado em segundo plano...</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default HeroSection;
