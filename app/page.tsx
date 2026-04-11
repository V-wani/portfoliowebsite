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
  alternateName: 'V Wani',
  url: 'https://vwani.in',
  image: 'https://vwani.in/vaibhav-wani-ai-developer.jpg',
  jobTitle: 'AI Website Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Prime Web Tech',
    url: 'https://primewebtech.online',
  },
  description:
    'Vaibhav Wani (V Wani) is a Computer Science engineering student, AI Developer, and Founder of Prime Web Tech specialized in scalable AI solutions.',
  email: 'mailto:vwani000@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/vaibhavwani17',
    'https://github.com/V-wani',
    'https://twitter.com/vaibhavwani',
    'https://primewebtech.online',
  ],
  knowsAbout: [
    'AI Website Development',
    'Machine Learning',
    'Frontend Development',
    'React',
    'Python',
    'Digital Solutions',
    'SEO Optimization',
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Prime Web Tech',
  url: 'https://primewebtech.online',
  logo: 'https://vwani.in/logo.jpeg',
  description:
    'Prime Web Tech is a modern web development and digital solutions company focused on helping businesses build a strong and impactful online presence.',
  founder: {
    '@type': 'Person',
    name: 'Vaibhav Wani',
  },
  sameAs: [
    'https://primewebtech.online',
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
