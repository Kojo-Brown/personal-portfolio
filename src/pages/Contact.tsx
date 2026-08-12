import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
    title: "LinkedIn",
    value: "nicholasdarkobrown",
    action: "https://www.linkedin.com/in/nicholasdarkobrown/",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    value: "Kojo-Brown",
    action: "https://github.com/Kojo-Brown",
    icon: Github,
  },
  {
    title: "Location",
    value: "New Haven, CT, USA",
    action: "https://maps.google.com/?q=New+Haven,CT",
    icon: MapPin,
  },
];

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
    <div className="mx-auto w-full max-w-5xl px-6">
      {/* Header */}
      <section className="pt-20 pb-12 md:pt-28">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Contact
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
          Whether it's a role, a project, or a question about my work — send a
          message and I'll get back to you.
        </p>
      </section>

      <section className="grid gap-6 pb-20 md:pb-24 lg:grid-cols-[1fr_340px]">
        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
            <CardDescription>
              Fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me what you're working on or what you have in mind..."
                  rows={6}
                />
              </div>

              <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>

              {submitStatus === "success" && (
                <p className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400">
                  Message sent — thanks for reaching out. I'll get back to you
                  soon.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="border-destructive/30 bg-destructive/10 text-destructive rounded-md border px-4 py-3 text-sm">
                  Failed to send message. Please make sure all required fields
                  are filled, or email me directly.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Elsewhere</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {contactChannels.map((channel) => (
                  <li key={channel.title}>
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
                      className="hover:bg-accent group -mx-2 flex items-center gap-3 rounded-md px-2 py-2 transition-colors"
                    >
                      <channel.icon className="text-muted-foreground size-4 shrink-0" />
                      <span className="min-w-0">
                        <span className="text-muted-foreground block text-xs">
                          {channel.title}
                        </span>
                        <span className="block truncate text-sm font-medium">
                          {channel.value}
                        </span>
                      </span>
                      <ArrowUpRight className="text-muted-foreground ml-auto size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Open to opportunities — full-time roles, contract work, and
                collaborations. Based in New Haven, CT (Eastern Time).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
