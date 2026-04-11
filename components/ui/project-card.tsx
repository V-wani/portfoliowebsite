"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
  github?: string | null;
  live?: string | null;
  className?: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, title, description, imageUrl, tech, github, live }, ref) => {
    const primaryLink = live || github || "#";
    
    // Animation variants
    const cardVariants = {
      initial: { scale: 1, y: 0 },
      hover: {
        scale: 1.02,
        y: -5,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          'group relative flex h-[400px] w-full flex-col justify-between overflow-hidden',
          'rounded-3xl border border-border bg-muted/30 backdrop-blur-xl p-8 text-foreground shadow-2xl',
          'transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_50px_-10px_rgba(var(--primary),0.3)]',
          className
        )}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
      >
        {/* Content area */}
        <div className="z-20 flex flex-col h-full pointer-events-none">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight max-w-[80%]">
              {title}
            </h3>
            
            {/* Secondary Action Link (GitHub if Live exists) */}
            {live && github && (
              <a 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 border border-border hover:bg-foreground/10 hover:border-foreground/20 transition-all pointer-events-auto"
                title="View Source on GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground" />
              </a>
            )}
          </div>

          <p className="max-w-[70%] text-sm md:text-base text-muted-foreground font-medium mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {tech.map((t) => (
              <Badge 
                key={t} 
                variant="secondary" 
                className="bg-foreground/5 text-foreground/70 border-border text-[10px] uppercase tracking-wider font-bold px-3 py-1"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Floating Illustration in bottom-right */}
        <div className="absolute -bottom-8 -right-8 z-10 h-64 w-64 md:h-80 md:w-80 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-x-4 group-hover:-translate-y-4">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Primary Clickable Area */}
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Visit ${title} ${live ? 'live site' : 'GitHub'}`}
        >
          {/* Subtle "View" indicator shown on hover */}
          <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/50">
               {live ? 'Live Demo' : 'Source Code'}
               <ExternalLink className="h-3 w-3" />
             </div>
          </div>
        </a>

        {/* Bottom decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />
      </motion.div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export { ProjectCard };
