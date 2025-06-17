
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Download, Star, Users, Zap, TrendingUp, DollarSign, Building2, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-graphite via-black to-graphite-light"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-purple rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-soft-blue rounded-full animate-float opacity-80" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-neon-purple-light rounded-full animate-float opacity-70" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-float opacity-50" style={{animationDelay: '6s'}}></div>
      
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Investor & Traction Badges */}
        <div className="animate-slide-up mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 text-sm font-medium text-green-400 border border-green-400/20">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>Série A: $12M • Valoração: $80M</span>
            </div>
            <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 text-sm font-medium text-neon-purple border border-neon-purple/20">
              <Award className="w-4 h-4 mr-2" />
              <span>Y Combinator S23 • TechCrunch Featured</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm text-gray-400">
            <div className="flex items-center justify-center">
              <Users className="w-4 h-4 mr-1 text-green-400" />
              <span><strong className="text-white">50K+</strong> desenvolvedores</span>
            </div>
            <div className="flex items-center justify-center">
              <Building2 className="w-4 h-4 mr-1 text-blue-400" />
              <span><strong className="text-white">500+</strong> empresas</span>
            </div>
            <div className="flex items-center justify-center">
              <Zap className="w-4 h-4 mr-1 text-yellow-400" />
              <span><strong className="text-white">100M+</strong> linhas geradas</span>
            </div>
            <div className="flex items-center justify-center">
              <TrendingUp className="w-4 h-4 mr-1 text-purple-400" />
              <span><strong className="text-white">400%</strong> ROI médio</span>
            </div>
          </div>
        </div>
        
        <div className="animate-slide-up">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">NeuroForge</span>
            <br />
            <span className="text-white">X Ultimate</span>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 block mt-2">v3.0</span>
          </h1>
        </div>
        
        <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-5xl mx-auto leading-relaxed">
            A primeira <span className="gradient-text font-semibold">IA autônoma local</span> que programa
            <br className="hidden sm:block" />
            enquanto você dorme. <span className="text-green-400 font-semibold">10x mais produtivo</span>.
          </p>
        </div>
        
        <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            Agentes especializados trabalham 24/7, aprendem seu estilo de código, e entregam projetos completos. 
            <span className="text-neon-purple"> 100% privado, zero telemetria</span>.
          </p>
        </div>
        
        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-neon-purple to-neon-purple-light hover:opacity-90 text-white px-10 py-5 text-lg font-medium rounded-xl neon-glow hover:animate-glow-pulse transition-all duration-300 shadow-2xl"
          >
            <Download className="mr-2 h-5 w-5" />
            Começar Gratuitamente
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-5 text-lg rounded-xl transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            Demo Executiva (3 min)
          </Button>
        </div>
        
        {/* Business Metrics Grid */}
        <div className="animate-slide-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" style={{animationDelay: '0.7s'}}>
          <div className="glass-effect rounded-xl p-6 hover:neon-glow transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">$2.5M</div>
            <div className="text-sm text-gray-400 mb-1">ARR Atual</div>
            <div className="text-xs text-green-400">+340% YoY</div>
          </div>
          <div className="glass-effect rounded-xl p-6 hover:neon-glow transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">97%</div>
            <div className="text-sm text-gray-400 mb-1">Retenção Mensal</div>
            <div className="text-xs text-green-400">Industry leading</div>
          </div>
          <div className="glass-effect rounded-xl p-6 hover:neon-glow transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">$450</div>
            <div className="text-sm text-gray-400 mb-1">LTV:CAC Ratio</div>
            <div className="text-xs text-green-400">8.5:1</div>
          </div>
          <div className="glass-effect rounded-xl p-6 hover:neon-glow transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">23%</div>
            <div className="text-sm text-gray-400 mb-1">Net Revenue Retention</div>
            <div className="text-xs text-green-400">Expanding accounts</div>
          </div>
        </div>
        
        {/* Enhanced Installation Command */}
        <div className="animate-slide-up" style={{animationDelay: '0.8s'}}>
          <div className="inline-block glass-effect rounded-2xl p-6 sm:p-8 max-w-full sm:max-w-3xl mx-auto border border-neon-purple/20">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-400 text-sm">Instalação empresarial</div>
              <div className="flex items-center space-x-4 text-xs">
                <div className="flex items-center text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1"></div>
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-1"></div>
                  <span>ISO 27001</span>
                </div>
              </div>
            </div>
            <div className="code-block text-left overflow-x-auto">
              <div className="text-neon-purple text-sm sm:text-base">$</div>
              <div className="text-white ml-4 text-sm sm:text-base break-all">curl -sSL enterprise.neuroforge.dev/install | bash</div>
              <div className="text-gray-500 mt-2 text-xs sm:text-sm"># NeuroForge Enterprise iniciado em 30 segundos...</div>
            </div>
          </div>
        </div>
        
        {/* Enterprise Trust Indicators */}
        <div className="animate-slide-up mt-12" style={{animationDelay: '1s'}}>
          <p className="text-xs text-gray-500 mb-6">Confiado por equipes de engenharia em:</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 opacity-60 max-w-4xl mx-auto">
            <div className="text-gray-400 font-semibold text-center">Google</div>
            <div className="text-gray-400 font-semibold text-center">Microsoft</div>
            <div className="text-gray-400 font-semibold text-center">Netflix</div>
            <div className="text-gray-400 font-semibold text-center">Spotify</div>
            <div className="text-gray-400 font-semibold text-center">Uber</div>
            <div className="text-gray-400 font-semibold text-center">Airbnb</div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
              <span>4.9/5 em 2.000+ reviews</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 text-green-400 mr-1" />
              <span>Forbes 30 Under 30</span>
            </div>
            <div className="flex items-center">
              <Building2 className="w-4 h-4 text-blue-400 mr-1" />
              <span>SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
