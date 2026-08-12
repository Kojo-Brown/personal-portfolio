import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectCategories, projects } from "@/lib/constants";

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      {/* Header */}
      <section className="pt-20 pb-10 md:pt-28">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Work</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
          Enterprise systems, published research, and products running in
          production — each with outcomes I can point to.
        </p>
      </section>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {projectCategories
          .filter((category) => category.count > 0 || category.id === "all")
          .map((category) => (
            <Button
              key={category.id}
              size="sm"
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <span className="text-xs opacity-60">{category.count}</span>
            </Button>
          ))}
      </div>

      {/* Projects */}
      <section className="grid gap-4 py-10 pb-20 md:grid-cols-2 md:pb-24">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">
                  {project.company
                    ? `${project.company} · ${project.year}`
                    : project.year}
                </Badge>
                {project.status === "in-progress" && (
                  <Badge variant="secondary">In progress</Badge>
                )}
              </div>
              <CardTitle className="mt-1 text-xl">{project.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {project.longDescription}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              {project.achievements.length > 0 && (
                <ul className="text-muted-foreground space-y-1.5 text-sm">
                  {project.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="bg-foreground/40 mt-2 size-1 shrink-0 rounded-full" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 6).map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 6 && (
                  <Badge variant="secondary">
                    +{project.technologies.length - 6}
                  </Badge>
                )}
              </div>
            </CardContent>

            {(project.liveUrl || project.githubUrl) && (
              <CardFooter className="gap-2">
                {project.liveUrl && (
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink />
                      Live site
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                      Source
                    </a>
                  </Button>
                )}
              </CardFooter>
            )}
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Works;
