"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Icon, type IconName } from "@/components/ui/Icon";
import { fadeUp } from "@/lib/animations";

type ServiceCardProps = {
  title: string;
  description: string;
  details: string;
  image: string;
  imageAlt: string;
  icon: IconName;
  href: string;
};

export function ServiceCard({
  title,
  description,
  details,
  image,
  imageAlt,
  icon,
  href,
}: ServiceCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareBackground = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(3,164,190,0.22), transparent 55%)`;

  const onMove = (event: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 10);
    rotateY.set((px - 0.5) * 12);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setHovered(false);
  };

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-primary/5 bg-surface shadow-[0_18px_40px_-28px_rgba(15,36,25,0.45)] will-change-transform"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glareBackground }}
        aria-hidden
      />

      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/25 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        <motion.div
          animate={hovered ? { scale: 1.08, rotate: -6 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-primary-dark shadow-md"
        >
          <Icon name={icon} className="h-5 w-5" />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-xl font-bold tracking-tight text-primary transition group-hover:text-primary-dark">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        <p
          className={`overflow-hidden text-sm leading-relaxed text-primary/80 transition-all duration-500 ${
            hovered ? "mt-3 max-h-24 opacity-100" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          {details}
        </p>
        <a
          href={href}
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3 group-hover:text-primary-dark"
        >
          Learn More
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/5 transition group-hover:bg-accent">
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </motion.article>
  );
}
