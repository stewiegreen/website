import { Wordmark } from "@/components/logo";
import { FACEBOOK_URL, LOCATION } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-5 py-12 sm:px-6 md:flex-row">
        <Wordmark inverted size="lg" />
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-cream/75">
          <a href="#lessons" className="hover:text-cream">
            Lessons
          </a>
          <a href="#pricing" className="hover:text-cream">
            Pricing
          </a>
          <a href="#guitar" className="hover:text-cream">
            Guitar 2027
          </a>
          <a href="#about" className="hover:text-cream">
            About
          </a>
          <a href="#faq" className="hover:text-cream">
            FAQ
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream"
          >
            Facebook
          </a>
        </nav>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-center text-sm text-cream/50 sm:px-6 md:text-left">
          Beginner piano lessons · {LOCATION}
        </p>
      </div>
    </footer>
  );
}
