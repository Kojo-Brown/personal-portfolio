import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Boxes,
  Building2,
  Code2,
  Database,
  Layers,
  MessagesSquare,
  SearchCode,
  Server,
  X,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/reveal";
import {
  achievements,
  categories,
  developmentProcess,
  services,
} from "@/lib/constants";
import type { Service } from "@/types";

const serviceIcons: Record<number, LucideIcon> = {
  1: Code2,
  2: Server,
  3: Layers,
  4: Building2,
  5: Boxes,
  6: Database,
  7: SearchCode,
  8: MessagesSquare,
};

const Services = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState("services");

  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeService]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveService(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filteredServices =
    activeTab === "services"
      ? services
      : services.filter((s) => s.category === activeTab);

  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
        <Reveal>
          <p className="label-mono mb-6">Services</p>
          <h1 className="font-display max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            From idea to{" "}
            <span className="italic text-accent">production</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Focused engineering services backed by enterprise experience —
            delivering software that drives growth and holds up under real
            traffic.
          </p>
        </Reveal>
      </section>

      {/* Proven results */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3 lg:grid-cols-6">
            {achievements.map((achievement) => (
              <div key={achievement.description} className="bg-white p-6">
                <p className="font-display text-3xl font-medium">
                  {achievement.metric}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap gap-x-7 gap-y-3 border-b border-line pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative pb-1 text-sm transition-colors duration-200 ${
                  activeTab === category.id
                    ? "font-medium text-ink"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {category.name}
                <span
                  className={`absolute -bottom-[17px] left-0 h-px w-full bg-ink transition-transform duration-300 ${
                    activeTab === category.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredServices.map((service, index) => {
            const Icon = serviceIcons[service.id] ?? Code2;
            return (
              <Reveal key={service.id} delay={(index % 4) * 60}>
                <button
                  onClick={() => setActiveService(service)}
                  className="group flex h-full w-full flex-col rounded-lg border border-line bg-white p-7 text-left transition-all duration-300 hover:border-ink"
                >
                  <Icon
                    size={22}
                    className="text-ink-soft transition-colors duration-300 group-hover:text-accent"
                  />
                  <h3 className="font-display mt-5 text-lg font-medium tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                    <span className="font-mono text-xs text-ink-soft">
                      {service.timeline}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-ink-soft transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="label-mono !text-paper/50 mb-4">How I work</p>
            <h2 className="font-display max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
              A process built on clarity
            </h2>
          </Reveal>

          <div className="mt-16 border-t border-line-dark">
            {developmentProcess.map((step, index) => (
              <Reveal key={step.step} delay={index * 60}>
                <div className="grid items-baseline gap-2 border-b border-line-dark py-7 md:grid-cols-[80px_280px_1fr_auto] md:gap-8">
                  <span className="font-mono text-sm text-accent">
                    {step.step}
                  </span>
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-paper/60">
                    {step.description}
                  </p>
                  <span className="hidden font-mono text-xs text-paper/40 md:block">
                    {step.duration}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <p className="max-w-xl text-lg leading-relaxed text-paper/70">
                Ready to start? Let's discuss your requirements and scope the
                right solution for your goals and budget.
              </p>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-paper/90"
                >
                  Get a free consultation
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <a
                  href="mailto:brown.nicholas.darko@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-line-dark px-6 py-3 text-sm font-medium text-paper transition-colors duration-200 hover:border-paper"
                >
                  Email directly
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service modal */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          onClick={() => setActiveService(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeService.title}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-paper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-ink p-8 text-paper md:p-10">
              <button
                onClick={() => setActiveService(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line-dark text-paper/70 transition-colors duration-200 hover:text-paper"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <p className="font-mono text-[11px] uppercase tracking-wider text-paper/50">
                {activeService.category}
              </p>
              <h2 className="font-display mt-3 max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
                {activeService.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper/60">
                {activeService.experience}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-paper/40">
                    Pricing
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    {activeService.pricing}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-paper/40">
                    Timeline
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    {activeService.timeline}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-base leading-relaxed text-ink-soft">
                {activeService.longDescription}
              </p>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                  <p className="label-mono mb-5">What's included</p>
                  <ul className="space-y-3">
                    {activeService.features.map((feature) => (
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
                  <p className="label-mono mb-5">Technologies & tools</p>
                  <div className="flex flex-wrap gap-2">
                    {activeService.technologies.map((tech) => (
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
        </div>
      )}
    </div>
  );
};

export default Services;
