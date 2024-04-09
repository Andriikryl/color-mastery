import { IconProps } from "./IconProps.types";

export default function Compare({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M11 22.23V20H5.615q-.69 0-1.152-.462T4 18.385V5.615q0-.69.463-1.152T5.615 4H11V1.77h1v20.46zM5 18h6v-7.192zm9 2v-8l5 6V5.615q0-.23-.192-.423T18.385 5H14V4h4.385q.69 0 1.152.463T20 5.615v12.77q0 .69-.462 1.152T18.385 20z"
      />
    </svg>
  );
}
