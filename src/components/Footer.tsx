import { Github, Linkedin, Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-primary font-bold">MH</span> · Built with React & Tailwind ·{" "}
          {new Date().getFullYear()}
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/MuhammadHasaanWaseem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-hasaan-0499ba344"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/hasaan._._"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.tiktok.com/@im_hasaan_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <TikTokIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
