'use client';



import AnimatedSection from './AnimatedSection';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <AnimatedSection>
          <h2 className="text-[8vw] md:text-[6vw] font-medium tracking-tight leading-none mb-12 hover:text-neutral-500 transition-colors duration-500 cursor-default">
            <a href="mailto:officialprachi1211@gmail.com">Let&apos;s Talk</a>
          </h2>
          <div className="flex flex-row justify-center items-center gap-12 md:gap-16">
            <a href="mailto:officialprachi1211@gmail.com" title="Email" className="group flex justify-center items-center">
              <FaEnvelope className="w-10 h-10 md:w-12 md:h-12 text-neutral-400 dark:text-neutral-500 transition-all duration-500 group-hover:text-black dark:group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-lg" />
            </a>
            <a href="tel:+918923472349" title="Phone" className="group flex justify-center items-center">
              <FaPhoneAlt className="w-9 h-9 md:w-10 md:h-10 text-neutral-400 dark:text-neutral-500 transition-all duration-500 group-hover:text-black dark:group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-lg" />
            </a>
            <a href="https://www.linkedin.com/in/prachi-upadhyay-926487301" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="group flex justify-center items-center">
              <FaLinkedin className="w-10 h-10 md:w-12 md:h-12 text-neutral-400 dark:text-neutral-500 transition-all duration-500 group-hover:text-black dark:group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-lg" />
            </a>
            <a href="https://github.com/prachiupadhyay1211" target="_blank" rel="noopener noreferrer" title="GitHub" className="group flex justify-center items-center">
              <FaGithub className="w-10 h-10 md:w-12 md:h-12 text-neutral-400 dark:text-neutral-500 transition-all duration-500 group-hover:text-black dark:group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-lg" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
