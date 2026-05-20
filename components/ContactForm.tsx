"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Submit to /api/contact when wired (Landing-mode: log only)
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-accent/40 p-10 md:p-14 bg-bg-tertiary"
      >
        <CheckCircle2 size={32} className="text-accent mb-6" />
        <h3 className="font-display text-3xl md:text-4xl font-light mb-4">
          Thank you. We&apos;ll be in touch.
        </h3>
        <p className="body-prose text-base text-ink-body max-w-md">
          We read every message ourselves. Expect a reply within two working days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Your name" name="name" required />
        <Field label="Email" type="email" name="email" required />
      </div>
      <Field label="Company or publication (optional)" name="company" />
      <Field label="Project type" name="project" placeholder="Editorial, brand, portrait, wedding…" />
      <Field label="Timing" name="timing" placeholder="Approximate dates or season" />
      <FieldArea
        label="Tell us about the picture"
        name="message"
        placeholder="The brief, the subject, the room, the timing."
        required
      />

      <div className="pt-4">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 bg-accent text-bg px-8 py-5 text-sm font-medium tracking-wide uppercase hover:bg-accent/90 transition-colors"
        >
          <span>Send a note</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
        <p className="mt-4 text-xs font-mono text-ink-muted uppercase tracking-[0.2em]">
          We reply within two working days.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block group">
      <span className="block text-[11px] uppercase tracking-[0.25em] font-mono text-ink-muted mb-3 group-focus-within:text-accent transition-colors">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-ink-primary/30 pb-3 text-ink-primary placeholder-ink-muted focus:border-accent outline-none transition-colors text-base"
      />
    </label>
  );
}

function FieldArea({
  label,
  name,
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block group">
      <span className="block text-[11px] uppercase tracking-[0.25em] font-mono text-ink-muted mb-3 group-focus-within:text-accent transition-colors">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={5}
        className="w-full bg-transparent border-b border-ink-primary/30 pb-3 text-ink-primary placeholder-ink-muted focus:border-accent outline-none transition-colors resize-y text-base"
      />
    </label>
  );
}
