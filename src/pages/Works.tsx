import { projectCategories, projects, skills, stats } from "@/lib/constants";
import type { Project } from "@/types";
import { useEffect, useState } from "react";

const Works = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState("projects");

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

  // Add function to close modal
  const closeModal = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedProject(null);
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-purple-100 rounded-full opacity-10 animate-pulse"
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
          className="absolute w-64 h-64 bg-blue-100 rounded-full opacity-15"
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
          className="absolute w-48 h-48 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-10"
          style={{
            top: "40%",
            right: "15%",
            transform: `translate(${mousePosition.x * 0.015}px, ${
              mousePosition.y * 0.015
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-300 opacity-20 font-mono text-sm animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translate(${
                mousePosition.x * (0.005 + Math.random() * 0.01)
              }px, ${mousePosition.y * (0.005 + Math.random() * 0.01)}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {
              ["{ }", "< />", "[ ]", "( )", "===", "=>", "++", "--"][
                Math.floor(Math.random() * 8)
              ]
            }
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <section
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">My </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A showcase of innovative solutions and impactful projects. From
              enterprise applications to award-winning platforms, each project
              represents a commitment to excellence, modern technologies, and
              measurable results.
            </p>
            <div className="flex justify-center mt-8">
              <a
                href="https://github.com/Kojo-Brown"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105"
              >
                <span>🔗</span>
                <span>View GitHub Profile</span>
              </a>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 text-center ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold text-purple-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "projects"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-purple-50 border border-gray-200"
                }`}
              >
                Projects ({projects.length})
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "skills"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-purple-50 border border-gray-200"
                }`}
              >
                Skills ({skills.length})
              </button>
            </div>
          </div>
        </section>

        {activeTab === "projects" && (
          <>
            <section
              className={`mb-12 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex flex-wrap justify-center gap-4">
                {projectCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeCategory === category.id
                        ? "bg-purple-600 text-white shadow-lg"
                        : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-purple-50 border border-gray-200"
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>
                      {category.name} ({category.count})
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`group bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48 bg-gradient-to-br from-purple-400 to-blue-500 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-6xl opacity-80">💼</div>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm capitalize">
                          {project.category.replace("-", " ")}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            project.status === "completed"
                              ? "bg-green-500/20 text-green-100"
                              : project.status === "in-progress"
                              ? "bg-yellow-500/20 text-yellow-100"
                              : "bg-blue-500/20 text-blue-100"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 line-clamp-1">
                          {project.title}
                        </h3>
                        <div className="flex gap-2 ml-2">
                          {project.githubUrl && (
                            <div className="w-5 h-5 bg-gray-400 rounded opacity-50">
                              📂
                            </div>
                          )}
                          {project.liveUrl && (
                            <div className="w-5 h-5 bg-green-400 rounded opacity-50">
                              🔗
                            </div>
                          )}
                        </div>
                      </div>

                      {project.company && (
                        <p className="text-purple-600 text-sm font-medium mb-2">
                          {project.company}
                        </p>
                      )}

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          {Object.entries(project.metrics)[0]?.[1] ||
                            "View Details"}
                        </div>
                        <div className="text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                          <span className="text-sm font-medium">Explore →</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === "skills" && (
          <section className="mb-20">
            <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {skill.name}
                      </h3>
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                        {skill.category}
                      </span>
                    </div>

                    <div className="text-sm text-gray-600">
                      Used in{" "}
                      <span className="font-semibold text-purple-600">
                        {skill.projects}
                      </span>{" "}
                      projects
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 bg-gradient-to-br from-purple-400 to-blue-500">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-10"
                  type="button"
                  aria-label="Close modal"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-8xl opacity-80">💼</div>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200 flex items-center gap-2"
                    >
                      📂 GitHub
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200 flex items-center gap-2"
                    >
                      🔗 Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm capitalize">
                      {selectedProject.category.replace("-", " ")}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {selectedProject.year}
                    </span>
                    {selectedProject.company && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {selectedProject.company}
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {Object.entries(selectedProject.metrics).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-purple-600">
                          {value}
                        </div>
                        <div className="text-sm text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-2 mt-1.5 w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Achievements
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1.5 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium"
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

        <section
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Project Impact</h2>
            <p className="text-lg mb-8 opacity-90">
              Every project is built with purpose, precision, and a commitment
              to delivering measurable results that drive business growth and
              user satisfaction.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">8+</div>
                <div className="text-purple-100">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-purple-100">Avg. Improvement</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-purple-100">Technologies</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Works;
