import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Education</h2>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">
                  B.Tech in Computer Science
                </h3>
                <p className="text-muted-foreground">
                  Zeal College of Engineering and Research, Pune
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  CGPA: <span className="font-medium text-foreground">9.2 / 10.0</span> (First Year)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
