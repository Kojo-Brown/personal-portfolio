import { Link } from "react-router-dom";
import { ArrowRight, Award, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
    <div className="mx-auto w-full max-w-5xl px-6">
      {/* Intro */}
      <section className="grid items-start gap-10 pt-20 pb-16 md:pt-28 lg:grid-cols-[1fr_300px] lg:gap-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            About me
          </h1>
          <div className="text-muted-foreground mt-6 max-w-2xl space-y-4 text-lg leading-relaxed">
            <p>
              I'm Nicholas Darko Brown, a software engineer from Ghana, based
              in New Haven, Connecticut. I hold an M.S. in Computer Science
              from Quinnipiac University and spent three years at Amalitech
              Services leading frontend work on enterprise applications.
            </p>
            <p>
              My work spans a 3D injection-molding analysis system that cut
              manufacturing errors by 35%, a restaurant platform that lifted
              repeat customers by 25%, and mentoring eight junior developers
              along the way. I care about software that solves real problems —
              and teams that get better at building it.
            </p>
          </div>
        </div>

        <Card className="overflow-hidden py-0">
          <img
            src="/images/Photo.PNG"
            alt="Nicholas Darko Brown"
            className="w-full object-cover"
          />
          <CardContent className="pb-4">
            <p className="text-sm font-medium">Nicholas Darko Brown</p>
            <p className="text-muted-foreground text-sm">New Haven, CT</p>
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section className="border-t py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-8 space-y-8">
          {workExperience.map((exp, index) => (
            <div key={exp.id}>
              {index > 0 && <Separator className="mb-8" />}
              <div className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
                <div className="text-muted-foreground text-sm">
                  <p>{exp.period}</p>
                  <p className="mt-1">{exp.location}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm">{exp.company}</p>
                  <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="text-muted-foreground mt-4 space-y-1.5 text-sm">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2">
                        <span className="bg-foreground/40 mt-2 size-1 shrink-0 rounded-full" />
                        <span className="max-w-2xl leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {exp.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="border-t py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {education.map((edu) => (
            <Card key={edu.id}>
              <CardHeader>
                <div className="bg-muted mb-2 flex size-10 items-center justify-center rounded-lg">
                  <GraduationCap className="size-5" />
                </div>
                <CardTitle>{edu.title}</CardTitle>
                <CardDescription>
                  {edu.company} · {edu.location}
                  <br />
                  {edu.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-1.5 text-sm">
                  {edu.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="bg-foreground/40 mt-2 size-1 shrink-0 rounded-full" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-8 space-y-6">
          {skillGroups.map((group) => {
            const groupSkills = aboutSkills.filter((skill) =>
              group.categories.includes(skill.category)
            );
            if (groupSkills.length === 0) return null;
            return (
              <div
                key={group.name}
                className="grid gap-2 md:grid-cols-[200px_1fr] md:gap-10"
              >
                <p className="text-sm font-medium">{group.name}</p>
                <div className="flex flex-wrap gap-1.5">
                  {groupSkills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      title={skill.description}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Awards */}
      <section className="border-t py-16 pb-20 md:pb-24">
        <h2 className="text-3xl font-semibold tracking-tight">Recognition</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {awards.map((award) => (
            <Card key={award.title}>
              <CardHeader>
                <div className="bg-muted mb-2 flex size-10 items-center justify-center rounded-lg">
                  <Award className="size-5" />
                </div>
                <CardTitle>{award.title}</CardTitle>
                <CardDescription>
                  {award.organization} · {award.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {award.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-10 items-center py-10 text-center">
          <CardContent className="flex flex-col items-center">
            <h3 className="text-xl font-semibold tracking-tight">
              Want to work together?
            </h3>
            <p className="text-muted-foreground mt-2 max-w-md text-sm">
              Open to full-time roles, contract work, and collaborations.
            </p>
            <Button className="mt-5" asChild>
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

export default About;
