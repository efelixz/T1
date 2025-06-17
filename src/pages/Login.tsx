
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Github, Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simular loading
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-24 pb-16 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-purple-light rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Bem-vindo de volta</h1>
            <p className="text-gray-400">Entre na sua conta NeuroForge</p>
          </div>

          {/* Login Form */}
          <div className="glass-effect rounded-2xl p-8 neon-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
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

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-600 text-neon-purple focus:ring-neon-purple" />
                  <span className="ml-2 text-sm text-gray-300">Lembrar de mim</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-neon-purple hover:text-neon-purple-light">
                  Esqueceu a senha?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-neon-purple hover:bg-neon-purple-light text-white py-3"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Entrando...
                  </div>
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-700"></div>
              <span className="px-4 text-gray-400 text-sm">ou continue com</span>
              <div className="flex-1 border-t border-gray-700"></div>
            </div>

            {/* Social Login */}
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

            {/* Sign up link */}
            <div className="text-center mt-6">
              <span className="text-gray-400">Não tem conta? </span>
              <Link to="/register" className="text-neon-purple hover:text-neon-purple-light font-medium">
                Criar conta
              </Link>
            </div>
          </div>

          {/* Terminal Mode Toggle */}
          <div className="text-center mt-6">
            <button className="text-gray-400 hover:text-neon-purple text-sm flex items-center mx-auto">
              <span className="font-mono mr-2">$</span>
              Preferir modo terminal?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
