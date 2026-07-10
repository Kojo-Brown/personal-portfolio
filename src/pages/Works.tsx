import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Globe, X } from "lucide-react";
import Reveal from "@/components/reveal";
import { projectCategories, projects } from "@/lib/constants";
import type { Project } from "@/types";

const statusStyles: Record<string, string> = {
  completed: "bg-emerald-500",
  "in-progress": "bg-amber-500",
  concept: "bg-sky-500",
};

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
        <Reveal>
          <p className="label-mono mb-6">Selected work</p>
          <h1 className="font-display max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            Work that ships and{" "}
            <span className="italic text-accent">delivers</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            From enterprise 3D analysis systems to award-winning platforms —
            each project is built with purpose and measured by outcomes.
          </p>
        </Reveal>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap gap-x-7 gap-y-3 border-b border-line pb-4">
            {projectCategories
              .filter((category) => category.count > 0 || category.id === "all")
              .map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative pb-1 text-sm transition-colors duration-200 ${
                    activeCategory === category.id
                      ? "font-medium text-ink"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {category.name}
                  <sup className="ml-1 font-mono text-[10px] text-accent">
                    {category.count}
                  </sup>
                  <span
                    className={`absolute -bottom-[17px] left-0 h-px w-full bg-ink transition-transform duration-300 ${
                      activeCategory === category.id
                        ? "scale-x-100"
                        : "scale-x-0"
                    }`}
                  />
                </button>
              ))}
          </div>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 80}>
              <button
                onClick={() => setSelectedProject(project)}
                className="group flex h-full w-full flex-col rounded-lg border border-line bg-white p-8 text-left transition-all duration-300 hover:border-ink"
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="font-mono text-xs text-ink-soft">
                    {String(project.id).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        statusStyles[project.status] ?? "bg-ink-soft"
                      }`}
                    />
                    {project.status.replace("-", " ")}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-accent">
                  {project.title}
                </h3>
                {project.company && (
                  <p className="mt-1 text-sm text-ink-soft">
                    {project.company} — {project.year}
                  </p>
                )}
                {!project.company && (
                  <p className="mt-1 text-sm text-ink-soft">{project.year}</p>
                )}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
                  <span className="text-sm font-medium">Case study</span>
                  <ArrowUpRight
                    size={18}
                    className="text-ink-soft transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Impact band */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Reveal>
            <p className="label-mono !text-paper/50 mb-4">Impact</p>
            <h2 className="font-display max-w-2xl text-3xl font-medium tracking-tight md:text-4xl">
              Built with purpose, measured by results
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
            {[
              { value: "35%", label: "Manufacturing errors reduced" },
              { value: "40%", label: "User engagement improved" },
              { value: "25%", label: "Customer retention increase" },
              { value: "50%", label: "Faster load times" },
            ].map((stat, index) => (
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

      {/* Project modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-paper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-ink p-8 text-paper md:p-10">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line-dark text-paper/70 transition-colors duration-200 hover:text-paper"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-paper/50">
                <span>{selectedProject.category.replace("-", " ")}</span>
                <span>·</span>
                <span>{selectedProject.year}</span>
                {selectedProject.company && (
                  <>
                    <span>·</span>
                    <span>{selectedProject.company}</span>
                  </>
                )}
              </div>
              <h2 className="font-display mt-4 max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
                {selectedProject.title}
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-paper/90"
                  >
                    <Globe size={15} />
                    Live site
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line-dark px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-200 hover:border-paper"
                  >
                    <Github size={15} />
                    Source
                  </a>
                )}
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-base leading-relaxed text-ink-soft">
                {selectedProject.longDescription}
              </p>

              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
                {Object.entries(selectedProject.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white p-5">
                    <p className="font-display text-xl font-medium">{value}</p>
                    <p className="mt-1 text-xs capitalize text-ink-soft">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                  <p className="label-mono mb-5">Key features</p>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                        <span className="text-sm leading-relaxed text-ink-soft">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label-mono mb-5">Outcomes</p>
                  <ul className="space-y-3">
                    {selectedProject.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3">
                        <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                        <span className="text-sm leading-relaxed text-ink-soft">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 border-t border-line pt-8">
                <p className="label-mono mb-5">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line px-3 py-1.5 text-xs text-ink-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
