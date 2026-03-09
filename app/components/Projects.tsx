'use client';

import { Project } from '../types/portfolio';
import ProjectCard from './ProjectCard';

const projects: Project[] = [
  {
    id: '1',
    number: '01',
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive analytics platform designed for high-volume retailers. Featuring real-time data visualization and inventory management.',
    tags: ['React', 'Tailwind', 'D3.js'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: '2',
    number: '02',
    title: 'Task Flow',
    description:
      'Collaborative project management redefined. Focuses on intuitive drag-and-drop interfaces and seamless team communication.',
    tags: ['Vue 3', 'Firebase', 'Pinia'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: '3',
    number: '03',
    title: 'AI Copywriter',
    description:
      'Harnessing the power of GPT-4 to generate compelling marketing copy in seconds. Built for scale and speed.',
    tags: ['Next.js', 'OpenAI', 'Stripe'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24 fade-up">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 mb-4">
            Selected Works
          </h2>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
