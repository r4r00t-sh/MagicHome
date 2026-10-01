"use client";

import {
  useCallback,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "dark" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-primary-dark shadow-[0_10px_30px_-12px_rgba(118,188,33,0.55)] hover:shadow-[0_16px_40px_-10px_rgba(118,188,33,0.7)]",
  secondary:
    "bg-cyan text-primary-dark border border-cyan hover:brightness-95 hover:shadow-md",
  outline:
    "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/70",
  dark: "bg-primary text-white hover:bg-primary-dark hover:shadow-lg",
  ghost: "bg-transparent text-primary hover:bg-primary/5",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  magnetic?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  magnetic = variant === "primary" || variant === "dark",
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18 });
  const springY = useSpring(y, { stiffness: 260, damping: 18 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMove = useCallback(
    (event: MouseEvent) => {
      if (!magnetic || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left - rect.width / 2;
      const offsetY = event.clientY - rect.top - rect.height / 2;
      x.set(offsetX * 0.28);
      y.set(offsetY * 0.38);
    },
    [magnetic, x, y]
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  }, [x, y]);

  const classes = `btn-shine relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-[box-shadow,background-color,border-color,filter] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${className}`;

  const sharedProps = {
    className: classes,
    onMouseMove: handleMove,
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: reset,
    "aria-label": ariaLabel,
    whileTap: { scale: 0.96 },
    style: magnetic
      ? { x: springX, y: springY, scale: isHovering ? 1.04 : 1 }
      : undefined,
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        {...sharedProps}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      {...sharedProps}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
