'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Brain, Sparkles, ChevronLeft } from 'lucide-react'

const experiences = [
  {
    id: 1,
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
    color: 'from-blue-500/10 to-indigo-500/10',
  },
  {
    id: 2,
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
    color: 'from-cyan-500/10 to-blue-500/10',
  },
]

interface ShuffleCardProps {
  handleShuffle: () => void
  experience: typeof experiences[0]
  position: string
}

function ShuffleCard({ handleShuffle, experience, position }: ShuffleCardProps) {
  const dragRef = React.useRef(0)
  const isFront = position === "front"

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : "1"
      }}
      animate={{
        rotate: position === "front" ? "0deg" : "3deg",
        x: position === "front" ? "0%" : "5%",
        y: position === "front" ? "0%" : "2%",
        scale: position === "front" ? 1 : 0.98,
        opacity: position === "front" ? 1 : 0.4
      }}
      drag={isFront ? "x" : false}
      dragElastic={0.35}
      dragConstraints={{ left: 0, right: 0 }}
      onDragStart={(e: any) => {
        dragRef.current = e.clientX || e.touches?.[0]?.clientX
      }}
      onDragEnd={(e: any) => {
        const clientX = e.clientX || e.changedTouches?.[0]?.clientX
        if (dragRef.current - clientX > 100) {
          handleShuffle()
        }
        dragRef.current = 0
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`absolute left-0 top-0 h-[480px] w-full max-w-[320px] md:max-w-[450px] select-none rounded-3xl border border-border bg-muted/30 backdrop-blur-2xl p-6 shadow-2xl ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${experience.color} blur-3xl opacity-50 pointer-events-none`} />
      
      <div className="relative h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            <experience.icon className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight leading-tight truncate">
              {experience.title}
            </h3>
            <p className="text-primary font-medium text-xs md:text-sm truncate">
              {experience.company}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 text-[10px] md:text-xs text-muted-foreground font-medium">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border">
            <MapPin className="h-3 w-3" />
            {experience.location}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border">
            <Calendar className="h-3 w-3" />
            {experience.period}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar focus:outline-none">
          <ul className="space-y-3">
            {experience.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80 text-xs md:text-sm leading-relaxed">
                <span className="mt-2 h-1 w-1 rounded-full bg-primary/50 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border">
          {experience.tags.map((tag, i) => (
            <span key={i} className="px-2 py-0.5 rounded-lg bg-primary/5 text-primary text-[10px] uppercase tracking-wider font-bold">
              {tag}
            </span>
          ))}
        </div>

        {isFront && (
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">
            <ChevronLeft className="h-3 w-3 animate-pulse" />
            Swipe Left to Shuffle
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function Experience() {
  const [positions, setPositions] = React.useState(["front", "back"])

  const handleShuffle = () => {
    setPositions((prev) => {
        const newPositions = [...prev]
        newPositions.unshift(newPositions.pop()!)
        return newPositions
    })
  }

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="h-3 w-3" />
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white/50">
            Professional Experience
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
            Interactive timeline of my technical growth and professional contributions.
          </p>
        </motion.div>

        <div className="flex justify-center items-center min-h-[550px]">
          <div className="relative h-[480px] w-full max-w-[320px] md:max-w-[450px]">
            {experiences.map((experience, index) => (
              <ShuffleCard
                key={experience.id}
                experience={experience}
                handleShuffle={handleShuffle}
                position={positions[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
