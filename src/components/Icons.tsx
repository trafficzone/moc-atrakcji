type IconProps = {
  className?: string;
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        d="M6.6 10.2c1.2 2.4 3.1 4.3 5.5 5.5l1.8-1.8c.3-.3.7-.4 1.1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .5 1 1v3c0 .6-.5 1-1 1C10.8 19.2 4.8 13.2 4.8 5.5c0-.6.5-1 1-1h3c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1L6.6 10.2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" strokeLinejoin="round" />
      <path d="M4.5 6.5 12 12.5l7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        d="M12 21.5s7-6.3 7-11.8a7 7 0 1 0-14 0c0 5.5 7 11.8 7 11.8Z"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.7" r="2.4" />
    </svg>
  );
}

export function TagIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        d="M11.6 3.5H5a1.5 1.5 0 0 0-1.5 1.5v6.6c0 .4.16.78.44 1.06l8.9 8.9c.58.58 1.53.58 2.12 0l6.6-6.6c.58-.58.58-1.53 0-2.12l-8.9-8.9a1.5 1.5 0 0 0-1.06-.44Z"
        strokeLinejoin="round"
      />
      <circle cx="8.2" cy="8.2" r="1.4" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden
    >
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}
