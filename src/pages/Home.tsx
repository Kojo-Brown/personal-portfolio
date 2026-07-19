import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";
import { projects } from "@/lib/constants";

const techStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Angular",
  "Node.js",
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
    items: [
      "Node.js & NestJS",
      "REST APIs",
      "PostgreSQL & MongoDB",
      "Auth & security",
    ],
  },
  {
    index: "03",
    title: "Product & Delivery",
    description:
      "End-to-end ownership — architecture, cloud deployment, code review, and mentoring teams to ship well.",
    items: ["AWS & Docker", "3D web applications", "Code review", "Mentoring"],
  },
];

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "9", label: "Projects delivered" },
  { value: "2", label: "Peer-reviewed publications" },
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
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:pb-32 md:pt-36">
        <Reveal>
          <p className="label-mono mb-10">
            Software Engineer — New Haven, CT
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display max-w-4xl text-5xl font-medium leading-[1.04] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Building scalable applications &{" "}
            <em className="font-normal">robust systems</em>.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-[1fr_auto] md:items-start md:gap-20">
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
              I'm Nicholas Darko Brown — a software engineer with an M.S. in
              Computer Science and enterprise experience across React,
              TypeScript, and Node.js. I turn complex problems into fast,
              reliable products.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                to="/works"
                className="inline-flex items-center justify-center gap-3 bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors duration-200 hover:bg-accent"
              >
                View selected work
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border border-ink px-8 py-4 text-sm font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
            <span>Open to opportunities</span>
            <span>M.S. Computer Science, Quinnipiac University</span>
            <span>Previously at Amalitech Services</span>
          </div>
        </Reveal>
      </section>

      {/* Tech strip */}
      <section
        className="border-y border-line"
        aria-label="Technologies"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
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
              className="hidden text-sm text-ink-soft underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-accent md:inline"
            >
              All projects
            </Link>
          </div>
        </Reveal>

        <div className="border-t border-line">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <Link
                to="/works"
                className="group grid items-baseline gap-2 border-b border-line py-8 md:grid-cols-[80px_1fr_auto] md:gap-6"
              >
                <span className="font-mono text-xs text-ink-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-200 group-hover:text-accent md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">
                    {project.description}
                  </p>
                </div>
                <div className="text-left font-mono text-xs uppercase tracking-[0.15em] text-ink-soft md:text-right">
                  <p>{project.category.replace("-", " ")}</p>
                  <p className="mt-1">{project.year}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            to="/works"
            className="mt-8 inline-block text-sm underline decoration-line underline-offset-4 hover:decoration-accent md:hidden"
          >
            All projects
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

          <div className="mt-16 grid border-t border-line-dark md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <Reveal
                key={capability.index}
                delay={index * 100}
                className="border-b border-line-dark py-10 md:border-b-0 md:border-r md:py-12 md:pr-10 md:[&:last-child]:border-r-0 md:[&:not(:first-child)]:pl-10"
              >
                <p className="font-mono text-xs text-paper/40">
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
                    <li key={item} className="text-sm text-paper/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-10 border-t border-line-dark pt-12 md:grid-cols-4">
            {stats.map((stat, index) => (
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
