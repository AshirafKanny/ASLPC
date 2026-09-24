"use client";

import { useId, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/animation/use-reduced-motion";

/** Must be a stable reference across the app's lifecycle — the provider throws if it changes. */
async function initParticlesEngine(engine: Engine) {
  await loadSlim(engine);
}

type SparklesCoreProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export function SparklesCore({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: SparklesCoreProps) {
  const [loaded, setLoaded] = useState(false);
  const reducedMotion = useReducedMotion();
  const generatedId = useId();

  if (reducedMotion) return null;

  async function particlesLoaded(container?: Container) {
    if (container) setLoaded(true);
  }

  return (
    <div className={cn("opacity-0 transition-opacity duration-1000 ease-out", loaded && "opacity-100", className)}>
      <ParticlesProvider init={initParticlesEngine}>
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: background || "transparent" },
            },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: false },
                onHover: { enable: false },
                resize: { enable: true },
              },
            },
            particles: {
              bounce: {
                horizontal: { value: 1 },
                vertical: { value: 1 },
              },
              collisions: { enable: false },
              color: { value: particleColor || "#ffffff" },
              move: {
                enable: true,
                speed: { min: 0.1, max: 1 },
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "out" },
              },
              number: {
                value: particleDensity || 120,
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  enable: true,
                  speed: speed || 4,
                  sync: false,
                  startValue: "random",
                  mode: "auto",
                },
              },
              size: {
                value: { min: minSize || 1, max: maxSize || 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </ParticlesProvider>
    </div>
  );
}
