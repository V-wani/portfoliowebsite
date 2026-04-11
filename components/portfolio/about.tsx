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
                I am <span className="text-foreground font-semibold">Vaibhav Wani (V Wani)</span>, a Computer Science engineering student and an 
                <span className="text-primary font-semibold"> AI Developer and Tech Entrepreneur</span>, driven by a strong interest in building scalable and impactful digital solutions.
              </p>
              <p>
                I have hands-on experience in <span className="text-foreground font-semibold">Python, data analysis, and full-stack web development</span>, with practical knowledge of tools like 
                NumPy, Pandas, and modern frontend frameworks such as React. I enjoy working on real-world problems involving 
                data processing, machine learning workflows, and performance-driven web applications.
              </p>
              <p>
                During my internships, I gained exposure to <span className="text-foreground font-semibold">AI/ML pipelines, dataset preparation, and model experimentation</span>, 
                which helped me understand how intelligent systems are built and deployed in real-world environments. Alongside this, I have developed responsive, SEO-optimized websites focused on user experience and scalability.
              </p>
              <p>
                I am also the founder of <span className="text-foreground font-semibold font-mono">Prime Web Tech</span>, a growing digital solutions initiative focused on helping businesses build a strong and effective online presence. Through this, I work on creating 
                <span className="text-foreground font-semibold"> high-performance websites, SEO-driven platforms, and user-centric designs</span> that not only look professional but also deliver real business value.
              </p>
              <p>
                My approach combines <span className="text-foreground font-semibold">technical skills with a problem-solving mindset</span>, allowing me to bridge the gap between technology and business needs. I believe in continuous learning, practical implementation, and building solutions that create long-term impact.
              </p>
              <div className="space-y-2 mt-6">
                <p className="font-bold text-foreground">🚀 Currently, I am focused on:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Advancing my skills in <span className="text-primary">Artificial Intelligence and Machine Learning</span></li>
                  <li>Building scalable web and AI-based applications</li>
                  <li>Growing <span className="font-semibold">Prime Web Tech</span> into a full-fledged digital and AI solutions company</li>
                  <li>Working on projects that solve real-world problems</li>
                </ul>
              </div>
              <p className="mt-6 italic">
                I aim to evolve into a <span className="text-foreground font-semibold">high-level AI engineer and tech founder</span>, contributing to innovative products that make a difference at scale.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
