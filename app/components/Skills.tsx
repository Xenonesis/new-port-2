'use client';



import AnimatedSection from './AnimatedSection';
import { 
  SiC, 
  SiCplusplus, 
  SiPython, 
  SiNumpy, 
  SiPandas, 
  SiScikitlearn, 
  SiJavascript, 
  SiHtml5, 
  SiCss, 
  SiKalilinux,
  SiWireshark
} from 'react-icons/si';

const techIcons = [
  { Icon: SiC, name: 'C' },
  { Icon: SiCplusplus, name: 'C++' },
  { Icon: SiPython, name: 'Python' },
  { Icon: SiNumpy, name: 'Numpy' },
  { Icon: SiPandas, name: 'Pandas' },
  { Icon: SiScikitlearn, name: 'Scikit-learn' },
  { Icon: SiJavascript, name: 'JavaScript' },
  { Icon: SiHtml5, name: 'HTML5' },
  { Icon: SiCss, name: 'CSS3' },
  { Icon: SiKalilinux, name: 'Kali Linux' },
  { Icon: SiWireshark, name: 'Wireshark' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-20">
          <AnimatedSection className="md:w-1/3">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">Technical Stack</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="md:w-2/3">
            <div className="flex flex-wrap gap-12 md:gap-16">
              {techIcons.map((tech) => (
                <div key={tech.name} title={tech.name} className="group flex justify-center items-center">
                  <tech.Icon className="w-16 h-16 md:w-20 md:h-20 text-neutral-300 dark:text-neutral-700 transition-all duration-500 group-hover:text-black dark:group-hover:text-white group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg" />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
