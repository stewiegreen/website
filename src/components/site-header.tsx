import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { FACEBOOK_URL, PIANO_ENROLL_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#lessons", label: "Lessons" },
  { href: "#guitar", label: "Guitar 2027" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 sm:h-24 sm:px-6">
        <a href="#top" className="min-w-0" onClick={() => setOpen(false)}>
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
          <Button asChild>
            <a href={PIANO_ENROLL_URL} target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="md" className="hidden sm:inline-flex">
            <a href={PIANO_ENROLL_URL} target="_blank" rel="noopener noreferrer">
              Register
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
            <a href={PIANO_ENROLL_URL} target="_blank" rel="noopener noreferrer">
              Register for piano lessons
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
