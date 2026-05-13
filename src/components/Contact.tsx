import { useRef, useState } from "react";
import { PROFILE } from "@/data/profile";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    emailjs
      .sendForm(
        PROFILE.emailjs.serviceId,
        PROFILE.emailjs.templateId,
        formRef.current!,
        PROFILE.emailjs.publicKey
      )
      .then(() => {
        toast({
          title: "Message sent",
          description: "Thanks for reaching out — I'll be in touch.",
        });
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Couldn't send",
          description: "Please try again, or email me directly.",
          variant: "destructive",
        });
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="section-padding border-t border-border"
      aria-labelledby="contact-title"
    >
      <div className="container-tight">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-16">
          {/* Left — headline + direct contact */}
          <div className="md:col-span-5">
            <div className="eyebrow mb-3">04 / Contact</div>
            <h2 id="contact-title" className="font-serif text-4xl md:text-6xl leading-[1.05]">
              Let's <em className="italic">talk.</em>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-sm">
              For project work, collaborations, or just a hello — pick whichever you prefer.
            </p>

            <ul className="mt-10 divide-y divide-border border-t border-b border-border">
              <li className="py-4 flex items-baseline justify-between gap-4">
                <span className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Email
                </span>
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="font-serif text-lg md:text-xl hover:italic transition-all"
                >
                  {PROFILE.contact.email}
                </a>
              </li>
              <li className="py-4 flex items-baseline justify-between gap-4">
                <span className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  LinkedIn
                </span>
                <a
                  href={PROFILE.contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg md:text-xl hover:italic transition-all"
                >
                  {PROFILE.contact.linkedin.handle}
                </a>
              </li>
              <li className="py-4 flex items-baseline justify-between gap-4">
                <span className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  GitHub
                </span>
                <a
                  href={PROFILE.contact.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg md:text-xl hover:italic transition-all"
                >
                  {PROFILE.contact.github.handle}
                </a>
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7 md:pl-8">
            <form ref={formRef} onSubmit={onSubmit} className="space-y-7">
              <div>
                <label
                  htmlFor="name"
                  className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground block mb-2"
                >
                  Your name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-foreground px-0 text-lg bg-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground block mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-foreground px-0 text-lg bg-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground block mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  required
                  className="rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-foreground px-0 text-lg bg-transparent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="rounded-none bg-foreground text-background hover:bg-foreground/85 mono text-xs uppercase tracking-[0.18em] px-8 py-6"
              >
                {submitting ? "Sending…" : "Send message →"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
