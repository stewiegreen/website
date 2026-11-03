import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

const ENROLL_URL = "https://app.trynovamusic.com/enroll/215cdb8945694a5f87d9a252bec00f82";

export const Route = createFileRoute("/enroll")({
  head: () => ({
    meta: [
      { title: "Enroll | Muswellbrook Music" },
      {
        name: "description",
        content: "Enroll in beginner piano lessons at Muswellbrook Music, Muswellbrook NSW.",
      },
    ],
  }),
  component: EnrollPage,
});

function EnrollPage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <SiteHeader />

      <main className="flex flex-1 items-center justify-center px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Ready when you are</p>
          <h1 className="mt-4 font-display text-headline font-semibold">Enroll now.</h1>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted">
            Enrollment is handled securely through Nova Music, our lesson
            scheduling partner. Click below to fill out your enrollment
            details — it only takes a couple of minutes.
          </p>

          <Button asChild size="lg" className="mt-8 bg-teal text-cream hover:bg-teal-deep">
            <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer">
              Start enrollment
            </a>
          </Button>

          <p className="mt-4 text-sm text-muted">Opens in a new tab.</p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}