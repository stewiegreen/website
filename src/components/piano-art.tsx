function hasBlackAfter(index: number) {
  const note = index % 7;
  return note !== 2 && note !== 6;
}

export function PianoKeyboard({
  className,
  keys = 14,
}: {
  className?: string;
  keys?: number;
}) {
  return (
    <div className={className} aria-hidden="true">
      <div className="piano-board">
        {Array.from({ length: keys }, (_, i) => (
          <div className="white-key" key={i}>
            {hasBlackAfter(i) && i < keys - 1 ? (
              <span className="black-key" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
