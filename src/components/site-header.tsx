import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { FACEBOOK_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/#lessons", label: "Lessons" },
  { href: "/#guitar", label: "Guitar 2027" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
  { href: "/enroll", label: "Enroll" },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 sm:h-24 sm:px-6">
        <a href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 text-[0.95rem] font-semibold lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-soft transition-colors duration-150 hover:text-teal"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            size="md"
            className="size-11 bg-[#1877F2] p-0 text-white hover:bg-[#145dbf]"
          >
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Adam on Facebook"
            >
              <FacebookIcon className="size-6" />
            </a>
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            asChild
            size="md"
            className="hidden size-11 bg-[#1877F2] p-0 text-white hover:bg-[#145dbf] sm:inline-flex"
          >
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Adam on Facebook"
            >
              <FacebookIcon className="size-6" />
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn("border-t border-line bg-paper px-5 py-4 lg:hidden")}
      >
        <nav className="flex flex-col gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-11 items-center rounded-md px-2 text-base font-semibold"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full sm:hidden">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Message Adam on Facebook
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}