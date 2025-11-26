import React, { useState } from 'react';
import {
  Menu,
  X,
  Check,
  ChevronDown,
  BarChart3,
  Filter,
  Users,
  Layout,
  Zap,
  PieChart,
  Award,
  Cpu,
  Headphones,
  TrendingUp,
  ArrowRight,
  Star,
  Sun,
  Moon
} from 'lucide-react';

// --- Types ---
interface Testimonial {
  text: string;
  author: string;
  role: string;
  metric: string;
  image: string;
}

interface PlanFeature {
  text: string;
}

interface Plan {
  name: string;
  description: string;
  price: string;
  features: PlanFeature[];
  highlight?: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Components ---

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost' }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background";

  const variants = {
    primary: "bg-primary text-background hover:opacity-90 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] hover:-translate-y-0.5",
    outline: "bg-transparent border border-surface-dark text-main hover:bg-surface hover:border-main/40 hover:-translate-y-0.5",
    ghost: "bg-transparent text-text-muted hover:text-main"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, badge }: { title: string, subtitle?: string, badge?: string }) => (
  <div className="flex flex-col items-center text-center gap-4 mb-16 animate-slide-up">
    {badge && (
      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-2">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-main max-w-4xl leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed mt-2">
        {subtitle}
      </p>
    )}
  </div>
);

const Logo = () => (
  <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-main select-none">
    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transform rotate-3 shadow-[0_0_15px_rgba(0,191,255,0.5)]">
      <div className="w-4 h-4 bg-background rounded-sm transform -rotate-3" />
    </div>
    BUUDLEADS
  </div>
);

// --- Sections ---

const Header = ({ theme, toggleTheme }: { theme: 'dark' | 'light', toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-main/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-sm font-medium text-text-muted hover:text-main transition-colors">Benefícios</a>
          <a href="#plans" className="text-sm font-medium text-text-muted hover:text-main transition-colors">Planos</a>
          <a href="#faq" className="text-sm font-medium text-text-muted hover:text-main transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-text-muted hover:text-main hover:bg-surface transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Button variant="ghost" className="px-4 py-2">Login</Button>
          <Button className="h-10 px-4 py-2 text-sm">Experimentar Agora</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-main p-2 hover:bg-main/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-main/10 p-6 flex flex-col gap-4 animate-fade-in shadow-2xl h-screen">
          <a href="#benefits" className="text-main text-lg font-medium py-3 border-b border-main/5" onClick={() => setIsOpen(false)}>Benefícios</a>
          <a href="#plans" className="text-main text-lg font-medium py-3 border-b border-main/5" onClick={() => setIsOpen(false)}>Planos</a>
          <a href="#faq" className="text-main text-lg font-medium py-3 border-b border-main/5" onClick={() => setIsOpen(false)}>FAQ</a>
          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 w-full p-3 rounded-lg text-text-muted hover:text-main hover:bg-surface border border-main/5 transition-all"
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={20} /> Modo Claro
                </>
              ) : (
                <>
                  <Moon size={20} /> Modo Escuro
                </>
              )}
            </button>
            <Button variant="outline" className="w-full justify-center">Login</Button>
            <Button className="w-full justify-center">Experimentar Agora</Button>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden flex flex-col items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/50 border border-main/10 text-sm font-medium text-primary mb-8 animate-fade-in backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Novo Motor de IA 2.0 Disponível
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-main tracking-tight leading-[1.1] mb-6 max-w-5xl animate-slide-up">
          BUUDLEADS CRM — A Máquina de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500">Crescimento B2B</span> que sua operação merece.
        </h1>

        <p className="text-lg md:text-xl text-text-muted max-w-3xl mb-10 leading-relaxed animate-slide-up delay-100">
          Automação, funis inteligentes e nutrição avançada em um só lugar. Tudo pronto para escalar suas vendas com previsibilidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up delay-200">
          <Button className="h-14 px-8 text-base shadow-[0_0_30px_rgba(0,191,255,0.25)]">
            Experimentar Agora <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button variant="outline" className="h-14 px-8 text-base">
            Assistir à Demo
          </Button>
        </div>

        <div className="mt-20 w-full max-w-6xl relative animate-slide-up delay-300 group perspective-1000">
          {/* Dashboard Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

          <div className="relative rounded-xl border border-main/10 bg-surface overflow-hidden shadow-2xl transition-transform duration-700 transform group-hover:scale-[1.01]">
            <div className="aspect-[16/10] w-full bg-surface relative flex items-center justify-center overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCv3Kds512n0GnaAgxveSBr3Fht61YlqfaWYCpha7z-wiIqWUVwACazYhvYge-YOLpcl6l7NcqJL8MI9XntgRO5MNhwXVCb_n9eN0x7nskkI05GjV9YkFJNIBrqG7RqyEZWsxuL0cQuH5rY3IwsjIAlehCebmrr6OEWxTORCEZiAB0nv0FIPye47sYZU3c6d8O2YPLQ2QLMpGklMxeYKaMLmZLaqkcGNCRQC_rctGmvWiy0643Avkey6fzXk9sXxTYfW89Q8LBxMF6"
                alt="BUUDLEADS CRM Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent"></div>
            </div>
          </div>
          <p className="mt-6 text-sm text-text-muted font-medium">
            Baseado na tecnologia do CRM mais avançado do mundo.
          </p>
        </div>
      </div>
    </section>
  );
};

const Authority = () => {
  return (
    <section className="py-16 md:py-24 bg-surface/30 border-y border-main/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-background-dark z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-0">
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Tecnologia Classe Mundial
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-main">Aqui é jogo grande.</h3>
          <p className="text-text-muted max-w-2xl text-lg">
            A tecnologia por trás da nossa plataforma já recebeu mais de US$ 300 milhões em investimentos e é utilizada por empresas líderes no mundo inteiro.
          </p>
        </div>

        <div className="w-full flex justify-center items-center gap-12 md:gap-20 flex-wrap opacity-40 grayscale transition-all duration-700 hover:grayscale-0 hover:opacity-100">
          {/* Logo 1 */}
          <svg className="h-8 text-main" viewBox="0 0 114 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M113.88 16.03a15.84 15.84 0 0 0-15.81-15.81c-8.75 0-15.81 7.07-15.81 15.81s7.07 15.81 15.8 15.81c8.75 0 15.82-7.07 15.82-15.81Zm-15.81 12.02c-6.72 0-12.16-5.4-12.16-12.02S91.35 4 98.07 4c6.72 0 12.16 5.4 12.16 12.03s-5.44 12.02-12.16 12.02Z M71.02 31.57V.5h3.65v31.07h-3.65ZM50.91 31.57 39.46 16.03 50.78.5h4.1l-9.84 13.63L55.1 31.57h-4.2Z M21.04 31.57V.5h14.82v3.65H24.7v8.9h10.4v3.65h-10.4v11.22h11.52v3.65H21.04ZM0 31.57V.5h3.65v31.07H0Z" fill="currentColor"></path></svg>
          {/* Logo 2 */}
          <svg className="h-8 text-main" viewBox="0 0 102 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M102 16.03c0-8.74-7.07-15.8-15.8-15.8a15.82 15.82 0 0 0-15.82 15.8c0 8.74 7.07 15.81 15.81 15.81 8.75 0 15.81-7.07 15.81-15.81Zm-15.81 12.02c-6.72 0-12.16-5.4-12.16-12.02S79.47 4 86.19 4s12.16 5.4 12.16 12.03-5.44 12.02-12.16 12.02Z M53.81 31.57V.5h3.65v31.07h-3.65Z M25.13 31.57V.5h14.45c9.2 0 14.28 5.7 14.28 15.53S48.78 31.57 39.58 31.57H25.13Zm3.65-3.65h10.8c7.1 0 10.63-4.26 10.63-11.88 0-7.62-3.53-11.88-10.63-11.88h-10.8v23.76Z M0 31.57V.5h12.16l8.83 15.54V.5h3.65v31.07H21L12.16 16.03v15.54H0Z" fill="currentColor"></path></svg>
          {/* Logo 3 */}
          <svg className="h-8 text-main" viewBox="0 0 101 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100.32 31.57V.5h-3.65v11.8L83.18.5h-4.57L91.9 13.15 78.48 31.57h4.57l9.6-13.89v13.89h3.67ZM59.94 31.57V.5h14.82v3.65h-11.17v8.9h10.4v3.65h-10.4v11.22h11.52v3.65H59.94Z M39.98 31.57V.5H52.1l8.84 15.54V.5h3.64v31.07H51L42.14 16.03v15.54h-2.16Z M18.17 28.02c-6.72 0-12.16-5.4-12.16-12s5.44-12.02 12.16-12.02c3.48 0 6.64 1.45 8.87 3.82l-2.5 2.68a8.31 8.31 0 0 0-6.37-2.68c-4.7 0-8.5 3.78-8.5 8.42s3.8 8.42 8.5 8.42c2.8 0 5.25-1.3 6.84-3.4h-6.73v-3.65h12.05c.1.58.15 1.18.15 1.88 0 7.42-4.9 12.55-12.2 12.55Z" fill="currentColor"></path></svg>
          {/* Logo 4 */}
          <svg className="h-8 text-main" viewBox="0 0 103 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.71 19.38 60.2 31.57h-3.93l12.42-31.07h2.2l12.42 31.07h-3.92l-4.52-12.2h-10.16Zm8.58-3.65c-1-2.72-2-5.7-2.8-8.2-.8 2.5-1.8 5.48-2.8 8.2h5.6Z M43.43 31.57V.5h3.65v31.07h-3.65Z M21.72 31.57V.5h14.44c9.2 0 14.28 5.7 14.28 15.53S45.36 31.57 36.16 31.57H21.72Zm3.65-3.65h10.8c7.1 0 10.63-4.26 10.63-11.88 0-7.62-3.54-11.88-10.64-11.88h-10.8v23.76ZM2.16 31.57 13.6.5h4.1L7.86 31.57H2.16Z" fill="currentColor"></path></svg>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Automação que trabalha por você",
      desc: "Nutrição, follow-ups, pipelines inteligentes que rodam 24/7 sem pausa."
    },
    {
      icon: <Filter className="w-8 h-8 text-primary" />,
      title: "Funis prontos para conversão B2B",
      desc: "Lógica estratégica validada que economiza meses de configuração operacional."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Segmentação avançada",
      desc: "Envia a mensagem certa para a pessoa certa — sempre, baseada em comportamento."
    },
    {
      icon: <Layout className="w-8 h-8 text-primary" />,
      title: "Gestão de leads sem bagunça",
      desc: "Pipeline visual kanban, claro e fácil de arrastar e soltar."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Integrações sem sofrimento",
      desc: "WhatsApp, formulários, websites, e-mail marketing, tudo conectado nativamente."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Relatórios de ROI Real",
      desc: "Nada de métricas de vaidade. Saiba exatamente quanto dinheiro está na mesa."
    }
  ];

  return (
    <section id="benefits" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-surface border border-main/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-background border border-main/5 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-main mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-muted leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisualDemo = () => {
  return (
    <section className="py-16 md:py-24 px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className="aspect-[16/9] w-full bg-surface rounded-xl border border-main/10 p-2 shadow-2xl relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
          <img
            className="w-full h-full object-cover rounded-lg"
            alt="Dashboard Interface Mockup"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfijBFTkit1vp0GNVcBCWTW7MrZRBpKkCHvmynogWBt6wL2LGZd_KRXW7vczC-0p4GPMQCT2uFM3Nc8nLtboUpJyKzrmMLNcTS0hduolqWfsWPycfT4idvSuk0kGAeUFUn2mUSvHngeNmGXeGWa8qAN09LZHnQ0QtaHVz1Rid4miB_00WOjhDaQH396TO_L_ZB2cfEIGOLbu4GmXWKS_Q4I9o7hOI-9KYk8_WCBHUZbTicFPPk9IOxyz29oWEOB1-OXK3qW4-ZhaG-"
          />
        </div>
        <p className="text-text-muted text-base md:text-lg mt-8 font-medium">
          Tudo projetado para você vender mais com menos esforço.
        </p>
      </div>
    </section>
  );
};

const Differentiators = () => {
  return (
    <section className="py-24 px-6 bg-surface/20 border-y border-main/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Por que BUUDLEADS é diferente?" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Award className="w-12 h-12 text-primary mb-6" />,
              title: "Tecnologia de elite — sem preço de elite",
              desc: "Mesma qualidade dos gigantes globais de CRM, mas com um custo acessível para o mercado nacional."
            },
            {
              icon: <PieChart className="w-12 h-12 text-primary mb-6" />,
              title: "Estratégia + Ferramenta",
              desc: "Você não compra só software. Você adquire inteligência operacional embutida na plataforma."
            },
            {
              icon: <Headphones className="w-12 h-12 text-primary mb-6" />,
              title: "Suporte humano que fala sua língua",
              desc: "Nada de ticket frio ou robô mudo. Gente cuidando de gente para o seu negócio não parar."
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-surface border border-main/5 rounded-2xl hover:border-primary/20 transition-all hover:translate-y-1">
              {item.icon}
              <h3 className="text-xl font-bold text-main mb-4">{item.title}</h3>
              <p className="text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      text: "A automação de funis mudou nosso jogo. Conseguimos escalar o contato sem perder a personalização. Essencial para qualquer agência.",
      author: "Carlos Silva",
      role: "CEO, Agência Digital",
      metric: "Crescimento de 40% em leads",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnt1NweKEmmOLh3AZlKE8x-v9lqnrf_w3uzCc2PsoyE--yewYak-fCrzKBVEMGzZscFlazvFeDU42qTWU5bRDlAr2-xKFmazHDPcWZAi82fTcIqfdd3JLzf4rr8bD6lpAosQMqzJKX7yUw6n2hWl7Y9ncBesHpwdZ13YVtMRdT6NXFyVjDASle_OuKge3pkLxjG5rPUR5faTGLywADxoWLj5dDczNHXX8sLpOY0FXHcg11yoyRueaL9Rby0-7LBuNbL9ZO-jyVRaVD"
    },
    {
      text: "Finalmente um pipeline que toda a equipe entende e usa. A visibilidade que ganhamos sobre o negócio é incrível.",
      author: "Juliana Martins",
      role: "Diretora, Consultoria B2B",
      metric: "Redução de 25% no ciclo de vendas",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_DcrWXPtSN2MH1rhpGIxBGJpQcs2f5B_e7B470LRzA3MZoFQs8AIG5LiL1Bhn4Y-baJgcLygd4yS2p4-2JvL59biKzNOcfHw4m1cXM3zOr32Tmi_tW7uyjZdjdu2A4eGm7z-p-jwCyB9yAyWj_jt-9WXQE3xmoaCg8fbeZQ_gfYnlDDWmrTErXbOTHThsEv4M2NnGdxaeX1lvIyoRauaviSAv7sCXZb4-6La1-0LdrEWBpPhWIMsfYf-UF7bQQ8r7WmJ6LpGbVpy7"
    },
    {
      text: "A integração com WhatsApp foi um divisor de águas. O contato com o cliente ficou muito mais rápido e eficiente.",
      author: "Rafael Souza",
      role: "Sócio, Serviços de TI",
      metric: "Aumento de 60% na taxa de resposta",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJPtcEMH72Ce3iJvk-3V9eiH_e5Vi0TP3GOjjwFS4eRkgHadi4ry5oGnmyVo5vrEVfKLNfh5_Vc9e2oUCYBWRuUrn_X2JKOii1rjFFBkC2GSHf5PuUdb0tvHfma5jEPSLPlYcnRumxV7266C8I6ZWYl1jJRTRWaK9M7FMG6HuunNee0MIFpLMBXuoN_ljJoeJVTUbnv4TdtMfRsUGm0x2rRlyHNUnscEzP8rFsYz0H7lOm8HFbJWNXQskcDu9UKBK1fO4_BkpZd1pm"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-primary/5 to-transparent blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-surface border border-main/10 p-8 rounded-2xl flex flex-col justify-between h-full hover:border-primary/30 transition-colors">
              <div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" className="text-primary" />)}
                </div>
                <p className="text-lg text-main mb-8 italic leading-relaxed">"{t.text}"</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border-2 border-primary/20 object-cover" />
                  <div>
                    <h4 className="font-bold text-main">{t.author}</h4>
                    <p className="text-sm text-text-muted">{t.role}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-main/10 flex items-center gap-2 text-green-400 text-sm font-semibold">
                  <TrendingUp size={16} />
                  {t.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans: Plan[] = [
    {
      name: "Starter",
      description: "Para quem está começando a organizar o processo.",
      price: "199",
      features: [
        { text: "Até 2 usuários" },
        { text: "Pipeline de Vendas Visual" },
        { text: "Gestão de Contatos Ilimitada" },
        { text: "E-mail Básico" }
      ]
    },
    {
      name: "Growth",
      description: "Para empresas que buscam escalar com automação.",
      price: "499",
      highlight: true,
      features: [
        { text: "Tudo do Starter, mais:" },
        { text: "Automação de Marketing" },
        { text: "Segmentação Avançada" },
        { text: "Integração WhatsApp Oficial" },
        { text: "5 Usuários inclusos" }
      ]
    },
    {
      name: "Scale",
      description: "Para operações que precisam de dados e performance.",
      price: "999",
      features: [
        { text: "Tudo do Growth, mais:" },
        { text: "Relatórios Avançados (BI)" },
        { text: "Suporte Prioritário VIP" },
        { text: "API e Webhooks Ilimitados" },
        { text: "Usuários Ilimitados" }
      ]
    }
  ];

  return (
    <section id="plans" className="py-24 px-6 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Planos que crescem com você" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl flex flex-col transition-transform duration-300 ${plan.highlight
                  ? "bg-surface border-2 border-primary shadow-[0_0_40px_rgba(0,191,255,0.15)] scale-105 z-10"
                  : "bg-surface/50 border border-main/10 hover:border-main/20"
                }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-background text-xs font-bold uppercase py-1 px-4 rounded-full tracking-wider shadow-lg shadow-primary/30">
                  Mais Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-main">{plan.name}</h3>
              <p className="text-text-muted mt-2 text-sm min-h-[40px]">{plan.description}</p>

              <div className="my-8">
                <span className="text-4xl font-black text-main">R${plan.price}</span>
                <span className="text-text-muted">/mês</span>
              </div>

              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                className="w-full mb-8"
              >
                Começar Agora
              </Button>

              <ul className="space-y-4">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-muted">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Preciso ter experiência com CRM?",
      answer: "Não. A plataforma é projetada para ser intuitiva. Além disso, nosso suporte e os materiais de ajuda guiam você em cada passo da configuração."
    },
    {
      question: "Em quanto tempo consigo colocar no ar?",
      answer: "Com nossos modelos de funis e automações, você pode ter sua operação rodando em questão de dias, não meses. A importação de dados é simples e rápida."
    },
    {
      question: "Funis e automações já vêm prontos?",
      answer: "Sim, oferecemos uma biblioteca de modelos prontos para B2B que você pode ativar com poucos cliques e adaptar para sua necessidade específica."
    },
    {
      question: "O WhatsApp integra?",
      answer: "Sim! Nossa integração oficial permite enviar e receber mensagens, além de automatizar conversas diretamente pela plataforma (disponível nos planos Growth e Scale)."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Nosso suporte é feito por humanos especialistas, em português, via chat e e-mail. Acreditamos em resolver problemas de verdade, não em abrir tickets infinitos."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Perguntas Frequentes" />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface border border-main/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-main/20"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left font-bold text-main focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-text-muted transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 text-text-muted leading-relaxed border-t border-main/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-main/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Logo />
        <div className="text-text-muted text-sm text-center md:text-right">
          <p>© 2024 BUUDLEADS. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-2 justify-center md:justify-end">
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CTA = () => {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none -z-10" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-main tracking-tight mb-8 leading-tight">
          Vendas sem organização são sorte. <br />
          Vendas com <span className="text-primary">BUUDLEADS</span> são estratégia.
        </h2>
        <Button className="h-16 px-10 text-lg shadow-[0_0_40px_rgba(0,191,255,0.4)] hover:shadow-[0_0_60px_rgba(0,191,255,0.6)]">
          Começar Minha Estratégia Agora
        </Button>
      </div>
    </section>
  );
};

// --- Main App Component ---

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    }
    return 'dark';
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-background text-main selection:bg-primary selection:text-background font-sans transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Authority />
        <Benefits />
        <VisualDemo />
        <Differentiators />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;