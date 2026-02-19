import { ExternalLink, Globe, Smartphone } from "lucide-react";
import compositImg from "@/assets/project-composit.jpg";
import kinnectImg from "@/assets/project-kinnect.jpg";
import volunteerImg from "@/assets/project-volunteer.jpg";
import melodicImg from "@/assets/project-melodic.jpg";
import ebibleImg from "@/assets/project-ebible.jpg";
import judgedImg from "@/assets/project-judged.jpg";
import gasioImg from "@/assets/project-gasio.jpg";
import shopifyImg from "@/assets/project-shopify.jpg";
import { useEffect } from "react";

type PlatformTag = "Web" | "iOS" | "Android" | "Shopify";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  platforms: PlatformTag[];
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Composit Art Board",
    description:
      "AI-powered art board creator and designer platform. Full-stack SaaS with CMS, analytics, containerized deployment, and authentication.",
    image: compositImg,
    tags: ["React", "Express", "PostgreSQL", "Drizzle", "Docker", "Clerk", "PostHog"],
    platforms: ["Web"],
    liveUrl: "https://composit.upvave.app/",
    featured: true,
  },
  {
    title: "Volunteer: Actify Now",
    description:
      "Community volunteering platform with AI-powered opportunity matching, real-time actions feed, and Liquid Glass UI design for iOS.",
    image: volunteerImg,
    tags: ["React Native", "Expo Router", "Supabase", "OpenAI", "Reanimated"],
    platforms: ["iOS"],
    liveUrl: "https://apps.apple.com/",
    featured: true,
  },
  {
    title: "Kinnect",
    description:
      "Online dating platform powered by KNN-based matching algorithm, Google Maps integration, in-app purchases, and real-time chat.",
    image: kinnectImg,
    tags: ["React Native", "Expo Router", "KNN Algorithm", "Google Maps", "IAP"],
    platforms: ["Android", "iOS"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.app.kinnect",
    featured: true,
  },
  {
    title: "Melodic Minds",
    description:
      "AI-integrated music learning app with Liquid Glass UI, Stripe payments, Revenue Cat, and Google Ads monetization on iOS.",
    image: melodicImg,
    tags: ["React Native CLI", "Firebase", "OpenAI", "Stripe", "RevenueCat", "Redux"],
    platforms: ["iOS"],
    liveUrl: "https://apps.apple.com/",
  },
  {
    title: "eBible KS",
    description:
      "Scripture reading and study app for iOS with bookmarking, notes, search, and offline access to Bible content.",
    image: ebibleImg,
    tags: ["React Native", "iOS", "Firebase", "Offline Storage"],
    platforms: ["iOS"],
    liveUrl: "https://apps.apple.com/",
  },
  {
    title: "Judged",
    description:
      "Competition judging and scoring platform for iOS. Real-time leaderboards, scorecards, and event management features.",
    image: judgedImg,
    tags: ["React Native", "iOS", "Real-time", "Firebase"],
    platforms: ["iOS"],
    liveUrl: "https://apps.apple.com/",
  },
  {
    title: "Gasio",
    description:
      "AI-powered card game analytics platform. Smart probability analysis, game history tracking, and strategy recommendations.",
    image: gasioImg,
    tags: ["React", "Node.js", "OpenAI", "WebSocket"],
    platforms: ["Web"],
  },
  {
    title: "Usama — Shopify Store Design",
    description:
      "Custom Shopify storefront design with modern UI, optimized product pages, and conversion-focused layouts.",
    image: shopifyImg,
    tags: ["Shopify", "Liquid", "CSS", "UI Design"],
    platforms: ["Shopify"],
  },
];

const platformColor = (platform: PlatformTag) => {
  if (platform === "iOS") return "bg-foreground/10 text-foreground border-foreground/20";
  if (platform === "Android") return "bg-foreground/8 text-foreground/70 border-foreground/15";
  if (platform === "Web") return "bg-foreground/10 text-foreground border-foreground/20";
  if (platform === "Shopify") return "bg-foreground/10 text-foreground border-foreground/20";
  return "";
};

const platformIcon = (platform: PlatformTag) => {
  if (platform === "iOS" || platform === "Android") return <Smartphone size={10} />;
  return <Globe size={10} />;
};

export default function Projects() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-scale");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
            setTimeout(() => el.classList.add("visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 relative bg-background">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal" data-delay="0">
          <p className="font-mono text-muted-foreground text-xs tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            A selection of apps and platforms I've built — from AI-powered tools to production
            mobile apps deployed on the App Store and Play Store.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`reveal-scale group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-foreground/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                project.featured && index === 0 ? "md:col-span-2" : ""
              }`}
              data-delay={index * 60}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[20%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />

                {/* Platform badges */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {project.platforms.map((p) => (
                    <span
                      key={p}
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-medium backdrop-blur-sm ${platformColor(p)}`}
                    >
                      {platformIcon(p)}
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base text-foreground group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs font-mono hover:bg-foreground hover:text-background transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs font-mono">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
