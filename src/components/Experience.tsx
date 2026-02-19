import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Front-End Software Engineer",
    company: "Open Malo Technologies",
    location: "Rajokot, India (Remote)",
    period: "2024 – Present",
    points: [
      "Spearheaded development of a cross-platform mobile app for Android & iOS using React Native with scalable architecture and reusable components.",
      "Integrated third-party and RESTful APIs securely, collaborated closely with the team to deliver clean, well-structured code.",
    ],
    current: true,
  },
  {
    role: "Full Stack Developer",
    company: "Upvave",
    location: "Lahore, Pakistan",
    period: "2023 – 2024",
    points: [
      "Led end-to-end development using React, React Native, and Node.js — delivering production-ready UIs and scalable backends.",
      "Utilized Docker for containerization ensuring consistent development and streamlined deployment workflows.",
    ],
    current: false,
  },
  {
    role: "Full Stack React Native Developer",
    company: "724-One",
    location: "Lahore, Pakistan",
    period: "2022 – 2023",
    points: [
      "Developed full-stack solutions using React, React Native, and Firebase Node.js with production-ready user interfaces.",
      "Built and deployed multiple projects prioritizing performance and user experience across platforms.",
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Work{" "}
            <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-6 md:gap-10">
                {/* Dot */}
                <div className="relative shrink-0 mt-1">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border ${
                      exp.current
                        ? "bg-primary/20 border-primary/50 glow"
                        : "bg-secondary border-border"
                    }`}
                  >
                    <Briefcase
                      size={18}
                      className={exp.current ? "text-primary" : "text-muted-foreground"}
                    />
                  </div>
                  {exp.current && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-pulse" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex flex-wrap gap-2 items-start justify-between mb-1">
                    <h3 className="font-bold text-lg text-foreground">{exp.role}</h3>
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5 font-medium text-foreground/80">
                      <Briefcase size={13} />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="relative flex gap-6 md:gap-10 mt-6">
            <div className="shrink-0 mt-1">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border bg-secondary border-border">
                <span className="text-xl">🎓</span>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="font-bold text-lg text-foreground">BS Software Engineering</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1 mb-2">
                <span className="font-medium text-foreground/80">Lahore Garrison University</span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> Sep 2021 – June 2025
                </span>
              </div>
              <p className="text-sm text-muted-foreground">CGPA: <span className="text-primary font-semibold">3.5</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
