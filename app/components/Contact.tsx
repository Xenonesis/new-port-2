'use client';



export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <div className="fade-in">
          <h2 className="text-[8vw] md:text-[6vw] font-medium tracking-tight leading-none mb-12 hover:text-neutral-500 transition-colors duration-500 cursor-default">
            <a href="mailto:officialprachi1211@gmail.com">Let's Talk</a>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-sm font-medium uppercase tracking-widest text-neutral-500">
            <a href="mailto:officialprachi1211@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">officialprachi1211@gmail.com</a>
            <span className="hidden md:block w-1 h-1 bg-neutral-300 rounded-full"></span>
            <a href="tel:+918923472349" className="hover:text-black dark:hover:text-white transition-colors">+91 8923472349</a>
            <span className="hidden md:block w-1 h-1 bg-neutral-300 rounded-full"></span>
            <a href="https://www.linkedin.com/in/prachi-upadhyay-926487301" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
            <span className="hidden md:block w-1 h-1 bg-neutral-300 rounded-full"></span>
            <a href="https://github.com/prachiupadhyay1211" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
