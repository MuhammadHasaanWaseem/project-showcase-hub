import { ExternalLink } from "lucide-react";
import { certificates } from "@/data/certificates";
import "@/styles/Certificates.css";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative bg-secondary/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container px-4 md:px-8">
        <div className="text-center mb-12 reveal" data-delay="0">
          <p className="font-mono text-muted-foreground text-xs tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Certificates
          </h2>
        </div>

        <div className="certificates-wrap">
          {certificates.map((cert, i) => (
            <a
              key={cert.url}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-item reveal-scale"
              data-delay={i * 100}
            >
              <div className="certificate-item__image-wrap">
                <img
                  src={cert.image}
                  alt={`${cert.provider} — ${cert.title}`}
                  className="certificate-item__image"
                  loading="lazy"
                />
              </div>
              <div className="certificate-item__meta">
                <span className="certificate-item__provider">{cert.provider}</span>
                <h3 className="certificate-item__title">{cert.title}</h3>
                <span className="certificate-item__link">
                  View Certificate
                  <ExternalLink size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
