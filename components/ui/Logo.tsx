import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Magic Home home"
    >
      <span
        className={`inline-flex items-center rounded-xl bg-white px-2 py-1 ${
          light ? "shadow-sm" : "ring-1 ring-primary/10"
        }`}
      >
        <Image
          src="/images/logo.png"
          alt="Magic Home Cleaning Services"
          width={900}
          height={386}
          priority
          className="h-9 w-auto sm:h-11"
        />
      </span>
    </Link>
  );
}
