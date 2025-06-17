
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Activity, 
  Brain, 
  Code, 
  Clock, 
  GitBranch, 
  Play, 
  Pause, 
  Settings, 
  Users, 
  Zap,
  CheckCircle,
  AlertTriangle,
  TrendingUp
} from "lucide-react";

const Dashboard = () => {
  const agents = [
    { name: "NeoDev", status: "active", tasks: 3, efficiency: 94 },
    { name: "LogicQA", status: "active", tasks: 1, efficiency: 98 },
    { name: "UIForge", status: "idle", tasks: 0, efficiency: 87 },
    { name: "DocGenius", status: "active", tasks: 2, efficiency: 91 }
  ];

  const recentProjects = [
    { name: "E-commerce Platform", status: "in-progress", progress: 67, lastUpdate: "2 min ago" },
    { name: "Mobile App API", status: "completed", progress: 100, lastUpdate: "1 hour ago" },
    { name: "Data Analytics Dashboard", status: "paused", progress: 34, lastUpdate: "3 hours ago" }
  ];

  const stats = [
    { label: "Horas Economizadas", value: "47.2h", change: "+12%", icon: Clock },
    { label: "Linhas de Código", value: "12,847", change: "+34%", icon: Code },
    { label: "Bugs Prevenidos", value: "89", change: "+8%", icon: CheckCircle },
    { label: "Commits Automáticos", value: "156", change: "+23%", icon: GitBranch }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-gray-400">Bem-vindo de volta, João Silva</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:border-neon-purple">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
              <Button className="bg-neon-purple hover:bg-neon-purple-light">
                <Play className="w-4 h-4 mr-2" />
                Novo Projeto
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-neon-purple" />
                  <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Agents Status */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Active Agents */}
              <div className="glass-effect rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Agentes Ativos</h2>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    Ver todos
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {agents.map((agent, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${
                          agent.status === 'active' ? 'bg-green-400' :
                          agent.status === 'idle' ? 'bg-yellow-400' : 'bg-gray-400'
                        }`}></div>
                        <div>
                          <h3 className="text-white font-medium">{agent.name}</h3>
                          <p className="text-gray-400 text-sm">{agent.tasks} tarefas ativas</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">{agent.efficiency}%</p>
                        <p className="text-gray-400 text-sm">eficiência</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Projects */}
              <div className="glass-effect rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Projetos Recentes</h2>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    Ver todos
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {recentProjects.map((project, index) => (
                    <div key={index} className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-white font-medium">{project.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          project.status === 'completed' ? 'bg-green-900 text-green-300' :
                          project.status === 'in-progress' ? 'bg-blue-900 text-blue-300' :
                          'bg-yellow-900 text-yellow-300'
                        }`}>
                          {project.status === 'completed' ? 'Concluído' :
                           project.status === 'in-progress' ? 'Em andamento' : 'Pausado'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 bg-gray-700 rounded-full h-2 mr-4">
                          <div 
                            className="bg-neon-purple h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-400 text-sm">{project.lastUpdate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Quick Actions */}
              <div className="glass-effect rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Ações Rápidas</h2>
                <div className="space-y-3">
                  <Button className="w-full bg-neon-purple hover:bg-neon-purple-light justify-start">
                    <Zap className="w-4 h-4 mr-2" />
                    Criar Agente
                  </Button>
                  <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:border-neon-purple justify-start">
                    <GitBranch className="w-4 h-4 mr-2" />
                    Sincronizar Git
                  </Button>
                  <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:border-neon-purple justify-start">
                    <Brain className="w-4 h-4 mr-2" />
                    Treinar Modelo
                  </Button>
                  <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:border-neon-purple justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Convidar Time
                  </Button>
                </div>
              </div>

              {/* System Status */}
              <div className="glass-effect rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Status do Sistema</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">CPU</span>
                    <span className="text-green-400">23%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">RAM</span>
                    <span className="text-yellow-400">67%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">GPU</span>
                    <span className="text-green-400">12%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Storage</span>
                    <span className="text-green-400">34%</span>
                  </div>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="glass-effect rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Atividade Recente</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <p className="text-white text-sm">NeoDev completou refatoração</p>
                      <p className="text-gray-400 text-xs">2 minutos atrás</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-white text-sm">LogicQA executou 12 testes</p>
                      <p className="text-gray-400 text-xs">5 minutos atrás</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <p className="text-white text-sm">UIForge pausou por dependência</p>
                      <p className="text-gray-400 text-xs">10 minutos atrás</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
