import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Smart Health Portal',
    description:
      'A web-based health platform featuring BMI and calorie calculators, diet assistance, and fitness guidance with secure user authentication.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Firebase'],
    github: 'https://github.com/V-wani/SmartHealthPortal',
    live: null,
  },
  {
    title: 'E-Commerce & Jewellery Brand Website',
    description:
      'Production-ready jewellery brand website focused on SEO optimization, performance, security best practices, and mobile-first design. Built as a client project.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'SEO'],
    github: null,
    live: 'https://mokshascreation.store',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button asChild size="sm">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Site
                        </a>
                      </Button>
                    )}
                    {!project.github && !project.live && (
                      <span className="text-sm text-muted-foreground italic">
                        Client project - links not available
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
