import { Card, CardContent } from '@/components/ui/card'
import { Award } from 'lucide-react'

const certifications = [
  {
    title: 'Generative AI Certification',
    issuer: 'Microsoft & LinkedIn',
  },
  {
    title: 'Oracle Cloud Infrastructure (OCI) 2025 Certified Generative AI Professional',
    issuer: 'Oracle Corporation',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Certifications</h2>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
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
