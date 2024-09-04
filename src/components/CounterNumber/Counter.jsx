// Counter.js
import React, { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

const Counter = ({ counttill }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const formatted = useTransform(rounded, (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k+`;
    } else {
      return `${value}+`;
    }
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      const animation = animate(count, counttill, { duration: 10 });
      return () => animation.stop();
    }
  }, [count, counttill, isInView]);

  return (
    <motion.div
      ref={ref}
      className="order-first text-7xl font-semibold tracking-tight text-white"
    >
      {formatted}
    </motion.div>
  );
};

export default Counter;
