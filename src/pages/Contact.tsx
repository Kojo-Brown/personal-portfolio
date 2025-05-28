import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
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
        title: formData.subject || "Contact Form Submission from Portfolio",
        name: formData.name,
        email: formData.email,
        message: `
📋 CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}

📊 PROJECT DETAILS:
Subject: ${formData.subject || "Not specified"}
Project Type: ${formData.projectType || "Not specified"}
Budget Range: ${formData.budget || "Not specified"}
Timeline: ${formData.timeline || "Not specified"}

💬 DETAILED MESSAGE:
${formData.message}

---
This inquiry was submitted through the Contact page of your portfolio.
        `.trim(),
        from_email: formData.email,
        from_name: formData.name,
        subject: formData.subject || "Not specified",
        project_type: formData.projectType || "Not specified",
        budget: formData.budget || "Not specified",
        timeline: formData.timeline || "Not specified",
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          projectType: "",
          budget: "",
          timeline: "",
        });
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

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "brown.nicholas.darko@gmail.com",
      action: "mailto:brown.nicholas.darko@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "203.747.6460",
      action: "tel:+12037476460",
    },
    {
      icon: "📍",
      title: "Location",
      value: "New Haven, CT, USA",
      action: "https://maps.google.com/?q=New+Haven,CT",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Nicholas Darko Brown",
      action: "https://linkedin.com/in/NicholasDarkoBrown",
    },
  ];

  const projectTypes = [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Application",
    "Enterprise Solution",
    "3D Web Application",
    "Consulting",
    "Other",
  ];

  const budgetRanges = [
    "Under $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "Let's discuss",
  ];

  const timelines = [
    "ASAP (Rush job)",
    "1-2 weeks",
    "1-2 months",
    "3-6 months",
    "6+ months",
    "Flexible",
  ];

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
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <section
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Let's </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and
              create something amazing together. I'm here to help turn your
              vision into reality.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <section
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your project"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                  >
                    <option value="">When do you need this completed?</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">
                      ✅ Message sent successfully! I'll review your project
                      details and get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">
                      ❌ Failed to send message. Please ensure all required
                      fields are filled or email me directly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.action.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 block"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-xl">{info.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {info.title}
                        </h3>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                <p className="mb-6 opacity-90">
                  Need immediate assistance? Feel free to reach out directly via
                  email or phone. I typically respond within a few hours during
                  business days.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="mr-3">⏰</span>
                    <span>Response time: Usually within 4-6 hours</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">🌍</span>
                    <span>Timezone: EST (UTC-5)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">💬</span>
                    <span>Available for video calls by appointment</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Current Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">New Projects</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Consulting</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Rush Projects</span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                      Limited
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Last updated: January 2025
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
