import { IconProps } from "./IconProps.types";

export default function Minus({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 256 256"
      color="white"
    >
      <path
        fill="currentColor"
        d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12"
      />
    </svg>
  );
}
