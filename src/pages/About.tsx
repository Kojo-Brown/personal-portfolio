import { Link } from "react-router-dom";
import { ArrowUpRight, Award as AwardIcon } from "lucide-react";
import Reveal from "@/components/reveal";
import { aboutSkills, awards, experiences } from "@/lib/constants";

const skillGroups = [
  { name: "Frontend", categories: ["Frontend"] },
  { name: "Backend", categories: ["Backend"] },
  { name: "Languages", categories: ["Language"] },
  { name: "Databases", categories: ["Database"] },
  { name: "Cloud, DevOps & Tools", categories: ["Cloud", "DevOps", "Tools"] },
];

const About = () => {
  const workExperience = experiences.filter((exp) => exp.type === "work");
  const education = experiences.filter((exp) => exp.type === "education");

  return (
    <div>
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_360px] lg:gap-20">
          <div>
            <Reveal>
              <p className="label-mono mb-6">About me</p>
              <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Engineer, mentor,{" "}
                <span className="italic text-accent">problem-solver</span>.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  I'm Nicholas Darko Brown, a software engineer from Ghana,
                  based in New Haven, Connecticut. I hold an M.S. in Computer
                  Science from Quinnipiac University and spent three years at
                  Amalitech Services leading frontend work on enterprise
                  applications.
                </p>
                <p>
                  My work spans a 3D injection-molding analysis system that cut
                  manufacturing errors by 35%, a restaurant platform that lifted
                  repeat customers by 25%, and mentoring eight junior developers
                  along the way. I care about software that solves real problems
                  — and teams that get better at building it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
                {[
                  { value: "4+", label: "Years experience" },
                  { value: "9+", label: "Projects completed" },
                  { value: "15+", label: "Technologies" },
                  { value: "4", label: "Awards won" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl font-medium">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-lg border border-line">
              <img
                src="/images/Photo.PNG"
                alt="Nicholas Darko Brown"
                className="aspect-auto w-full object-cover"
              />
              <div className="flex items-center justify-between border-t border-line bg-white px-5 py-4">
                <div>
                  <p className="text-sm font-medium">Nicholas Darko Brown</p>
                  <p className="text-xs text-ink-soft">New Haven, CT</p>
                </div>
                <span className="flex items-center gap-2 text-xs text-ink-soft">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Available
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="label-mono mb-4">01 — Experience</p>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
              Where I've worked
            </h2>
          </Reveal>

          <div className="mt-16 space-y-0 border-t border-line">
            {workExperience.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 80}>
                <div className="grid gap-6 border-b border-line py-10 md:grid-cols-[220px_1fr] md:gap-12">
                  <div>
                    <p className="font-mono text-xs text-ink-soft">
                      {exp.period}
                    </p>
                    <p className="mt-2 text-sm text-ink-soft">{exp.location}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {exp.company}
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
                      {exp.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                          <span className="max-w-2xl text-sm leading-relaxed text-ink-soft">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {exp.technologies.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="label-mono mb-4">02 — Education</p>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
              Academic foundation
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <Reveal key={edu.id} delay={index * 100}>
                <div className="flex h-full flex-col rounded-lg border border-line bg-white p-8">
                  <p className="font-mono text-xs text-ink-soft">
                    {edu.period}
                  </p>
                  <h3 className="font-display mt-4 text-2xl font-medium tracking-tight">
                    {edu.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {edu.company}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{edu.location}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {edu.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {edu.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3">
                        <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                        <span className="text-sm leading-relaxed text-ink-soft">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="label-mono mb-4">03 — Skills</p>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
              Tools of the trade
            </h2>
          </Reveal>

          <div className="mt-16 border-t border-line">
            {skillGroups.map((group, index) => {
              const groupSkills = aboutSkills.filter((skill) =>
                group.categories.includes(skill.category)
              );
              if (groupSkills.length === 0) return null;
              return (
                <Reveal key={group.name} delay={index * 60}>
                  <div className="grid gap-4 border-b border-line py-8 md:grid-cols-[220px_1fr] md:gap-12">
                    <p className="text-sm font-medium">{group.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {groupSkills.map((skill) => (
                        <span
                          key={skill.name}
                          title={skill.description}
                          className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink transition-colors duration-200 hover:border-ink"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="label-mono !text-paper/50 mb-4">04 — Recognition</p>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
              Awards & recognition
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line-dark bg-line-dark md:grid-cols-3">
            {awards.map((award, index) => (
              <Reveal
                key={award.title}
                delay={index * 100}
                className="bg-ink p-8"
              >
                <AwardIcon size={20} className="text-accent" />
                <h3 className="font-display mt-5 text-xl font-medium tracking-tight">
                  {award.title}
                </h3>
                <p className="mt-2 text-sm text-paper/60">
                  {award.organization} — {award.date}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-paper/60">
                  {award.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-line-dark pt-12 md:flex-row md:items-center">
              <p className="max-w-xl text-lg leading-relaxed text-paper/70">
                Beyond code, I'm active in the tech community — hackathons,
                mentoring, and continuous learning. I believe in giving back to
                the community that helped me grow.
              </p>
              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-paper/90"
              >
                Work with me
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
