"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

type Metric = {
  value: number;
  /** ข้อความหลังตัวเลข เช่น "+" */
  suffix?: string;
  label: string;
};

function CountUp({
  value,
  suffix = "",
  active,
}: {
  value: number;
  suffix?: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduceMotion) {
      setCount(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      setCount(Math.round(eased * value));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, value, reduceMotion]);

  return (
    <span className="font-display text-5xl font-extrabold tracking-tight text-gradient-orange md:text-6xl">
      {count}
      {suffix}
    </span>
  );
}

function MetricCell({ metric, index }: { metric: Metric; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center px-6 py-8 text-center sm:py-10"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: easeOutExpo }}
    >
      <CountUp value={metric.value} suffix={metric.suffix} active={inView} />
      <p className="mt-2 max-w-[12rem] text-sm leading-snug text-kathin-muted">{metric.label}</p>
    </motion.div>
  );
}

type Props = {
  metrics: Metric[];
};

export default function ImpactMetrics({ metrics }: Props) {
  return (
    <motion.div
      className="kathin-card mt-6 overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
    >
      <div className="grid divide-y divide-[var(--kathin-border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {metrics.map((metric, i) => (
          <MetricCell key={metric.label} metric={metric} index={i} />
        ))}
      </div>
    </motion.div>
  );
}
