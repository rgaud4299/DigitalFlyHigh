
import React, { useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';

const AnimatedSection = ({
  children,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6, ease: 'easeOut' },
  once = true,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <Motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={transition}
      className={className}
    >
      {children}
    </Motion.div>
  );
};

export default AnimatedSection;
