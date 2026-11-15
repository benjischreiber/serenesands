interface Props {
  inverse?: boolean;
}

/** Text-only Superhost indicator; not an official Airbnb badge. */
export default function SuperhostBadge({ inverse = false }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${inverse
        ? "border-white/30 bg-ocean-950/30 text-white"
        : "border-sand-200 bg-sand-50 text-ocean-800"}`}
    >
      <span aria-hidden="true" className="text-sand-400">★</span>
      Hosted by Airbnb Superhosts
    </span>
  );
}
