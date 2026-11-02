import { cn } from "@/lib/utils";

/** Piano-key M from the Muswellbrook Music wordmark. White keys are the background. */
export function PianoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      fill="currentColor"
    >
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
      />
      <rect x="33.5" y="8" width="5.5" height="84" />
      <rect x="61" y="8" width="5.5" height="84" />
      <rect x="25.5" y="8" width="21.5" height="52" />
      <rect x="53" y="8" width="21.5" height="52" />
    </svg>
  );
}

export function Wordmark({
  inverted = false,
  size = "md",
}: {
  inverted?: boolean;
  size?: "md" | "lg";
}) {
  return (
    <span
      className={cn(
        "wordmark",
        size === "lg" ? "wordmark-lg" : "wordmark-md",
        inverted ? "text-cream" : "text-ink",
      )}
      aria-label="Muswellbrook Music"
    >
      <PianoMark className="wordmark-mark" />
      <span className="wordmark-type">
        <span>uswellbrook</span>
        <span>usic</span>
      </span>
    </span>
  );
}
