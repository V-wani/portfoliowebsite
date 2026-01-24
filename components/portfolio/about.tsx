import { Card, CardContent } from '@/components/ui/card'

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">About Me</h2>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an engineering student with hands-on experience in Python, data analysis, and
                frontend web development. My technical foundation spans across building responsive
                web applications and working with data-driven solutions.
              </p>
              <p>
                I have developed strong proficiency in NumPy, Pandas, Matplotlib, and Seaborn for
                data exploration and visualization. This analytical background complements my
                frontend development skills, enabling me to build applications that are both
                user-friendly and data-informed.
              </p>
              <p>
                Through industry exposure, I have gained practical experience with AI systems
                including computer vision and object detection. My focus remains on building
                responsive, deployment-ready web applications using React and modern frontend
                technologies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
