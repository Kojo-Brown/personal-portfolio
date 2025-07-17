import {
  aboutSections,
  aboutSkills,
  awards,
  experiences,
  skillCategories,
} from "@/lib/constants";
import { useEffect, useState } from "react";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredSkills =
    activeSkillCategory === "all"
      ? aboutSkills
      : activeSkillCategory === "Cloud"
      ? aboutSkills.filter(
          (s) =>
            s.category === "Cloud" ||
            s.category === "DevOps" ||
            s.category === "Tools"
        )
      : aboutSkills.filter((s) => s.category === activeSkillCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gray-100 rounded-full opacity-10 animate-pulse"
          style={{
            top: "5%",
            right: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gray-200 rounded-full opacity-15"
          style={{
            top: "70%",
            left: "5%",
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * -0.01
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute w-48 h-48 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full opacity-10"
          style={{
            top: "40%",
            right: "15%",
            transform: `translate(${mousePosition.x * 0.015}px, ${
              mousePosition.y * 0.015
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <section
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-4xl text-white font-bold shadow-xl">
                NB
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Hi, I'm </span>
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Nicholas
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              A passionate{" "}
              <span className="font-semibold text-gray-900">
                Software Developer
              </span>{" "}
              and
              <span className="font-semibold text-gray-900">
                {" "}
                Computer Science Graduate Student
              </span>{" "}
              from Ghana, currently pursuing my Master's at Quinnipiac
              University. I specialize in building scalable web applications and
              have experience improving user engagement by 40% and reducing
              manufacturing errors by 35% through innovative software solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: "Years Experience", value: "2+" },
                { label: "Projects Completed", value: "8+" },
                { label: "Technologies", value: "15+" },
                { label: "Awards Won", value: "2" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200 hover:border-gray-400 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {aboutSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeSection === section.id
                      ? "bg-black text-white shadow-lg"
                      : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <span className="hidden sm:inline">{section.name}</span>
                  <span className="sm:hidden">{section.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {activeSection === "overview" && (
          <section
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="text-gray-900">About </span>
                <span className="text-gray-700">Me</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Professional Journey
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Currently pursuing my Master's in Computer Science at
                    Quinnipiac University while working as a Poll Interviewer.
                    Previously spent 2+ years as an Associate Frontend Developer
                    at Amalitech Services, where I led enterprise projects and
                    mentored junior developers.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What Drives Me
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    I'm passionate about creating innovative solutions that make
                    a real impact. Whether it's reducing manufacturing errors by
                    35% through 3D modeling systems or building award-winning
                    educational platforms, I believe in technology's power to
                    solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === "experience" && (
          <section
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="text-gray-900">Professional </span>
                <span className="text-gray-700">Experience</span>
              </h2>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 to-gray-800 hidden md:block"></div>

                {experiences
                  .filter((exp) => exp.type === "work")
                  .map((exp) => (
                    <div key={exp.id} className="relative mb-12 last:mb-0">
                      <div className="absolute left-6 top-6 w-4 h-4 bg-gray-700 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                      <div className="md:ml-20 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-gray-700 font-semibold mb-1">
                              {exp.company}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {exp.location}
                            </p>
                          </div>
                          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mt-2 lg:mt-0 self-start">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-gray-600 mb-4">{exp.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-gray-600 mr-2 mt-1.5 w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                                <span className="text-gray-700 text-sm">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "education" && (
          <section
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="text-gray-900">Education & </span>
                <span className="text-gray-700">Learning</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {experiences
                  .filter((exp) => exp.type === "education")
                  .map((edu) => (
                    <div
                      key={edu.id}
                      className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
                    >
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mb-4">
                          <span className="text-white text-xl font-bold">
                            ED
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {edu.title}
                        </h3>
                        <p className="text-gray-700 font-semibold mb-1">
                          {edu.company}
                        </p>
                        <p className="text-gray-500 text-sm mb-2">
                          {edu.location}
                        </p>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {edu.period}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-4">{edu.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Highlights:
                        </h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-gray-600 mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0"></span>
                              <span className="text-gray-700 text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {edu.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "skills" && (
          <section
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="text-gray-900">Technical </span>
                <span className="text-gray-700">Skills</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveSkillCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeSkillCategory === category.id
                        ? "bg-black text-white shadow-lg"
                        : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-gray-700 font-bold text-sm">
                          {skill.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {skill.name}
                        </h3>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "achievements" && (
          <section
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="text-gray-900">Awards & </span>
                <span className="text-gray-700">Recognition</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
                  >
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">AW</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {award.title}
                        </h3>
                        <p className="text-gray-700 font-semibold mb-1">
                          {award.organization}
                        </p>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {award.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-black rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-6">Beyond Coding</h3>
                <p className="text-lg mb-6 opacity-90">
                  When I'm not writing code, I'm actively engaged in the tech
                  community through hackathons, mentoring fellow developers, and
                  reading latest tech trends. I believe in giving back to the
                  community that has helped me grow.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    Hackathon Winner
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    Mentor
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    Innovation
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    Continuous Learning
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default About;
