
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Github, Mail, Lock, User, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const features = [
    "Agentes IA especializados inclusos",
    "Privacidade total - processamento local",
    "Integração com seu estilo de código",
    "Suporte para 50+ linguagens",
    "Updates automáticos",
    "Comunidade de desenvolvedores"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left Side - Benefits */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Comece sua jornada com <span className="gradient-text">NeuroForge</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Junte-se a mais de 50.000 desenvolvedores que já economizam 8+ horas por dia
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-neon-purple rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="glass-effect rounded-xl p-6">
                <blockquote className="text-gray-300 italic mb-4">
                  "NeuroForge mudou completamente minha produtividade. A IA literalmente trabalha enquanto eu durmo."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-purple-light rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Carlos Silva</p>
                    <p className="text-gray-400 text-sm">Senior Developer @ TechCorp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="order-1 lg:order-2">
              <div className="glass-effect rounded-2xl p-8 neon-glow">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Criar conta</h2>
                  <p className="text-gray-400">Comece grátis, sem cartão de crédito</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-white">Nome</Label>
                      <div className="relative mt-2">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="firstName"
                          placeholder="João"
                          className="pl-12 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-neon-purple"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">Sobrenome</Label>
                      <div className="relative mt-2">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="lastName"
                          placeholder="Silva"
                          className="pl-12 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-neon-purple"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="joao@empresa.com"
                        className="pl-12 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-neon-purple"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-white">Senha</Label>
                    <div className="relative mt-2">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-12 pr-12 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-neon-purple"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword" className="text-white">Confirmar Senha</Label>
                    <div className="relative mt-2">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-12 pr-12 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-neon-purple"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-1 rounded border-gray-600 text-neon-purple focus:ring-neon-purple" 
                    />
                    <span className="text-sm text-gray-300">
                      Aceito os <Link to="/terms" className="text-neon-purple hover:text-neon-purple-light">Termos de Uso</Link> e 
                      <Link to="/privacy" className="text-neon-purple hover:text-neon-purple-light ml-1">Política de Privacidade</Link>
                    </span>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-neon-purple hover:bg-neon-purple-light text-white py-3"
                    disabled={isLoading || !acceptedTerms}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Criando conta...
                      </div>
                    ) : (
                      "Criar conta grátis"
                    )}
                  </Button>
                </form>

                <div className="my-6 flex items-center">
                  <div className="flex-1 border-t border-gray-700"></div>
                  <span className="px-4 text-gray-400 text-sm">ou continue com</span>
                  <div className="flex-1 border-t border-gray-700"></div>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:border-neon-purple hover:text-white">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:border-neon-purple hover:text-white">
                    <Mail className="w-5 h-5 mr-2" />
                    Google
                  </Button>
                </div>

                <div className="text-center mt-6">
                  <span className="text-gray-400">Já tem conta? </span>
                  <Link to="/login" className="text-neon-purple hover:text-neon-purple-light font-medium">
                    Fazer login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
