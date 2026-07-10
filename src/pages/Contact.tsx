import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  CheckCircle2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/reveal";

interface ContactChannel {
  title: string;
  value: string;
  action: string;
  icon: LucideIcon;
}

const contactChannels: ContactChannel[] = [
  {
    title: "Email",
    value: "brown.nicholas.darko@gmail.com",
    action: "mailto:brown.nicholas.darko@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "203.747.6460",
    action: "tel:+12037476460",
    icon: Phone,
  },
  {
    title: "Location",
    value: "New Haven, CT, USA",
    action: "https://maps.google.com/?q=New+Haven,CT",
    icon: MapPin,
  },
  {
    title: "LinkedIn",
    value: "nicholasdarkobrown",
    action: "https://www.linkedin.com/in/nicholasdarkobrown/",
    icon: Linkedin,
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

const inputClasses =
  "w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 transition-colors duration-200 focus:border-ink focus:outline-none";

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  projectType: "",
  budget: "",
  timeline: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => setSubmitStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}

PROJECT DETAILS:
Subject: ${formData.subject || "Not specified"}
Project Type: ${formData.projectType || "Not specified"}
Budget Range: ${formData.budget || "Not specified"}
Timeline: ${formData.timeline || "Not specified"}

DETAILED MESSAGE:
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
        setFormData(emptyForm);
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

  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
        <Reveal>
          <p className="label-mono mb-6">Contact</p>
          <h1 className="font-display max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            Let's make it{" "}
            <span className="italic text-accent">happen</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Tell me about your project — scope, goals, constraints. I typically
            respond within 4–6 hours on business days.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-20">
          {/* Form */}
          <Reveal>
            <div className="rounded-lg border border-line bg-white p-8 md:p-10">
              <p className="label-mono mb-8">Send a message</p>

              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your project"
                    className={inputClasses}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-2 block text-sm font-medium"
                    >
                      Project type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={inputClasses}
                    >
                      <option value="">Select</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-medium"
                    >
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={inputClasses}
                    >
                      <option value="">Select</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="mb-2 block text-sm font-medium"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className={inputClasses}
                    >
                      <option value="">Select</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    rows={5}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-200 ${
                    isSubmitting
                      ? "cursor-not-allowed bg-ink/40 text-paper"
                      : "bg-ink text-paper hover:bg-ink/85"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  {!isSubmitting && (
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="flex items-start gap-3 rounded-md border border-emerald-200 bg-emerald-50 p-4">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    <p className="text-sm text-emerald-800">
                      Message sent successfully! I'll review your project
                      details and get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4">
                    <XCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-red-600"
                    />
                    <p className="text-sm text-red-800">
                      Failed to send message. Please make sure all required
                      fields are filled, or email me directly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Sidebar */}
          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="rounded-lg border border-line bg-white">
                {contactChannels.map((channel, index) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.title}
                      href={channel.action}
                      target={
                        channel.action.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        channel.action.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`group flex items-center gap-4 p-5 transition-colors duration-200 hover:bg-ink/[0.03] ${
                        index > 0 ? "border-t border-line" : ""
                      }`}
                    >
                      <Icon size={18} className="shrink-0 text-ink-soft" />
                      <div className="min-w-0">
                        <p className="text-xs text-ink-soft">{channel.title}</p>
                        <p className="truncate text-sm font-medium">
                          {channel.value}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={15}
                        className="ml-auto shrink-0 text-ink-soft opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      />
                    </a>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-lg bg-ink p-7 text-paper">
                <p className="label-mono !text-paper/50 mb-5">Availability</p>
                <div className="space-y-4">
                  {[
                    { label: "New projects", status: "Available", ok: true },
                    { label: "Consulting", status: "Available", ok: true },
                    { label: "Rush projects", status: "Limited", ok: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-paper/70">
                        {item.label}
                      </span>
                      <span className="flex items-center gap-2 text-sm">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            item.ok ? "bg-emerald-400" : "bg-amber-400"
                          }`}
                        />
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-2 border-t border-line-dark pt-5 text-sm text-paper/50">
                  <p>Response time: usually 4–6 hours</p>
                  <p>Timezone: EST (UTC−5)</p>
                  <p>Video calls by appointment</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
