import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

// This is a Web3Forms "Access Key" — not your email address.
// It's designed to be public/visible in client code; it just tells
// Web3Forms which inbox to forward submissions to.
// Get yours free at https://web3forms.com (takes ~1 minute, no account needed).
const WEB3FORMS_ACCESS_KEY = "b58f4606-b58d-48b3-97e0-ea8bef62ee2d";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New enquiry from Muswellbrook Music website");
    formData.append("from_name", "Muswellbrook Music website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-cream p-8 text-center">
        <p className="font-display text-xl font-semibold text-ink">
          Thanks — your message is on its way!
        </p>
        <p className="mt-2 text-muted">
          I'll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {/* Honeypot spam trap — hidden from real visitors, bots often fill it in */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-teal"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-teal"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-teal"
          placeholder="Hi Adam, I'd love to ask about lesson availability for..."
        />
      </div>

      <Button type="submit" disabled={status === "loading"} className="mt-1 w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Send enquiry"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your message — please try again, or message on Facebook instead.
        </p>
      )}
    </form>
  );
}