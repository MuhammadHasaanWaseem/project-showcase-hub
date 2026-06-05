import { skillRows, skillStats } from "@/data/skills";
import "@/styles/Skills.css";

function SkillRow({ label, skills }: { label: string; skills: string[] }) {
  return (
    <div className="skills-row reveal" data-delay="100">
      <span className="skills-row__label">{label}</span>
      <div className="skills-pills">
        {skills.map((skill) => (
          <span key={skill} className="skills-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const totalSkills = skillRows.reduce((n, row) => n + row.skills.length, 0);

  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container px-4 md:px-8 relative">
        <div className="text-center mb-12 reveal" data-delay="0">
          <p className="font-mono text-muted-foreground text-xs tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills &{" "}
            <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="skills-terminal reveal-scale" data-delay="80">
          <p className="skills-terminal__prompt">~/hasaan $ cat skills.json</p>
          <p>
            <span className="skills-terminal__key">"count"</span>:{" "}
            <span className="skills-terminal__value">{totalSkills}</span>,
          </p>
          <p>
            <span className="skills-terminal__key">"focus"</span>:{" "}
            <span className="skills-terminal__value">
              "React · Next.js · React Native · Mobile Deployment"
            </span>
          </p>
          <p>
            <span className="skills-terminal__key">"status"</span>:{" "}
            <span className="skills-terminal__value">"shipping to App Store & Play Store"</span>
          </p>
        </div>

        <div className="skills-stack">
          {skillRows.map((row) => (
            <SkillRow key={row.label} label={row.label} skills={row.skills} />
          ))}
        </div>

        <div className="skills-stats">
          {skillStats.map((stat, i) => (
            <div key={stat.label} className="skills-stat reveal" data-delay={i * 100}>
              <div className="skills-stat__value">{stat.value}</div>
              <div className="skills-stat__label">{stat.label}</div>
              <div className="skills-stat__desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
