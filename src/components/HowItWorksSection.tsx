
const steps = [
  {
    number: "01",
    title: "Você Programa",
    description: "Escreva código normalmente. NeuroForge observa, aprende seu estilo e contexto do projeto.",
    color: "neon-purple"
  },
  {
    number: "02", 
    title: "IA Detecta Contexto",
    description: "Algoritmos avançados analisam o padrão, arquitetura e objetivos do seu código.",
    color: "soft-blue"
  },
  {
    number: "03",
    title: "Agentes Assumem",
    description: "Múltiplos agentes especializados trabalham em paralelo: código, testes, documentação.",
    color: "neon-purple-light"
  },
  {
    number: "04",
    title: "Entrega Inteligente", 
    description: "Código refatorado, testado e documentado. Deploy automático se configurado.",
    color: "green-500"
  },
  {
    number: "05",
    title: "Você Retoma",
    description: "Volte quando quiser. Seu projeto evoluiu de forma inteligente e consistente.",
    color: "yellow-500"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-graphite to-graphite-light">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Como </span>
            <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fluxo inteligente de desenvolvimento autônomo. Sua IA trabalha enquanto você descansa.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-20 bottom-20 w-px bg-gradient-to-b from-neon-purple via-soft-blue to-neon-purple-light opacity-30"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex items-center mb-16 last:mb-0 animate-slide-up ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="lg:w-1/2 lg:px-12">
                <div className={`glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                }`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-${step.color} flex items-center justify-center text-2xl font-bold text-white mr-6`}>
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              <div className="hidden lg:block lg:w-1/2">
                <div className={`text-center ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-${step.color} to-neon-purple mx-auto flex items-center justify-center relative`}>
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-20">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Resultado Final
            </h3>
            <p className="text-gray-300 text-lg">
              Código limpo, testado, documentado e deployado. 
              Produtividade 10x maior com qualidade profissional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
