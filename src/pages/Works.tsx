import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import Reveal from "@/components/reveal";
import { projectCategories, projects } from "@/lib/constants";

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const selectCategory = (id: string) => {
    setActiveCategory(id);
    setExpandedId(null);
  };

  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-36">
        <Reveal>
          <p className="label-mono mb-6">Selected work</p>
          <h1 className="font-display max-w-3xl text-5xl font-medium leading-[1.04] tracking-tight md:text-7xl">
            Work that ships.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Enterprise systems, published research, and products running in
            production — each with outcomes I can point to.
          </p>
        </Reveal>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-line pb-4">
            {projectCategories
              .filter((category) => category.count > 0 || category.id === "all")
              .map((category) => (
                <button
                  key={category.id}
                  onClick={() => selectCategory(category.id)}
                  className={`relative pb-1 text-sm transition-colors duration-200 ${
                    activeCategory === category.id
                      ? "font-medium text-ink"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {category.name}
                  <sup className="ml-1 font-mono text-[10px] text-ink-soft">
                    {category.count}
                  </sup>
                  <span
                    className={`absolute -bottom-[17px] left-0 h-px w-full bg-accent transition-transform duration-300 ${
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

      {/* Project list */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div>
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedId === project.id;
            return (
              <Reveal key={project.id} delay={(index % 4) * 60}>
                <article className="border-b border-line">
                  <button
                    onClick={() =>
                      setExpandedId(isExpanded ? null : project.id)
                    }
                    aria-expanded={isExpanded}
                    className="group grid w-full items-baseline gap-2 py-8 text-left md:grid-cols-[80px_1fr_220px_32px] md:gap-6"
                  >
                    <span className="font-mono text-xs text-ink-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2
                        className={`font-display text-2xl font-medium tracking-tight transition-colors duration-200 md:text-3xl ${
                          isExpanded ? "text-accent" : "group-hover:text-accent"
                        }`}
                      >
                        {project.title}
                      </h2>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">
                        {project.description}
                      </p>
                    </div>
                    <div className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft md:text-right">
                      <p>{project.category.replace("-", " ")}</p>
                      <p className="mt-1">
                        {project.company
                          ? `${project.company} · ${project.year}`
                          : project.year}
                      </p>
                      {project.status === "in-progress" && (
                        <p className="mt-1 text-accent">In progress</p>
                      )}
                    </div>
                    <Plus
                      size={18}
                      className={`hidden self-center justify-self-end text-ink-soft transition-transform duration-300 md:block ${
                        isExpanded ? "rotate-45 text-accent" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="grid gap-10 pb-12 md:grid-cols-[80px_1fr] md:gap-6">
                      <span className="hidden md:block" />
                      <div className="max-w-3xl">
                        <p className="text-base leading-relaxed text-ink-soft">
                          {project.longDescription}
                        </p>

                        <div className="mt-10 grid gap-10 sm:grid-cols-2">
                          <div>
                            <p className="label-mono mb-4">Key features</p>
                            <ul className="space-y-2.5">
                              {project.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="text-sm leading-relaxed text-ink-soft"
                                >
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="label-mono mb-4">Outcomes</p>
                            <ul className="space-y-2.5">
                              {project.achievements.map((achievement) => (
                                <li
                                  key={achievement}
                                  className="text-sm leading-relaxed text-ink-soft"
                                >
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-10 border-t border-line pt-6">
                          <p className="label-mono mb-3">Stack</p>
                          <p className="font-mono text-xs leading-loose text-ink-soft">
                            {project.technologies.join(" · ")}
                          </p>
                        </div>

                        {(project.liveUrl || project.githubUrl) && (
                          <div className="mt-8 flex flex-wrap gap-8">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-4 transition-colors duration-200 hover:decoration-accent"
                              >
                                Live site
                                <ArrowUpRight size={14} />
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-4 transition-colors duration-200 hover:decoration-accent"
                              >
                                Source
                                <ArrowUpRight size={14} />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Works;
