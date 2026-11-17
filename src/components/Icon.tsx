/** Ícones de traço fino desenhados à mão (24×24, traço 1.25). */
const paths = {
  badge: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m9.6 9 1.6 1.6L14.5 7.4" />
      <path d="M8.6 13.4 7.5 21l4.5-2.4 4.5 2.4-1.1-7.6" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.5c.6 4.2 2.3 5.9 6.5 6.5-4.2.6-5.9 2.3-6.5 6.5-.6-4.2-2.3-5.9-6.5-6.5 4.2-.6 5.9-2.3 6.5-6.5Z" />
      <path d="M18.5 15.5c.25 1.6.9 2.25 2.5 2.5-1.6.25-2.25.9-2.5 2.5-.25-1.6-.9-2.25-2.5-2.5 1.6-.25 2.25-.9 2.5-2.5Z" />
    </>
  ),
  hand: (
    <>
      <path d="M12 20.5s-7-4.1-7-9.3A3.9 3.9 0 0 1 12 9a3.9 3.9 0 0 1 7 2.2c0 5.2-7 9.3-7 9.3Z" />
      <path d="M12 9V3.5" />
      <path d="M9.5 5.5 12 3.5l2.5 2" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5.5-13.5 14-14 .2 8.8-5.6 14-14 14Z" />
      <path d="M5 19c3.2-4.4 6.4-7.4 9.8-9.6" />
    </>
  ),
  arrow: <path d="M4.5 12h15m-5.5-5.5L19.5 12 14 17.5" />,
  chat: (
    <>
      <path d="M4.2 19.8 5.3 16A8 8 0 1 1 8.4 19l-4.2.8Z" />
      <path d="M9 9.6c0 2.6 2.3 5 5 5l1.1-1.2-1.8-1-.8.7c-.9-.4-1.6-1.1-2-2l.7-.8-1-1.8L9 9.6Z" />
    </>
  ),
  menu: <path d="M3.5 8h17M3.5 16h17" />,
  close: <path d="m5.5 5.5 13 13m0-13-13 13" />,
  plus: <path d="M12 5v14M5 12h14" />,
  check: <path d="m4.5 12.5 4.8 4.5L19.5 7" />,
  pin: (
    <>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  phone: (
    <path d="M6.2 3.8h3l1.5 4-2 1.4a10.6 10.6 0 0 0 6.1 6.1l1.4-2 4 1.5v3a1.9 1.9 0 0 1-2 1.9C10.5 19.2 4.8 13.5 4.3 5.8a1.9 1.9 0 0 1 1.9-2Z" />
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  chevronLeft: <path d="M14.5 5.5 8 12l6.5 6.5" />,
  chevronRight: <path d="M9.5 5.5 16 12l-6.5 6.5" />,
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, size = 24, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
