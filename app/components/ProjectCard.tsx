'use client';

import { Project } from '../types/portfolio';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';


interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection className="group relative grid md:grid-cols-12 gap-8 items-center">
      {/* Project Number */}
      <div className="md:col-span-2 text-neutral-300 dark:text-neutral-700 text-8xl font-light leading-none select-none">
        {project.number}
      </div>

      {/* Project Image */}
      <div
        className={`md:col-span-6 relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 overflow-hidden ${
          !isEven ? 'md:order-last' : ''
        }`}
      >
        <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 transition-transform duration-700 ease-out group-hover:scale-105 flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-90 dark:opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            /* Placeholder Icon */
            <svg
              className="w-24 h-24 text-neutral-400 dark:text-neutral-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div
        className={`md:col-span-4 flex flex-col justify-end h-full pl-0 md:pl-12 ${
          !isEven ? 'md:order-first' : ''
        }`}
      >
        <h3 className="text-3xl md:text-4xl font-medium mb-6">{project.title}</h3>
        <p className="text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-8">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-widest text-neutral-400 mb-10">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="flex gap-8">
          <a
            href={project.liveUrl}
            className="text-sm font-medium border-b border-transparent hover:border-black dark:hover:border-white transition-colors pb-1"
          >
            Live Demo
          </a>
          <a
            href={project.sourceUrl}
            className="text-sm font-medium border-b border-transparent hover:border-black dark:hover:border-white transition-colors pb-1"
          >
            Source Code
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
