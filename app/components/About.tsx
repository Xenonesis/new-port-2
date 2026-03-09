'use client';



export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3 fade-in">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">About Me</h2>
          </div>
          <div className="md:w-2/3 fade-in delay-150">
            <p className="text-3xl md:text-5xl font-light leading-tight mb-12 text-neutral-900 dark:text-white">
              Passionate about <span className="serif italic text-neutral-500 dark:text-neutral-400">intelligence</span> and <span className="serif italic text-neutral-500 dark:text-neutral-400">security</span>.
            </p>
            <div className="grid md:grid-cols-2 gap-12 text-lg font-light text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                I am a CSAIML student at GL Bajaj, driven by a passion for solving complex problems through Machine Learning and crafting intuitive frontend interfaces.
              </p>
              <p>
                My expertise spans predictive modeling, regression, and classification, complemented by a strong foundation in cybersecurity, networking, and web pentesting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
