import { Link } from "react-router-dom";
import { ArrowRight, Code2, Rocket, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/constants";

const capabilities = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Responsive, accessible interfaces built with React, Next.js, and Angular — from Figma handoff to production.",
    items: ["React & Next.js", "Angular & RxJS", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Server,
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
    icon: Rocket,
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
    <div className="mx-auto w-full max-w-5xl px-6">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <Badge variant="secondary">Open to opportunities</Badge>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-6xl">
          Building scalable applications and robust systems.
        </h1>

        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
          I'm Nicholas Darko Brown — a software engineer with an M.S. in
          Computer Science and enterprise experience across React, TypeScript,
          and Node.js. I turn complex problems into fast, reliable products.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <Link to="/works">
              View my work
              <ArrowRight />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>

        <p className="text-muted-foreground mt-10 text-sm">
          M.S. Computer Science, Quinnipiac University · Previously at
          Amalitech Services · New Haven, CT
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="gap-1 py-5">
            <CardContent className="px-5">
              <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
              <p className="text-muted-foreground mt-1 text-sm">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Featured work */}
      <section className="py-20 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Featured work
            </h2>
            <p className="text-muted-foreground mt-2">
              Enterprise systems, published research, and products in
              production.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <Link to="/works">
              All projects
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featured.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant="outline">{project.year}</Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button variant="outline" className="mt-6 md:hidden" asChild>
          <Link to="/works">
            All projects
            <ArrowRight />
          </Link>
        </Button>
      </section>

      {/* Capabilities */}
      <section className="pb-20 md:pb-24">
        <h2 className="text-3xl font-semibold tracking-tight">What I do</h2>
        <p className="text-muted-foreground mt-2">
          Full-stack craft, from first commit to production.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {capabilities.map((capability) => (
            <Card key={capability.title}>
              <CardHeader>
                <div className="bg-muted mb-2 flex size-10 items-center justify-center rounded-lg">
                  <capability.icon className="size-5" />
                </div>
                <CardTitle>{capability.title}</CardTitle>
                <CardDescription>{capability.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-1.5 text-sm">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="bg-foreground/40 size-1 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-24">
        <Card className="items-center py-12 text-center">
          <CardContent className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Let's build something together
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md">
              Open to full-time roles, contract work, and collaborations.
            </p>
            <Button size="lg" className="mt-6" asChild>
              <Link to="/contact">
                Get in touch
                <ArrowRight />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
