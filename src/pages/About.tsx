import { Link } from "react-router-dom";
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
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:pt-36">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_340px] lg:gap-24">
          <div>
            <Reveal>
              <p className="label-mono mb-6">About me</p>
              <h1 className="font-display text-5xl font-medium leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">
                Engineer, mentor, <em className="font-normal">problem-solver</em>.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10 max-w-xl space-y-5 text-lg leading-relaxed text-ink-soft">
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
          </div>

          <Reveal delay={200} className="lg:sticky lg:top-24">
            <figure>
              <img
                src="/images/Photo.PNG"
                alt="Nicholas Darko Brown"
                className="w-full border border-line object-cover"
              />
              <figcaption className="mt-3 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                <span>Nicholas Darko Brown</span>
                <span>New Haven, CT</span>
              </figcaption>
            </figure>
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

          <div className="mt-16 border-t border-line">
            {workExperience.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 80}>
                <div className="grid gap-6 border-b border-line py-10 md:grid-cols-[220px_1fr] md:gap-12">
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
                    <p>{exp.period}</p>
                    <p className="mt-2">{exp.location}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{exp.company}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
                      {exp.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="max-w-2xl text-sm leading-relaxed text-ink-soft"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    {exp.technologies.length > 0 && (
                      <p className="mt-6 font-mono text-xs text-ink-soft">
                        {exp.technologies.join(" · ")}
                      </p>
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

          <div className="mt-16 border-t border-line">
            {education.map((edu, index) => (
              <Reveal key={edu.id} delay={index * 80}>
                <div className="grid gap-6 border-b border-line py-10 md:grid-cols-[220px_1fr] md:gap-12">
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
                    <p>{edu.period}</p>
                    <p className="mt-2">{edu.location}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tight">
                      {edu.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{edu.company}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
                      {edu.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {edu.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="max-w-2xl text-sm leading-relaxed text-ink-soft"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                  <div className="grid gap-3 border-b border-line py-8 md:grid-cols-[220px_1fr] md:gap-12">
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
                      {group.name}
                    </p>
                    <p className="text-lg leading-relaxed">
                      {groupSkills.map((skill, i) => (
                        <span key={skill.name} title={skill.description}>
                          {skill.name}
                          {i < groupSkills.length - 1 && (
                            <span className="text-ink-soft/50">{"  /  "}</span>
                          )}
                        </span>
                      ))}
                    </p>
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

          <div className="mt-16 border-t border-line-dark">
            {awards.map((award, index) => (
              <Reveal key={award.title} delay={index * 80}>
                <div className="grid gap-4 border-b border-line-dark py-8 md:grid-cols-[220px_1fr_1fr] md:gap-12">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-paper/40">
                    {award.date}
                  </p>
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-tight">
                      {award.title}
                    </h3>
                    <p className="mt-1 text-sm text-paper/50">
                      {award.organization}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-paper/60">
                    {award.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <p className="max-w-xl text-lg leading-relaxed text-paper/70">
                Beyond code, I'm active in the tech community — hackathons,
                mentoring, and continuous learning.
              </p>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors duration-200 hover:bg-accent hover:text-paper"
              >
                Work with me
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
