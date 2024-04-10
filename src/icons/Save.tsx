import { IconProps } from "./IconProps.types";

export default function Save({ className, size = 34 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 15 15"
    >
      <path
        fill="none"
        stroke="currentColor"
        d="M4.5 14.5v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3m3 0h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h8.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V13.5a1 1 0 0 1-1 1Z"
      />
    </svg>
  );
}
