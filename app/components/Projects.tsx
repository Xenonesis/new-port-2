'use client';

import { Project } from '../types/portfolio';
import ProjectCard from './ProjectCard';

const projects: Project[] = [
  {
    id: '1',
    number: '01',
    title: 'Pneumonia Detection ML',
    description: 'A machine learning system for detecting pneumonia from X-ray imaging using advanced deep learning classification techniques.',
    tags: ['Python', 'Deep Learning', 'Classification', 'Healthcare'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/prachiupadhyay1211/pneumonia-detection-ml',
  },
  {
    id: '2',
    number: '02',
    title: 'TB Visualization',
    description: 'Data analytics and visualization platform for Tuberculosis metrics, driving insights through data manipulation using Pandas and Numpy.',
    tags: ['Data Visualization', 'Pandas', 'Numpy', 'Data Science'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/prachiupadhyay1211/TB_Visualization',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 fade-in">
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
