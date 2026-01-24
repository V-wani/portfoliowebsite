'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Brain } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const experiences = [
  {
    title: 'AI / ML Intern',
    company: 'Sun Fibo Technology Pvt. Ltd.',
    location: 'Pune, India',
    period: 'Jan 5, 2026 – Feb 5, 2026',
    icon: Brain,
    responsibilities: [
      'Worked on deep learning model repositories and project setups',
      'Performed repository cloning, environment configuration, and model compilation',
      'Assisted in object detection workflows for computer vision use cases',
      'Annotated video datasets to prepare training data for object detection models',
      'Gained hands-on exposure to AI model training pipelines and real-world ML workflows',
    ],
    tags: ['AI / ML', 'Computer Vision', 'Data Annotation'],
  },
  {
    title: 'Web Development Intern',
    company: 'Web Wide IT Solution LLP',
    location: 'Pune, India',
    period: 'June 2025 – July 2025',
    icon: Briefcase,
    responsibilities: [
      'Built responsive interfaces using React, Bootstrap, and JavaScript',
      'Improved performance and cross-device responsiveness of web applications',
      'Followed deployment-ready and SEO-friendly development practices',
      'Collaborated on real client projects in a team environment',
    ],
    tags: ['React', 'JavaScript', 'Responsive Design'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-muted-foreground">
            Industry exposure and hands-on learning
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: 'easeOut' 
              }}
            >
              <Card className="border-0 shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary w-fit"
                    >
                      <exp.icon className="h-6 w-6" />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {exp.company}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                      </div>

                      {exp.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {exp.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 0.1 + i * 0.05 
                            }}
                            className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
