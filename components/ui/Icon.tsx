import type { ReactNode } from "react";

type IconName =
  | "star"
  | "home"
  | "leaf"
  | "shield"
  | "sparkles"
  | "droplets"
  | "truck"
  | "building"
  | "sink"
  | "sliders"
  | "users"
  | "clock"
  | "badge"
  | "play"
  | "check"
  | "arrow"
  | "instagram"
  | "facebook"
  | "google"
  | "menu"
  | "close"
  | "phone"
  | "mail"
  | "map"
  | "chevron";

const paths: Record<IconName, ReactNode> = {
  star: (
    <path
      d="M12 2.5l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.9L6.6 19l1-6L3.3 8.9l6-.9L12 2.5z"
      fill="currentColor"
      stroke="none"
    />
  ),
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z" />
    </>
  ),
  leaf: (
    <path d="M5 14c6-9 14-10 14-10s1 8-5 14c-3.5 3.5-8 3-9 0-1-2.5 0-4 0-4zm0 0c3 0 6-2 8-5" />
  ),
  shield: (
    <path d="M12 3 5 6v5c0 5 3.2 8.4 7 9.5 3.8-1.1 7-4.5 7-9.5V6l-7-3zm0 5v8" />
  ),
  sparkles: (
    <>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M18.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />
    </>
  ),
  droplets: (
    <>
      <path d="M8 14a4 4 0 1 0 8 0c0-3-4-8-4-8s-4 5-4 8z" />
      <path d="M7 8c0-1.5 1.5-3.5 2.5-4.5" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h11v10H3V7zm11 3h4l3 3v4h-7V10z" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="17.5" cy="18.5" r="1.5" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M4 21h16" />
      <path d="M9 8h2M9 12h2M9 16h2M15 21v-6h3v6" />
    </>
  ),
  sink: (
    <>
      <path d="M4 13h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3z" />
      <path d="M8 13V9a2 2 0 0 1 2-2h1" />
      <path d="M12 7V4" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="8" cy="17" r="2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 19a6 6 0 0 1 12 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15 19a4.5 4.5 0 0 1 6 0" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </>
  ),
  badge: (
    <>
      <path d="M12 3 9.5 5.5 6 5l.5 3.5L4 11l2.5 2.5L6 17l3.5-.5L12 19l2.5-2.5L18 17l-.5-3.5L20 11l-2.5-2.5L18 5l-3.5.5L12 3z" />
      <path d="m9.5 12 1.8 1.8 3.7-3.8" />
    </>
  ),
  play: <path d="M9 7.5v9l8-4.5-8-4.5z" />,
  check: <path d="m5 12 5 5L20 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1" />
    </>
  ),
  facebook: (
    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
  ),
  google: (
    <path d="M12 11v2.5h5.1A5.5 5.5 0 1 1 12 6.5a5.4 5.4 0 0 1 3.8 1.5l1.8-1.8A8 8 0 1 0 12 20a7.9 7.9 0 0 0 7.7-6H12z" />
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  phone: (
    <path d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5L16 12l4 1.5V17a2 2 0 0 1-2 2A14 14 0 0 1 5 5a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  map: (
    <>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  chevron: <path d="m7 10 5 5 5-5" />,
};

type IconsProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "h-5 w-5" }: IconsProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
