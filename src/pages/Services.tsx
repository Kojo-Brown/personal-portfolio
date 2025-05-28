import {
  achievements,
  categories,
  developmentProcess,
  services,
} from "@/lib/constants";
import type { Service } from "@/types";
import { useEffect, useState } from "react";

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState("services");

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

  const filteredServices =
    activeTab === "services"
      ? services
      : services.filter((s) => s.category === activeTab);

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

        {/* Floating Code Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-purple-300 rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translate(${
                mousePosition.x * (0.01 + Math.random() * 0.02)
              }px, ${mousePosition.y * (0.01 + Math.random() * 0.02)}px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
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
              <span className="text-gray-900">Professional </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Transforming business ideas into powerful digital solutions. With
              proven experience and expertise in modern technologies, I deliver
              results that drive growth and exceed expectations.
            </p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              <span className="text-gray-900">Proven </span>
              <span className="text-purple-600">Results</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 text-center ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.description}
                  </div>
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
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === category.id
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-purple-50 border border-gray-200"
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`group bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                onClick={() => setActiveService(service)}
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <span className="text-purple-600 group-hover:text-purple-700 transition-colors duration-300 text-sm font-medium">
                    View Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {activeService && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveService(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                >
                  ✕
                </button>
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-6">
                    <span className="text-4xl">{activeService.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {activeService.title}
                    </h2>
                    <p className="text-purple-100 text-lg">
                      {activeService.description}
                    </p>
                    <p className="text-purple-200 text-sm mt-2">
                      ✅ {activeService.experience}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {activeService.longDescription}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {activeService.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1 w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeService.technologies.map((tech, i) => (
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
          </div>
        )}

        <section className="mb-20">
          <div
            className={`transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gray-900">My Development </span>
              <span className="text-purple-600">Process</span>
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {developmentProcess.map((step, index) => (
                  <div
                    key={index}
                    className={`relative bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-xl">{step.icon}</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss your requirements and create something amazing
              together. With proven experience and a track record of success,
              I'm committed to delivering solutions that exceed your
              expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a
                href="mailto:brown.nicholas.darko@gmail.com"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200 transform hover:scale-105"
              >
                Send Direct Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
