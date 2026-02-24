import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.png";
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background image — subtle, b&w tinted */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-[0.07] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(hsl(0 0% 0%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 0%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-foreground/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-foreground/3 blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-8 flex flex-col items-center text-center">

        {/* Profile Picture */}
        <div className="relative mb-8 animate-fade-in">
          {/* Outer ring pulse */}
          <div className="absolute inset-0 rounded-full border-2 border-foreground/20 animate-ping opacity-30 scale-110" />
          {/* Ring */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-0.5 bg-gradient-to-br from-foreground/30 via-foreground/10 to-foreground/30">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-background">
              <img
                src={profileImg}
                alt="Muhammad Hasaan"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          {/* Available dot */}
          <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-background shadow-sm" style={{ backgroundColor: "#22c55e" }} />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/20 bg-foreground/5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
          <span className="text-foreground font-mono text-xs font-medium tracking-widest uppercase">
            Available for Work
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-slide-up opacity-0 delay-100 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-foreground">
          Muhammad{" "}
          <span className="relative inline-block">
            <span className="text-gradient">Hasaan</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground/20 rounded-full" />
          </span>
        </h1>

        {/* Title */}
        <div className="animate-slide-up opacity-0 delay-200 font-mono text-xl md:text-2xl text-muted-foreground mb-6">
          <span className="text-foreground font-bold">&lt;</span>
          {" "}Software Engineer{" "}
          <span className="text-foreground font-bold">/&gt;</span>
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
            className="px-8 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
          >
            View Projects
          </a>
          <a
            href="mailto:muhammadhasaanwork@gmail.com"
            className="px-8 py-3 rounded-full border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-all duration-200 font-semibold text-sm"
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
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group"
          >
            <Github size={16} className="group-hover:scale-110 transition-transform" />
            GitHub
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="https://www.linkedin.com/in/muhammad-hasaan-0499ba344"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group"
          >
            <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
            LinkedIn
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="https://www.instagram.com/hasaan._._"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group"
          >
            <Instagram size={16} className="group-hover:scale-110 transition-transform" />
            Instagram
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="https://www.tiktok.com/@im_hasaan_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group"
          >
            <TikTokIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            TikTok
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="mailto:muhammadhasaanwork@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group"
          >
            <Mail size={16} className="group-hover:scale-110 transition-transform" />
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
