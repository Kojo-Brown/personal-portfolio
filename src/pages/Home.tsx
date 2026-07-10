import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";
import { projects } from "@/lib/constants";

const techStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Angular",
  "Node.js",
  "Express",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Python",
];

const capabilities = [
  {
    index: "01",
    title: "Frontend Engineering",
    description:
      "Responsive, accessible interfaces built with React, Next.js, and Angular — from Figma handoff to production.",
    items: ["React & Next.js", "Angular & RxJS", "TypeScript", "Tailwind CSS"],
  },
  {
    index: "02",
    title: "Backend & APIs",
    description:
      "Secure, scalable services and data layers designed for performance and maintainability.",
    items: ["Node.js & NestJS", "REST APIs", "PostgreSQL & MongoDB", "Auth & security"],
  },
  {
    index: "03",
    title: "Product & Delivery",
    description:
      "End-to-end ownership — architecture, cloud deployment, code review, and mentoring teams to ship well.",
    items: ["AWS & Docker", "3D web applications", "Code review", "Technical consulting"],
  },
];

const heroStats = [
  { value: "4+", label: "Years of experience" },
  { value: "9+", label: "Projects delivered" },
  { value: "40%", label: "Avg. engagement lift" },
  { value: "8", label: "Developers mentored" },
];

const featuredIds = [9, 1, 2, 3];

const Home = () => {
  const featured = featuredIds.flatMap(
    (id) => projects.find((p) => p.id === id) ?? []
  );

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <Reveal>
          <p className="label-mono mb-8 flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Software Engineer — New Haven, CT
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Building scalable applications &{" "}
            <span className="italic text-accent">robust systems</span>.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            I'm Nicholas Darko Brown — a software engineer with an M.S. in
            Computer Science and enterprise experience across React,
            TypeScript, and Node.js. I turn complex problems into fast,
            reliable products.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/works"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ink/85"
            >
              View selected work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-soft">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to opportunities
            </span>
            <span>M.S. Computer Science, Quinnipiac University</span>
            <span>Previously at Amalitech Services</span>
          </div>
        </Reveal>
      </section>

      {/* Tech marquee */}
      <section
        className="overflow-hidden border-y border-line py-5"
        aria-label="Technologies"
      >
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center"
              aria-hidden={copy === 1}
            >
              {techStack.map((tech) => (
                <span
                  key={`${copy}-${tech}`}
                  className="flex items-center font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
                >
                  <span className="px-6">{tech}</span>
                  <span className="text-accent">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="label-mono mb-4">01 — Selected work</p>
              <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
                Projects with measurable impact
              </h2>
            </div>
            <Link
              to="/works"
              className="group hidden items-center gap-2 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-ink md:inline-flex"
            >
              All projects
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>

        <div className="border-t border-line">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <Link
                to="/works"
                className="group grid items-baseline gap-2 border-b border-line py-8 transition-colors duration-300 hover:bg-ink/[0.03] md:grid-cols-[80px_1fr_auto_40px] md:gap-6 md:px-4"
              >
                <span className="font-mono text-xs text-ink-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-accent md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">
                    {project.description}
                  </p>
                </div>
                <div className="text-left text-sm text-ink-soft md:text-right">
                  <p className="capitalize">
                    {project.category.replace("-", " ")}
                  </p>
                  <p className="mt-1 font-mono text-xs">{project.year}</p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="hidden self-center text-ink-soft transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent md:block"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            to="/works"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium md:hidden"
          >
            All projects
            <ArrowRight size={15} />
          </Link>
        </Reveal>
      </section>

      {/* Capabilities */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="label-mono !text-paper/50 mb-4">02 — Capabilities</p>
            <h2 className="font-display max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
              Full-stack craft, from first commit to production
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line-dark bg-line-dark md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <Reveal
                key={capability.index}
                delay={index * 100}
                className="bg-ink p-8 md:p-10"
              >
                <p className="font-mono text-xs text-accent">
                  {capability.index}
                </p>
                <h3 className="font-display mt-4 text-xl font-medium tracking-tight md:text-2xl">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">
                  {capability.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {capability.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-paper/80"
                    >
                      <span className="h-px w-4 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-10 border-t border-line-dark pt-12 md:grid-cols-4">
            {heroStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <p className="font-display text-4xl font-medium md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-paper/50">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
