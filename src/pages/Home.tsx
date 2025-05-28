import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async () => {
    if (!email.trim()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error(
          "EmailJS configuration missing. Please check your environment variables."
        );
        setSubmitStatus("error");
        return;
      }

      const templateParams = {
        title: "Project Inquiry from Portfolio",
        name: email.split("@")[0],
        email: email,
        message: message || "No additional message provided.",
        from_email: email,
        from_name: email.split("@")[0],
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setEmail("");
        setMessage("");
        setShowMessageBox(false);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMessageBox = () => {
    setShowMessageBox(!showMessageBox);
    setSubmitStatus("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-64 h-64 bg-purple-100 rounded-full opacity-20 animate-pulse"
          style={{
            top: "10%",
            right: "15%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute w-32 h-32 bg-blue-100 rounded-full opacity-30"
          style={{
            top: "60%",
            right: "5%",
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * -0.01
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute w-48 h-48 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-10"
          style={{
            top: "30%",
            left: "5%",
            transform: `translate(${mousePosition.x * 0.015}px, ${
              mousePosition.y * 0.015
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `translate(${
                mousePosition.x * (0.01 + Math.random() * 0.02)
              }px, ${mousePosition.y * (0.01 + Math.random() * 0.02)}px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">Building scalable</span>
                <span className="block text-gray-900">
                  applications & robust
                </span>
                <span className="relative inline-block">
                  <span className="text-purple-600">systems.</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_0.5s_forwards] origin-left"></div>
                </span>
              </h1>

              <div
                className={`space-y-4 text-gray-600 text-lg leading-relaxed transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <p>
                  a{" "}
                  <span className="font-semibold text-gray-900">
                    Software Developer
                  </span>{" "}
                  with expertise in modern web technologies.
                </p>
                <p>
                  I specialize in React, Nextjs, Angular, Typescript,
                  Javascript, Node.js, Express, and Database management,
                  creating scalable applications and seamless user experiences.
                </p>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <div className="space-y-4 max-w-md">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500"
                  />
                  <button
                    onClick={showMessageBox ? handleSubmit : toggleMessageBox}
                    disabled={isSubmitting}
                    className={`px-8 py-4 font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : showMessageBox
                      ? "Send Message"
                      : "Connect With Me"}
                  </button>
                </div>

                {showMessageBox && (
                  <div className="animate-[fadeIn_0.3s_ease-out]">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project or inquiry (optional)"
                      rows={3}
                      className="w-full px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500 resize-none"
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={toggleMessageBox}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      >
                        Skip message
                      </button>
                    </div>
                  </div>
                )}

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">
                      ❌ Failed to send message. Please try again or email me
                      directly.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div
              className={`flex flex-wrap gap-3 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              {[
                "HTML/CSS",
                "Javascript",
                "React",
                "Nextjs",
                "Angular",
                "Node.js",
                "Express",
                "Nestjs",
                "Python",
                "TypeScript",
                "AWS",
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "Git",
                "MS Office",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-purple-50 hover:border-purple-200 transition-all duration-200 transform hover:scale-105"
                  style={{
                    animationDelay: `${0.8 + index * 0.1}s`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="relative w-80 h-[450px] lg:w-96 lg:h-[520px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>

                <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="src/assets/img_one.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
                  <code className="text-purple-600 font-mono text-sm">
                    console.log()
                  </code>
                </div>
                <div
                  className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  <code className="text-blue-600 font-mono text-sm">
                    function()
                  </code>
                </div>
                <div
                  className="absolute top-1/4 -right-8 bg-white rounded-lg shadow-lg p-3 animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <code className="text-green-600 font-mono text-sm">
                    npm run
                  </code>
                </div>
                <div
                  className="absolute bottom-1/4 -left-8 bg-white rounded-lg shadow-lg p-3 animate-bounce"
                  style={{ animationDelay: "1.5s" }}
                >
                  <code className="text-orange-600 font-mono text-sm">
                    git push
                  </code>
                </div>
              </div>

              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "20s" }}
              >
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
                <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-blue-500 rounded-full transform translate-x-2 translate-y-2"></div>
              </div>
              <div
                className="absolute inset-0 animate-spin"
                style={{
                  animationDuration: "15s",
                  animationDirection: "reverse",
                }}
              >
                <div className="absolute top-1/2 right-0 w-3 h-3 bg-green-500 rounded-full transform translate-x-2 -translate-y-2"></div>
                <div className="absolute bottom-1/2 left-0 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-2 translate-y-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
