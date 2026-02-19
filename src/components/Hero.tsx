import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-mono text-xs font-medium tracking-widest uppercase">
            Available for Work
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-slide-up opacity-0 delay-100 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          Muhammad{" "}
          <span className="text-gradient">Hasaan</span>
        </h1>

        {/* Title */}
        <div className="animate-slide-up opacity-0 delay-200 font-mono text-xl md:text-2xl text-muted-foreground mb-6">
          <span className="text-primary">&lt;</span>
          Software Engineer
          <span className="text-primary">/&gt;</span>
        </div>

        {/* Summary */}
        <p className="animate-slide-up opacity-0 delay-300 max-w-2xl text-muted-foreground text-lg leading-relaxed mb-10">
          Building scalable mobile & web apps with React Native, React, and modern full-stack
          technologies. Specialized in delivering polished iOS & Android experiences with AI
          integration, real-time features, and clean architecture.
        </p>

        {/* CTA Buttons */}
        <div className="animate-slide-up opacity-0 delay-400 flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow hover:glow-lg text-sm"
          >
            View Projects
          </a>
          <a
            href="mailto:muhammadhasaanwork@gmail.com"
            className="px-8 py-3 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-all font-semibold text-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="animate-slide-up opacity-0 delay-500 flex gap-6 items-center">
          <a
            href="https://github.com/MuhammadHasaanWaseem"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            <Github size={16} />
            GitHub
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="https://linkedin.com/in/MuhammadHasaan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="mailto:muhammadhasaanwork@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            <Mail size={16} />
            Email
          </a>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={20} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
