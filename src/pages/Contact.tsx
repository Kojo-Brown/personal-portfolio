import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";

interface ContactChannel {
  title: string;
  value: string;
  action: string;
}

const contactChannels: ContactChannel[] = [
  {
    title: "Email",
    value: "brown.nicholas.darko@gmail.com",
    action: "mailto:brown.nicholas.darko@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "nicholasdarkobrown",
    action: "https://www.linkedin.com/in/nicholasdarkobrown/",
  },
  {
    title: "GitHub",
    value: "Kojo-Brown",
    action: "https://github.com/Kojo-Brown",
  },
  {
    title: "Location",
    value: "New Haven, CT, USA",
    action: "https://maps.google.com/?q=New+Haven,CT",
  },
];

const inputClasses =
  "w-full border-b border-line bg-transparent py-3 text-base text-ink placeholder:text-ink-soft/50 transition-colors duration-200 focus:border-ink focus:outline-none";

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        title: formData.subject || "Contact form submission from portfolio",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        from_email: formData.email,
        from_name: formData.name,
        subject: formData.subject || "Not specified",
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
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-36">
        <Reveal>
          <p className="label-mono mb-6">Contact</p>
          <h1 className="font-display max-w-3xl text-5xl font-medium leading-[1.04] tracking-tight md:text-7xl">
            Let's talk.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Whether it's a role, a project, or a question about my work — send
            a message and I'll get back to you.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl border-t border-line px-6 pb-24 pt-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_320px] lg:gap-24">
          {/* Form */}
          <Reveal>
            <div className="max-w-2xl space-y-10">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label-mono mb-2 block">
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
                  <label htmlFor="email" className="label-mono mb-2 block">
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
                <label htmlFor="subject" className="label-mono mb-2 block">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="label-mono mb-2 block">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me what you're working on or what you have in mind..."
                  rows={5}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-medium transition-colors duration-200 ${
                  isSubmitting
                    ? "cursor-not-allowed bg-ink/40 text-paper"
                    : "bg-ink text-paper hover:bg-accent"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>

              {submitStatus === "success" && (
                <p className="border-l-2 border-emerald-600 pl-4 text-sm text-ink-soft">
                  Message sent — thanks for reaching out. I'll get back to you
                  soon.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="border-l-2 border-accent pl-4 text-sm text-ink-soft">
                  Failed to send message. Please make sure all required fields
                  are filled, or email me directly.
                </p>
              )}
            </div>
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={150}>
            <div>
              <p className="label-mono mb-2">Elsewhere</p>
              <ul>
                {contactChannels.map((channel) => (
                  <li key={channel.title} className="border-b border-line">
                    <a
                      href={channel.action}
                      target={
                        channel.action.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        channel.action.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-baseline justify-between gap-4 py-4"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                        {channel.title}
                      </span>
                      <span className="inline-flex min-w-0 items-center gap-1.5 text-sm font-medium">
                        <span className="truncate transition-colors duration-200 group-hover:text-accent">
                          {channel.value}
                        </span>
                        <ArrowUpRight
                          size={13}
                          className="shrink-0 text-ink-soft opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <p className="label-mono mb-4">Availability</p>
                <p className="text-sm leading-relaxed text-ink-soft">
                  Open to opportunities — full-time roles, contract work, and
                  collaborations. Based in New Haven, CT (Eastern Time).
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
