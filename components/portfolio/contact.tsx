import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Linkedin, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-8">
          I am currently open to new opportunities. Feel free to reach out if you would like to
          connect or discuss potential collaborations.
        </p>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="mailto:vwani000@gmail.com" aria-label="Send email to Vaibhav Wani">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <a
                  href="https://www.linkedin.com/in/vaibhavwani17"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
