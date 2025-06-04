export default function InstaSpotsLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      {...props}
    >
      <path d="M6 0L6 8" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M1 5L6 9L11 5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="bevel"
      />
      <circle cx="6" cy="14" r="2" fill="currentColor" />
    </svg>
  );
}
