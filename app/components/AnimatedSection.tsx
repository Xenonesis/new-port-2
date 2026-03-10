'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  yOffset = 40 
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], 
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
