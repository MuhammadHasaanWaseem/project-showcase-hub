import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-primary/5 blur-3xl rounded-full" />

      <div className="container px-4 md:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            Let's Talk
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In{" "}
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Open to new opportunities, collaborations, and interesting projects. Let's build
            something great together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            {
              icon: <Mail size={20} />,
              label: "Email",
              value: "muhammadhasaanwork@gmail.com",
              href: "mailto:muhammadhasaanwork@gmail.com",
            },
            {
              icon: <Phone size={20} />,
              label: "Phone",
              value: "+92 322 4476937",
              href: "tel:+923224476937",
            },
            {
              icon: <Github size={20} />,
              label: "GitHub",
              value: "MuhammadHasaanWaseem",
              href: "https://github.com/MuhammadHasaanWaseem",
            },
            {
              icon: <Linkedin size={20} />,
              label: "LinkedIn",
              value: "MuhammadHasaan",
              href: "https://linkedin.com/in/MuhammadHasaan",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-5 rounded-2xl border-subtle card-gradient hover:border-glow hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                <div className="text-sm font-medium text-foreground truncate">{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin size={14} />
            Lahore, Pakistan
          </div>
        </div>
      </div>
    </section>
  );
}
