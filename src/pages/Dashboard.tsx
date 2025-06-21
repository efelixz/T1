import React, { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Brain, 
  Code, 
  Clock, 
  GitBranch, 
  Settings, 
  Zap,
  CheckCircle,
  AlertTriangle,
  Loader2,
  Files,
  Terminal,
  TrendingUp,
  Sparkles,
  ClipboardCopy
} from "lucide-react";

// --- Componentes de Exibição de Resultados ---

const FileTreeDisplay = ({ files }: { files: { path: string; content: string }[] }) => (
    <div className="space-y-2">
        {files.map((file, index) => (
            <details key={index} className="glass-effect-light rounded-lg p-3 group" open>
                <summary className="cursor-pointer font-medium text-white flex items-center justify-between">
                    <div className="flex items-center">
                        <Files className="w-4 h-4 mr-2 text-neon-purple"/>
                        {file.path}
                    </div>
                    <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">clique para expandir/recolher</span>
                </summary>
                <pre className="mt-2 p-4 bg-graphite rounded-md text-sm text-gray-300 overflow-x-auto">
                    <code>{file.content}</code>
                </pre>
            </details>
        ))}
    </div>
);

const LogDisplay = ({ log }: { log: string[] }) => {
    const logContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [log]);

    return (
        <div ref={logContainerRef} className="glass-effect-light rounded-lg p-4 h-80 overflow-y-auto font-mono text-sm">
            {log.map((line, index) => (
                <p key={index} className="flex items-start">
                    <Terminal className="w-4 h-4 mr-2 mt-1 text-gray-500 flex-shrink-0"/>
                    <span className={line.includes("❌") ? "text-red-500" : "text-gray-300"}>{line}</span>
                </p>
            ))}
        </div>
    );
};

const ExplanationLogDisplay = ({ log }: { log: { file_path: string; explanation: string }[] }) => (
     <div className="space-y-3 glass-effect-light rounded-lg p-4">
        {log.map((item, index) => (
            <div key={index} className="border-b border-gray-800 pb-3 last:border-b-0 last:pb-0">
                 <p className="font-mono text-xs text-neon-purple mb-1">{item.file_path}</p>
                 <p className="text-gray-300 text-sm">{item.explanation}</p>
            </div>
        ))}
    </div>
);

// --- Componente Principal do Dashboard ---

const Dashboard = () => {
    const [task, setTask] = useState<string>("Criar um componente Vue.js de cartão de perfil de usuário com avatar, nome e bio.");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [result, setResult] = useState<any>(null);

    const stats = [
        { label: "Horas Economizadas", value: "47.2h", change: "+12%", icon: Clock },
        { label: "Linhas de Código", value: "12,847", change: "+34%", icon: Code },
        { label: "Bugs Prevenidos", value: "89", change: "+8%", icon: CheckCircle },
        { label: "Commits Automáticos", value: "156", change: "+23%", icon: GitBranch }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!task || isLoading) return;

        setIsLoading(true);
        setResult(null);

        try {
            const response = await fetch("http://127.0.0.1:5000/execute", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ task }),
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            setResult(data);

        } catch (error) {
            console.error("Falha ao comunicar com a API:", error);
            setResult({ 
                status: "error", 
                log: ["Falha ao comunicar com a API. Verifique se o servidor Python está a ser executado e verifique o console do navegador para mais detalhes."]
            });
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // Em uma app real, aqui mostrariamos um toast de confirmação
    };

    return (
        <div className="min-h-screen bg-black">
            <Navigation />
            
            <div className="pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
                            <p className="text-gray-400">Bem-vindo de volta, construa algo incrível.</p>
                        </div>
                        <div className="flex gap-4 mt-4 sm:mt-0">
                            <Button variant="outline" className="border-gray-700 text-gray-300 hover:border-neon-purple">
                                <Settings className="w-4 h-4 mr-2" />
                                Configurações
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

                    <div className="glass-effect rounded-2xl p-6 sm:p-8 neon-glow">
                        <div className="grid lg:grid-cols-5 gap-8">
                            <div className="lg:col-span-2">
                                <h2 className="text-2xl font-bold text-white mb-4">Novo Projeto Autônomo</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <Label htmlFor="task-input" className="text-lg font-medium text-gray-300 mb-3 block">
                                            O que vamos construir?
                                        </Label>
                                        <Textarea
                                            id="task-input"
                                            value={task}
                                            onChange={(e) => setTask(e.target.value)}
                                            placeholder="Ex: Crie uma API em Flask para um blog..."
                                            className="bg-graphite-light border-gray-700 text-lg text-white placeholder-gray-500 focus:border-neon-purple min-h-[150px]"
                                            required
                                        />
                                    </div>
                                    <Button 
                                        type="submit" 
                                        className="w-full bg-neon-purple hover:bg-neon-purple-light text-white py-3 text-lg font-semibold"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <><Loader2 className="mr-2 h-5 w-5 animate-spin" />A trabalhar...</>
                                        ) : (
                                            <><Zap className="mr-2 h-5 w-5" />Executar Tarefa</>
                                        )}
                                    </Button>
                                </form>
                            </div>

                            <div className="lg:col-span-3">
                                {!result && !isLoading && (
                                     <div className="h-full flex flex-col items-center justify-center text-center glass-effect rounded-lg p-6">
                                        <Brain className="w-16 h-16 text-neon-purple/50 mb-4"/>
                                        <h3 className="text-xl font-bold text-white">Pronto para começar.</h3>
                                        <p className="text-gray-400">Os resultados da execução aparecerão aqui.</p>
                                     </div>
                                )}
                                {isLoading && (
                                    <div className="h-full flex flex-col items-center justify-center text-center glass-effect rounded-lg p-6">
                                        <Loader2 className="w-16 h-16 text-neon-purple animate-spin mb-4"/>
                                        <h3 className="text-xl font-bold text-white">Orquestrador em execução...</h3>
                                        <p className="text-gray-400">A gerar o plano, código, testes e documentação.</p>
                                    </div>
                                )}
                                {result && (
                                    <div className="space-y-6">
                                        <div className="glass-effect-light rounded-lg p-4">
                                            <h3 className="text-lg font-bold text-white mb-2">{result.status === "success" ? "Execução Concluída" : "Falha na Execução"}</h3>
                                            <p className="text-sm text-gray-300 mb-3">{result.final_result?.summary || result.log[result.log.length-1]}</p>
                                            {result.status === "success" && result.final_result?.result?.commit_hash && (
                                                <div className="flex items-center text-xs font-mono bg-graphite p-2 rounded">
                                                    <span className="text-gray-400 mr-2">Commit:</span>
                                                    <span className="text-yellow-400 truncate">{result.final_result.result.commit_hash}</span>
                                                    <Button variant="ghost" size="icon" className="h-6 w-6 ml-auto" onClick={() => copyToClipboard(result.final_result.result.commit_hash)}>
                                                        <ClipboardCopy className="h-4 w-4 text-gray-400"/>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>

                                        {result.final_result?.explanation_log?.length > 0 && (
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-3 flex items-center"><Sparkles className="w-5 h-5 mr-2 text-yellow-400"/>Plano de Execução da IA</h3>
                                                <ExplanationLogDisplay log={result.final_result.explanation_log} />
                                            </div>
                                        )}

                                        {result.final_result?.result?.files?.length > 0 && (
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-3">Artefactos Gerados</h3>
                                                <FileTreeDisplay files={result.final_result.result.files} />
                                            </div>
                                        )}
                                        
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Log Detalhado</h3>
                                            <LogDisplay log={result.log} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
