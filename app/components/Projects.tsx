'use client';

import { Project } from '../types/portfolio';
import ProjectCard from './ProjectCard';

const projects: Project[] = [
  {
    id: '1',
    number: '01',
    title: 'Breast Cancer Detection System',
    description:
      'A machine learning classification model utilizing SVM and KNN to predict breast cancer from cytology Data. Implemented with Python and Pandas.',
    tags: ['Python', 'Machine Learning', 'Classification'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: '2',
    number: '02',
    title: 'Interactive Web Portfolio',
    description:
      'A responsive and visually stunning frontend portfolio showcasing smooth animations and user-centric design principles.',
    tags: ['JavaScript', 'HTML/CSS', 'Frontend'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: '3',
    number: '03',
    title: 'Vulnerability Analysis Report',
    description:
      'Conducted extensive web pentesting and brute force attack simulations using Crunch and Cewl to identify and patch security vulnerabilities.',
    tags: ['Cybersecurity', 'Pentesting', 'Networking'],
    liveUrl: '#',
    sourceUrl: '#',
  },
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
