import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium outline-none transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "border-accent bg-accent text-canvas shadow-[0_10px_24px_rgba(47,91,78,0.18)] hover:-translate-y-0.5 hover:bg-accent/92 hover:border-accent/90 hover:shadow-[0_14px_30px_rgba(47,91,78,0.22)] active:translate-y-0 active:shadow-[0_10px_24px_rgba(47,91,78,0.18)]",
  secondary:
    "border-line bg-card text-ink shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:-translate-y-0.5 hover:border-ink/20 hover:bg-white/70 hover:shadow-lift active:translate-y-0"
};

const sizes: Record<Size, string> = {
  md: "h-11",
  lg: "h-12 px-6 text-[15px]"
};

export function Button({
  className,
  size = "md",
  variant = "primary",
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant; size?: Size }) {
  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  href,
  size = "md",
  variant = "primary",
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
  variant?: Variant;
  size?: Size;
}) {
  return (
    <Link
      href={href}
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    />
  );
}
