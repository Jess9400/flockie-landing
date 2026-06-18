// Single "New School" coral bird, extracted from the brand mark. Used as a
// decorative, animatable element in Style B. Colors can be overridden via props.

type BirdProps = {
  className?: string;
  body?: string;
  shadow?: string;
};

export default function Bird({
  className,
  body = "#FF6B4A",
  shadow = "#E0512C",
}: BirdProps) {
  return (
    <svg
      viewBox="0 0 40 34"
      className={className}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      {/* depth shadow */}
      <circle cx="20" cy="20" r="10.5" fill={shadow} />
      {/* body */}
      <circle cx="20" cy="17" r="10.5" fill={body} />
      {/* right wing */}
      <polygon
        points="30,14 36,17 30,20"
        fill={body}
        stroke={body}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* left wing */}
      <polygon
        points="11,15 1,10 12,24"
        fill={body}
        stroke={body}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* eye + catchlight */}
      <circle cx="24" cy="15" r="2.6" fill="#0A2545" />
      <circle cx="24.9" cy="14.1" r="0.9" fill="#fff" />
    </svg>
  );
}
