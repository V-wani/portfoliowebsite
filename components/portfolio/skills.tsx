'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code2, Database, LineChart, Wrench, Server, PieChart, Terminal, Sparkles } from 'lucide-react'
import { Marquee } from '@/components/ui/marquee'

const skillCategories = [
  {
    title: 'Languages',
    icon: Terminal,
    skills: ['Python', 'JavaScript'],
    highlight: ['Python'],
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS'],
    highlight: ['React.js'],
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Firebase'],
    highlight: ['Node.js'],
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['SQL', 'NoSQL (Basic)', 'Firebase (Basic)', 'Supabase (Basic)'],
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Data Science & ML',
    icon: LineChart,
    skills: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Data Cleaning',
      'Data Analysis',
      'Exploratory Data Analysis (EDA)',
      'Scikit-Learn (Basic)',
    ],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Data Visualization',
    icon: PieChart,
    skills: ['Power BI'],
    color: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code'],
    color: 'from-slate-500/20 to-gray-500/20',
  },
]

// Split categories for dual row effect
const firstRow = skillCategories.slice(0, 4)
const secondRow = skillCategories.slice(4)

const SkillCard = ({ category }: { category: typeof skillCategories[0] }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="w-[300px] md:w-[350px] shrink-0"
  >
    <Card className="h-full border border-border bg-muted/30 backdrop-blur-xl overflow-hidden relative transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]">
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} blur-3xl opacity-50 pointer-events-none transition-opacity group-hover:opacity-100`} />
      
      <CardHeader className="pb-3 relative z-10">
        <CardTitle className="flex items-center gap-3 text-lg font-bold tracking-tight text-foreground">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <category.icon className="h-5 w-5" />
          </div>
          {category.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => {
            const isHighlighted = category.highlight?.includes(skill)
            return (
              <Badge
                key={skill}
                variant={isHighlighted ? "default" : "secondary"}
                className={`px-3 py-1 text-[10px] md:text-xs font-semibold rounded-full border transition-all duration-300 ${
                  isHighlighted 
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground border-primary/50" 
                  : "bg-foreground/5 hover:bg-foreground/10 text-foreground/70 border-border"
                }`}
              >
                {skill}
              </Badge>
            )
          })}
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background/50">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white/50 mb-4 inline-flex items-center gap-3">
            Technical Expertise
            <Sparkles className="w-6 h-6 text-blue-400" />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A continuous showcase of the technologies I master, designed for speed and scalability.
          </p>
        </motion.div>

        <div className="relative space-y-8">
          {/* Faded edges */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 md:w-48 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 md:w-48 bg-gradient-to-l from-background to-transparent" />

          {/* First Marquee Row */}
          <Marquee pauseOnHover className="[--duration:50s] [--gap:2rem]">
            {firstRow.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </Marquee>

          {/* Second Marquee Row (Reversed) */}
          <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:2rem]">
            {secondRow.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
