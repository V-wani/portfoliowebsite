import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Certifications } from '@/components/portfolio/certifications'
import { Education } from '@/components/portfolio/education'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vaibhav Wani',
  url: 'https://vwani.in',
  image: 'https://vwani.in/og-image.png',
  jobTitle: ['AI/ML Enthusiast', 'Frontend Developer'],
  description:
    'Vaibhav Wani is an engineering student and AI/ML enthusiast focused on data analysis, computer vision, and modern web development.',
  email: 'mailto:vwani000@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/vaibhavwani17',
    'https://github.com/V-wani',
  ],
  knowsAbout: [
    'Machine Learning',
    'Computer Vision',
    'Data Analysis',
    'React',
    'Python',
    'Frontend Development',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vaibhav Wani Portfolio',
  url: 'https://vwani.in',
  description:
    'Personal portfolio of Vaibhav Wani - AI/ML Enthusiast & Frontend Developer',
  author: {
    '@type': 'Person',
    name: 'Vaibhav Wani',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
