import { FileText, ArrowRight, Server, Cpu, Award } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function App() {
  const email: string = '04venkateshs@gmail.com';
  const mailtoUrl: string = `mailto:${email}?subject=Portfolio%20Inquiry`;
  const resumeUrl: string = `${import.meta.env.BASE_URL}resume.pdf`;
  const githubUrl: string = 'https://github.com/venkateshs2004';
  const linkedinUrl: string = 'https://linkedin.com/in/venkatesh-s-5665';

  const handleEmailClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Ignore clipboard failures and still attempt to open the mail client.
    }

    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      <header className="max-w-4xl mx-auto px-6 pt-28 pb-14 md:pt-36">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
          Venkatesh S
        </h1>
        <p className="mt-2 text-xl md:text-2xl font-medium text-slate-300">
          Software Engineer | DevOps | AI Systems
        </p>
        <p className="mt-4 max-w-xl text-slate-400 leading-relaxed text-sm md:text-base">
          Building scalable software, automation workflows, and AI-powered applications. Focused on engineering performance and absolute system usability.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all duration-200 text-sm shadow-lg shadow-emerald-500/10 hover:scale-[1.02]"
          >
            <FileText size={18} />
            View Resume
          </a>
          <a
            href={mailtoUrl}
            onClick={handleEmailClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium transition-all duration-200 border border-slate-800 text-sm hover:border-slate-700"
          >
            Contact Email
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-all duration-200 border border-slate-800 text-sm"
            aria-label="GitHub Profile"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-all duration-200 border border-slate-800 text-sm"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-8 border-t border-slate-900">
        <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-6 flex items-center gap-2">
          <Server size={14} className="text-emerald-400" /> Work Experience
        </h2>
        <div className="bg-slate-900/40 rounded-xl p-6 border border-slate-900/60 hover:border-slate-800 transition-all duration-300 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-200 tracking-tight">Digital Technology Intern</h3>
              <p className="text-sm text-emerald-400 font-medium mt-0.5">Build & Release Engineering — Baker Hughes</p>
            </div>
            <span className="text-xs font-mono bg-slate-950 px-3 py-1 rounded-full text-slate-400 border border-slate-900 self-start sm:self-center whitespace-nowrap">
              Jan 2026 – Present
            </span>
          </div>
          <ul className="space-y-3 text-slate-400 text-sm md:text-base leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Automated structural CI/CD deployment pipelines using <strong>Azure DevOps</strong> and <strong>GitHub Actions</strong> to completely replace manual infrastructure workflows.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Developed enterprise internal automation utility <strong className="text-slate-200">"Get Green Build"</strong> using ADO APIs, reducing release build asset search overheads by <strong className="text-emerald-400">80%</strong>.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-6 flex items-center gap-2">
          <Cpu size={14} className="text-emerald-400" /> Featured Engineering Projects
        </h2>

        <div className="space-y-6">
          <div className="bg-slate-900/40 rounded-xl p-6 border border-slate-900/60 hover:border-emerald-500/20 transition-all duration-300 shadow-xl shadow-emerald-950/5">
            <div className="flex justify-between items-start mb-3 gap-4">
              <div>
                <span className="inline-block text-[10px] uppercase tracking-widest font-bold bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded mb-2">
                  Primary Research Project
                </span>
                <h3 className="text-xl font-bold text-slate-100 tracking-tight">Protein Drug Interaction Pipeline</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/30 px-2.5 py-0.5 rounded shrink-0">
                Best Project
              </span>
            </div>

            <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed">
              An end-to-end containerized execution environment automating chemical structural analysis, ML-driven grid boundary calculation, and programmatic molecular docking execution.
            </p>

            <div className="mb-6 bg-slate-950 p-4 rounded-lg border border-slate-900">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-3 text-center">Data Pipeline Flow</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center text-xs font-mono">
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800 w-full md:w-auto text-slate-400">Protein Structure</div>
                <ArrowRight size={14} className="text-slate-700 rotate-[95deg] md:rotate-0" />
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800 w-full md:w-auto text-emerald-400">Feature Extraction</div>
                <ArrowRight size={14} className="text-slate-700 rotate-[95deg] md:rotate-0" />
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800 w-full md:w-auto text-slate-400">Random Forest</div>
                <ArrowRight size={14} className="text-slate-700 rotate-[95deg] md:rotate-0" />
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800 w-full md:w-auto text-emerald-400">Grid Prediction</div>
                <ArrowRight size={14} className="text-slate-700 rotate-[95deg] md:rotate-0" />
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800 w-full md:w-auto text-slate-400">AutoDock</div>
                <ArrowRight size={14} className="text-slate-700 rotate-[95deg] md:rotate-0" />
                <div className="bg-emerald-950/40 p-2 rounded border border-emerald-900/40 w-full md:w-auto text-emerald-300">HTML Visualisation</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Docker', 'Python', 'Random Forest', 'AutoDock Vina', 'Scientific Computing'].map((tech: string) => (
                <span key={tech} className="text-xs bg-slate-950 px-2.5 py-1 rounded text-slate-400 border border-slate-900 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/40 rounded-xl p-6 border border-slate-900/60 hover:border-slate-800 transition-all duration-300 shadow-sm">
            <h3 className="text-xl font-bold text-slate-100 tracking-tight mb-2">Voxcue</h3>
            <p className="text-slate-400 text-sm md:text-base mb-4 leading-relaxed">
              An agentic AI personal assistant utilizing large language models to securely parse runtime input context, resolve user requests, and optimize intent routing.
            </p>

            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-900 text-xs font-mono text-slate-400 mb-4 space-y-1.5 leading-relaxed">
              <p><span className="text-emerald-400 font-semibold">Core Orchestration:</span> LangGraph, Intent Routing Engine</p>
              <p><span className="text-emerald-400 font-semibold">Information Retrieval:</span> Contextual RAG Processing</p>
              <p><span className="text-emerald-400 font-semibold">Database Persistence:</span> Supabase Ecosystem & Session Management</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Flutter', 'LangChain', 'Agentic AI', 'OpenAI', 'Supabase'].map((tech: string) => (
                <span key={tech} className="text-xs bg-slate-950 px-2.5 py-1 rounded text-slate-400 border border-slate-900 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/40 rounded-xl p-6 border border-slate-900/60 hover:border-slate-800 transition-all duration-300 shadow-sm">
            <h3 className="text-xl font-bold text-slate-100 tracking-tight mb-2">EV ECU Boot Optimization</h3>
            <p className="text-slate-400 text-sm md:text-base mb-4 leading-relaxed">
              Performance analysis and profiling project designed to accelerate safety-critical video initialization lags during cold starts.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-xs mb-4 bg-slate-950 p-3 rounded-lg border border-slate-900 text-center font-mono">
              <div>
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Baseline Boot</span>
                <span className="text-lg font-bold text-rose-400">40s</span>
              </div>
              <div className="border-l border-slate-900">
                <span className="text-[10px] text-emerald-400 block uppercase tracking-wider">Optimized Boot</span>
                <span className="text-lg font-bold text-emerald-400">29s</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Profiled system initialization behaviors using <span className="font-mono text-slate-300">systemd-analyze</span> tools, isolating high-latency initialization scripts, and modifying target runtime services on hardware platforms.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Linux (Systemd)', 'Raspberry Pi 5', 'Python', 'Embedded Systems'].map((tech: string) => (
                <span key={tech} className="text-xs bg-slate-950 px-2.5 py-1 rounded text-slate-400 border border-slate-900 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4 flex items-center gap-2">
          <Award size={14} className="text-emerald-400" /> Key Recognitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
          <div className="p-3.5 rounded-lg bg-slate-900/20 border border-slate-900/60 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
            <span>3rd Runner-up: HACKEFX National Hackathon</span>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-900/20 border border-slate-900/60 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
            <span>Co-Director, ENCIDE MACE Coding Infrastructure</span>
          </div>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center text-[11px] text-slate-600 font-mono border-t border-slate-900">
        <p>© 2026 Venkatesh S. Deployed with automated builds via GitHub Pages.</p>
      </footer>
    </div>
  );
}