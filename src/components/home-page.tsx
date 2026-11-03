import {
	ArrowRight,
	Brain,
	Check,
	ChevronDown,
	Guitar,
	Music,
	UserRound,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { PianoKeyboard } from "@/components/piano-art";
import { Button } from "@/components/ui/button";
import { FACEBOOK_URL, GUITAR_EOI_URL, LOCATION, TEACHER_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

const BENEFITS = [
	{
		icon: Music,
		title: "Perfect for beginners",
		body: "No experience needed. Students learn the fundamentals step by step and build confidence as they go.",
	},
	{
		icon: UserRound,
		title: "One-on-one attention",
		body: "Every lesson is focused on one student, with teaching shaped around their pace and needs.",
	},
	{
		icon: Brain,
		title: "More than music",
		body: "Piano develops focus, creativity, perseverance and confidence — as well as musical ability.",
	},
];

const STEPS = [
	{
		n: "01",
		title: "Get in touch",
		body: "Message Adam on Facebook to ask about available lesson times.",
	},
	{
		n: "02",
		title: "Choose a time",
		body: "We'll find a regular weekly lesson time that works for you.",
	},
	{
		n: "03",
		title: "Start playing",
		body: "Come along, meet your teacher and begin learning at your own pace.",
	},
];

const INCLUDED = [
	"Kids, teens and adults welcome",
	"Complete beginners welcome",
	"25-minute weekly lessons",
	"Home studio in Muswellbrook",
];

const FAQS = [
	{
		q: "Does my child need previous piano experience?",
		a: "No. Lessons are specifically designed to welcome complete beginners.",
	},
	{
		q: "What should we have at home?",
		a: "A piano or good-quality keyboard is essential for practice. Ideally it should have 88 weighted, velocity-sensitive keys; 61 velocity-sensitive keys is the minimum recommended.",
	},
	{
		q: "How much should students practise?",
		a: "Aim for around 10–15 minutes each day. Younger children may benefit from a parent helping them establish a regular practice routine.",
	},
	{
		q: "What books will my child use?",
		a: "Beginners commonly start with Faber Piano Adventures or Alfred's All-in-One Course. Additional theory and repertoire books are introduced as students progress.",
	},
	{
		q: "Are you offering guitar lessons too?",
		a: "I'm planning a beginners group guitar session for 2027. Details are still being finalised, so please register your interest and I'll be in touch.",
	},
	{
		q: "What happens if we miss a lesson?",
		a: "Please provide at least 48 hours' notice if possible. A make-up lesson may be arranged when availability permits, but a replacement time cannot be guaranteed.",
	},
];

const GUITAR_POINTS = [
	"Group sessions for complete beginners",
	"Relaxed, friendly and encouraging",
	"Planned to start in 2027",
];

function FacebookLink({
	children,
	className,
	variant = "teal",
	size = "lg",
}: {
	children: ReactNode;
	className?: string;
	variant?: "teal" | "ink" | "cream" | "outline";
	size?: "md" | "lg";
}) {
	return (
		<Button asChild variant={variant} size={size} className={className}>
			<a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
				{children}
			</a>
		</Button>
	);
}

function EnrollLink({
	children,
	className,
	variant = "teal",
	size = "lg",
}: {
	children: ReactNode;
	className?: string;
	variant?: "teal" | "ink" | "cream" | "outline";
	size?: "md" | "lg";
}) {
	return (
		<Button
			asChild
			variant={variant}
			size={size}
			className={cn(
				"shadow-[0_0_36px_-6px_var(--color-teal)] transition-shadow hover:shadow-[0_0_44px_-4px_var(--color-teal)]",
				className,
			)}
		>
			<Link to="/enroll">
				{children}
				<ArrowRight className="size-5" strokeWidth={2.5} />
			</Link>
		</Button>
	);
}

function PriceCard({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"price-glow relative overflow-hidden rounded-2xl bg-cream px-8 py-9 text-ink sm:px-10 sm:py-11",
				className,
			)}
		>
			<div className="absolute inset-x-0 top-0 h-2 bg-teal" />
			<p className="eyebrow mt-1">Term tuition</p>
			<p className="mt-3 font-display text-5xl font-semibold tracking-tight text-teal sm:text-5xl">
				Only
			</p>
			<p className="font-display text-price font-semibold text-ink">
				<span className=" mt-2 text-6xl align-middle font-normal">$</span>
				300
			</p>
			<p className="mt-3 text-2xl font-semibold tracking-tight text-ink-soft">
				per term
			</p>
			<p className="mt-5 max-w-sm text-base text-muted">
				Weekly one-on-one piano lessons. Pay upfront, or split into two $150
				payments.
			</p>
			<FacebookLink className="mt-7 w-full" variant="ink">
				Message Adam on Facebook
			</FacebookLink>
		</div>
	);
}

export function HomePage() {
	return (
		<main id="top">
			{/* Top banner for Guitar 2027 */}
			<a
				href="#guitar"
				className="group flex items-center justify-center gap-2 bg-sage px-5 py-3 text-center text-sm font-semibold text-ink transition-colors duration-150 hover:bg-sage-deep sm:text-base"
			>
				<Guitar className="size-5 shrink-0 text-teal" strokeWidth={2} />
				<span>New for 2027: beginners group guitar — register your interest</span>
				<ArrowRight className="size-4 shrink-0 text-teal transition-transform duration-150 group-hover:translate-x-0.5" />
			</a>

			{/* Hero */}
			<section className="hero-wash relative overflow-hidden bg-ink text-cream">
				<div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 pb-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-16 lg:pb-12">
					<div>
						<p className="eyebrow text-sage">
							{LOCATION} · One-on-one lessons
						</p>
						<h1 className="mt-5 font-display text-display font-semibold text-cream">
							Give your child a skill they'll{" "}
							<em className="text-teal italic">love for life.</em>
						</h1>
						<p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75 sm:text-xl">
							Friendly, encouraging piano lessons for complete beginners —
							kids, teens and adults. Learn at your own pace in a relaxed home
							studio with a teacher who wants you to enjoy making music.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
							<EnrollLink variant="teal">Enroll Now</EnrollLink>
						</div>
						<ul className="mt-8 flex flex-col gap-3 text-lg font-semibold text-cream/80 sm:flex-row sm:flex-wrap sm:gap-x-6">
							{[
								"Complete beginners welcome",
								"Kids & adults",
								"25-minute weekly lessons",
							].map((item) => (
								<li key={item} className="flex items-center gap-2">
									<Check className="size-5 text-sage" strokeWidth={2.5} />
									{item}
								</li>
							))}
						</ul>
					</div>
					<PriceCard className="relative z-10 mx-auto w-full max-w-md lg:max-w-none" />
				</div>
				<PianoKeyboard className="piano-flush" keys={21} />
			</section>

			{/* Teal strip */}
			<section className="bg-teal text-cream">
				<div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 sm:px-6 md:flex-row md:items-center md:py-20">
					<div>
						<p className="eyebrow text-sage">Learn piano</p>
						<p className="mt-3 font-display text-headline font-semibold">
							Love music.
							<br />
							Build confidence.
						</p>
					</div>
					<p className="max-w-md text-lg leading-relaxed text-cream/80">
						A relaxed place to start, right here in Muswellbrook. One lesson a
						week. A little practice. A lot of progress.
					</p>
				</div>
			</section>

			{/* Lessons / benefits */}
			<section id="lessons" className="scroll-mt-24 px-5 py-20 sm:px-6 sm:py-24">
				<div className="mx-auto max-w-6xl">
					<div className="mx-auto max-w-3xl text-center">
						<p className="eyebrow">Why families choose Muswellbrook Music</p>
						<h2 className="mt-4 font-display text-headline font-semibold">
							Learning piano should feel exciting — not intimidating.
						</h2>
						<p className="mt-5 text-lg text-muted">
							The first lesson can be the beginning of a skill your child enjoys
							for years.
						</p>
					</div>
					<div className="mt-14 grid gap-5 md:grid-cols-3">
						{BENEFITS.map((item) => (
							<article
								key={item.title}
								className="rounded-xl bg-cream p-8 shadow-card sm:p-9"
							>
								<div className="mb-6 flex size-16 items-center justify-center rounded-lg bg-sage text-teal">
									<item.icon className="size-8" strokeWidth={1.75} />
								</div>
								<h3 className="font-sans text-2xl font-semibold tracking-tight">
									{item.title}
								</h3>
								<p className="mt-3 text-lg leading-relaxed text-muted">
									{item.body}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Guitar 2027 EOI */}
			<section
				id="guitar"
				className="scroll-mt-24 bg-teal px-5 py-20 text-cream sm:px-6 sm:py-24"
			>
				<div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
					<div>
						<p className="eyebrow text-sage">
							Coming in 2027 · Expression of interest
						</p>
						<h2 className="mt-4 font-display text-headline font-semibold">
							Beginners group guitar.
						</h2>
						<p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
							I'm planning to start a beginners group guitar session in 2027. If
							you or your child would like to learn guitar in a relaxed, friendly
							group, let me know — your interest helps me decide on session times
							and how many groups to run.
						</p>
						<ul className="mt-8 grid gap-3 text-lg font-semibold">
							{GUITAR_POINTS.map((item) => (
								<li key={item} className="flex items-start gap-3">
									<Check
										className="mt-1 size-5 shrink-0 text-sage"
										strokeWidth={2.5}
									/>
									{item}
								</li>
							))}
						</ul>
						<p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70">
							Days, times and pricing are still to be confirmed. Registering your
							interest doesn't commit you to anything — I'll be in touch once
							details are settled.
						</p>
					</div>

					<div className="rounded-2xl bg-cream px-8 py-9 text-ink shadow-card sm:px-10 sm:py-11">
						<div className="flex size-14 items-center justify-center rounded-lg bg-sage text-teal">
							<Guitar className="size-7" strokeWidth={1.75} />
						</div>
						<p className="eyebrow mt-6">Register your interest</p>
						<h3 className="mt-2 font-sans text-2xl font-semibold tracking-tight">
							Fill in the short form
						</h3>
						<p className="mt-3 text-base leading-relaxed text-muted">
							It only takes a minute. Tell me who the guitar sessions are for and
							I'll be in touch once days, times and pricing are confirmed.
						</p>
						<Button asChild size="lg" className="mt-7 w-full">
							<a
								href={GUITAR_EOI_URL}
								target="_blank"
								rel="noopener noreferrer"
							>
								Register your interest
							</a>
						</Button>
						<p className="mt-4 text-center text-sm text-muted">
							Questions? You can also{" "}
							<a
								href={FACEBOOK_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="font-semibold text-teal underline underline-offset-2"
							>
								message Adam on Facebook
							</a>
							.
						</p>
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section
				id="pricing"
				className="scroll-mt-24 bg-ink py-20 text-cream sm:py-24"
			>
				<div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
					<div>
						<p className="eyebrow text-sage">Simple, straightforward pricing</p>
						<h2 className="mt-4 font-display text-headline font-semibold">
							One lesson a week. A little practice. A lot of progress.
						</h2>
						<p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/72">
							25-minute weekly lessons make it manageable for busy families while
							giving students the consistency they need to improve.
						</p>
						<ul className="mt-8 grid gap-3 text-lg font-semibold">
							{INCLUDED.map((item) => (
								<li key={item} className="flex items-start gap-3">
									<Check
										className="mt-1 size-5 shrink-0 text-sage"
										strokeWidth={2.5}
									/>
									{item}
								</li>
							))}
						</ul>
						<EnrollLink className="mt-9" variant="teal">
							Enroll Now
						</EnrollLink>
					</div>
					<PriceCard />
				</div>
			</section>

			{/* Getting started */}
			<section className="px-5 py-20 sm:px-6 sm:py-24">
				<div className="mx-auto max-w-6xl">
					<div className="mx-auto max-w-3xl text-center">
						<p className="eyebrow">Getting started</p>
						<h2 className="mt-4 font-display text-headline font-semibold">
							It's easier than you think.
						</h2>
						<p className="mt-5 text-lg text-muted">
							No auditions. No previous experience. Just a willingness to learn.
						</p>
					</div>
					<div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
						{STEPS.map((step) => (
							<div key={step.n}>
								<p className="font-display text-6xl leading-none font-semibold text-teal/25">
									{step.n}
								</p>
								<h3 className="mt-3 font-sans text-2xl font-semibold tracking-tight">
									{step.title}
								</h3>
								<p className="mt-2 text-lg leading-relaxed text-muted">
									{step.body}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About */}
			<section id="about" className="scroll-mt-24 bg-cream py-20 sm:py-24">
				<div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
					<div className="relative min-h-96 overflow-hidden rounded-2xl">
						<img
							src="/adam-portrait.png"
							alt={`${TEACHER_NAME}, piano teacher at Muswellbrook Music`}
							className="h-full min-h-96 w-full object-cover"
						/>
					</div>
					<div>
						<p className="eyebrow">A friendly local studio</p>
						<h2 className="mt-4 font-display text-headline font-semibold">
							Meet {TEACHER_NAME.split(" ")[0]}
						</h2>
						<div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
							<p>
								Hi, I'm Adam. I teach beginner piano to children and adults from
								my home studio in Muswellbrook.
							</p>
							<p>
								My aim is simple: to make learning piano approachable,
								encouraging and enjoyable. Students learn the fundamentals while
								developing the confidence to actually sit down and play.
							</p>
							<p>
								Whether you've always wanted your child to learn piano or you're
								an adult who's finally decided to give it a go, you're welcome
								here.
							</p>
						</div>
						<p className="mt-8 font-display text-3xl text-ink italic">
							— {TEACHER_NAME}
						</p>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section id="faq" className="scroll-mt-24 px-5 py-20 sm:px-6 sm:py-24">
				<div className="mx-auto max-w-3xl">
					<div className="text-center">
						<p className="eyebrow">Good to know</p>
						<h2 className="mt-4 font-display text-headline font-semibold">
							Questions parents often ask.
						</h2>
					</div>
					<div className="mt-12 divide-y divide-line border-y border-line">
						{FAQS.map((item, index) => (
							<details
								key={item.q}
								className="group py-5"
								open={index === 0}
							>
								<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
									{item.q}
									<ChevronDown className="size-5 shrink-0 text-teal transition-transform duration-150 group-open:rotate-180" />
								</summary>
								<p className="mt-3 pr-8 text-base leading-relaxed text-muted">
									{item.a}
								</p>
							</details>
						))}
					</div>
				</div>
			</section>

			{/* Contact / Send an enquiry */}
			<section
				id="contact"
				className="scroll-mt-24 bg-cream px-5 py-20 sm:px-6 sm:py-24"
			>
				<div className="mx-auto max-w-2xl">
					<div className="text-center">
						<p className="eyebrow">Get in touch</p>
						<h2 className="mt-4 font-display text-headline font-semibold">
							Send an enquiry.
						</h2>
						<p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted">
							Prefer not to use Facebook? Send a message here instead and I'll
							get back to you as soon as I can.
						</p>
					</div>
					<div className="mt-12">
						<ContactForm />
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="bg-sage px-5 py-20 sm:px-6 sm:py-24">
				<div className="mx-auto max-w-3xl text-center">
					<p className="eyebrow text-teal-deep">Ready when you are</p>
					<h2 className="mt-4 font-display text-headline font-semibold text-ink">
						Maybe this is the term your child discovers they love piano.
					</h2>
					<p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
						Places are limited so every student receives genuine one-on-one
						attention. Enroll below to secure your spot for the coming term.
					</p>
					<EnrollLink className="mt-8" variant="teal">
						Enroll Now
					</EnrollLink>
				</div>
			</section>
		</main>
	);
}
