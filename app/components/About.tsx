'use client';



import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-20">
          <AnimatedSection className="md:w-1/3">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">About Me</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="md:w-2/3">
            <p className="text-3xl md:text-5xl font-light leading-tight mb-12 text-neutral-900 dark:text-white">
              Passionate about <span className="serif italic text-neutral-500 dark:text-neutral-400">intelligence</span> and <span className="serif italic text-neutral-500 dark:text-neutral-400">security</span>.
            </p>
            <div className="grid md:grid-cols-2 gap-12 text-lg font-light text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                I am a <span className="font-medium text-neutral-900 dark:text-neutral-100">CSAIML student at GL Bajaj</span>, driven by a passion for solving complex problems through <span className="font-medium text-neutral-900 dark:text-neutral-100">Machine Learning</span> and crafting intuitive <span className="font-medium text-neutral-900 dark:text-neutral-100">frontend interfaces</span>.
              </p>
              <p>
                My expertise spans <span className="font-medium text-neutral-900 dark:text-neutral-100">predictive modeling, regression, and classification</span>, complemented by a strong foundation in <span className="font-medium text-neutral-900 dark:text-neutral-100">cybersecurity, networking, and web pentesting</span>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
