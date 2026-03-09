'use client';

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const skills = [
  { name: 'Programming', description: 'C, C++, Python, DSA' },
  { name: 'Machine Learning', description: 'Numpy, Pandas, SVM, KNN' },
  { name: 'ML Techniques', description: 'Classification, Regression' },
  { name: 'Frontend', description: 'HTML/CSS, JavaScript' },
  { name: 'Cybersecurity', description: 'Networking & Cloud' },
  { name: 'Pentesting', description: 'Web Pentesting, Brute Force' },
  { name: 'Security Tools', description: 'Crunch, Cewl, Steganography' },
];

export default function Skills() {
  const labelObserver = useIntersectionObserver();
  const contentObserver = useIntersectionObserver();

  return (
    <section id="skills" className="py-32 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-20">
          <div 
            ref={labelObserver.ref as React.RefObject<HTMLDivElement>}
            className={`md:w-1/3 fade-up ${labelObserver.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`}
          >
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">Technical Stack</h2>
          </div>
          <div 
            ref={contentObserver.ref as React.RefObject<HTMLDivElement>}
            className={`md:w-2/3 fade-up ${contentObserver.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out delay-150`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800 mb-4 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-500"></div>
                  <h3 className="text-lg font-medium mb-1 text-neutral-900 dark:text-white">{skill.name}</h3>
                  <p className="text-sm text-neutral-500">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
