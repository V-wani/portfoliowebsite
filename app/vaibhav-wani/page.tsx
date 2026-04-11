'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Code2, 
  Layout, 
  ShoppingBag, 
  Search, 
  Palette, 
  BrainCircuit,
  ArrowRight,
  Target,
  Rocket,
  Zap,
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '@/components/portfolio/navbar'
import { Footer } from '@/components/portfolio/footer'

const services = [
  {
    title: 'Custom Website Development',
    description: 'High-performance, scalable web applications built with modern frameworks.',
    icon: Code2,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Business & Portfolio Websites',
    description: 'Clean, professional designs that establish a powerful online presence.',
    icon: Layout,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Scalable online stores with seamless user journeys and secure integration.',
    icon: ShoppingBag,
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'SEO Optimization',
    description: 'Data-driven strategies to improve visibility, ranking, and organic growth.',
    icon: Search,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric interfaces focused on engagement and conversion.',
    icon: Palette,
    color: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    title: 'AI Website Solutions',
    description: 'Integrating intelligent features and automation into modern web platforms.',
    icon: BrainCircuit,
    color: 'from-cyan-500/20 to-blue-500/20',
  },
]

const steps = [
  { id: '01', title: 'Understand the Problem', desc: 'Deep dive into business goals and user needs.' },
  { id: '02', title: 'Design with Purpose', desc: 'Crafting high-impact visuals and efficient workflows.' },
  { id: '03', title: 'Performance First', desc: 'Optimizing for speed, security, and scalability.' },
  { id: '04', title: 'Build for Growth', desc: 'Scalable solutions designed to evolve with your brand.' },
]

export default function VaibhavWaniHub() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-gradient-to-b from-primary/5 via-transparent to-transparent blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary">The Hub</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70"
          >
            Vaibhav Wani – AI Solutions Developer & Founder of Prime Web Tech
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Also known as <span className="text-primary font-bold">V Wani</span>, I build high-performance, scalable, and visually impactful digital solutions that help businesses grow in the modern digital ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Who is Section */}
      <section className="py-24 px-4 bg-muted/10 border-y border-border">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">Who is Vaibhav Wani?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Vaibhav Wani is a Computer Science engineering student, AI Developer, and tech-focused entrepreneur.
              </p>
              <p>
                He is the founder of <span className="text-foreground font-medium">Prime Web Tech</span>, a digital solutions initiative aimed at helping startups and businesses establish a strong and effective online presence.
              </p>
              <p>
                He bridges the gap between technology and business needs, focusing on machine learning systems, web development, and SEO optimization.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {[
              "Machine Learning systems",
              "Web development (frontend + backend)",
              "SEO and performance optimization"
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-muted/20 border border-border group hover:border-primary/30 transition-all">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground/80">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Prime Web Tech */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Prime Web Tech</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            A modern digital solutions initiative focused on delivering high-performance websites and scalable digital systems.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Target, text: "Build strong online presence" },
              { icon: Zap, text: "Improve visibility and credibility" },
              { icon: Rocket, text: "Generate leads and growth" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-muted/10 border border-border flex flex-col items-center gap-4">
                <item.icon className="h-8 w-8 text-primary" />
                <span className="text-sm font-semibold text-foreground/80">{item.text}</span>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 h-14 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-105 transition-all">
            <a href="https://primewebtech.online" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Visit Prime Web Tech
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What We Do</h2>
            <p className="text-muted-foreground">Core services tailored for business transformation.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full bg-background border-border hover:border-primary/30 transition-all group overflow-hidden relative shadow-sm">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <CardContent className="p-8 relative z-10">
                    <service.icon className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Approach</h2>
            <p className="text-muted-foreground">How we turn ideas into production-ready digital systems.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <span className="text-5xl md:text-6xl font-black text-foreground/5 absolute -top-10 left-0 group-hover:text-primary/10 transition-colors">
                  {step.id}
                </span>
                <div className="relative z-10 pt-4">
                  <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10 blur-3xl rounded-full translate-y-1/2 scale-150" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Mission</h2>
          <p className="text-2xl md:text-4xl font-medium italic text-foreground/90 leading-snug">
            "To build modern digital solutions that help businesses grow, scale, and succeed in the digital world."
          </p>
        </div>
      </section>

      {/* Work & Projects Section */}
      <section className="py-24 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Work & Projects</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            I specialize in building high-performance E-commerce platforms, advanced AI/ML systems, and scalable business websites optimized for the modern web.
          </p>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 hover:bg-muted/50 transition-all">
            <a href="/#projects" className="flex items-center gap-2">
              View Projects
              <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-12 tracking-tight text-foreground"
          >
            Let’s Build Something Meaningful
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-10 rounded-full hover:scale-105 transition-all">
              <a href="/#contact">Work With Me</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-10 rounded-full hover:bg-muted/50 transition-all">
              <a href="/#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
