'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ui/project-card'
import { Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Smart Health Portal',
    description:
      'A comprehensive AI-driven health platform featuring BMI analysis, calorie intake calculators, and personalized fitness guidance.',
    tech: ['React', 'JavaScript', 'Firebase', 'Data Analysis'],
    github: 'https://github.com/V-wani/SmartHealthPortal',
    live: null,
    imageUrl: '/projects/smart-health.png',
  },
  {
    title: 'Luxury Jewellery Store',
    description:
      'An SEO-optimized e-commerce platform for Moksha Creation, showcasing jewellery and handcrafted products with a responsive design, smooth user experience, and scalable backend.',
    tech: ['React', 'PHP', 'MySQL', 'SEO Optimization'],
    github: null,
    live: 'https://mokshascreation.store',
    imageUrl: '/projects/jewellery-store.png',
  },
  {
    title: 'Heart Disease Prediction System',
    description:
      'A machine learning-powered healthcare web application that predicts heart disease risk using a KNN model with ~88% accuracy. Built with a FastAPI backend and a responsive Bootstrap frontend, it delivers real-time predictions using a complete preprocessing pipeline including feature scaling and encoding.',
    tech: ['Python', 'FastAPI', 'Scikit-learn', 'KNN', 'Pandas', 'NumPy', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/V-wani/heart-disease-ml-system',
    live: 'https://heart-disease-ml-system-9rts.vercel.app/',
    imageUrl: '/projects/heart-disease-ml.png',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="h-3 w-3" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white/50 mb-6">
            Creative Portfolio
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A selection of my most impactful projects, combining technical precision with high-end digital aesthetics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
