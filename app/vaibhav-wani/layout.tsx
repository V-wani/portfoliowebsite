import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vaibhav Wani | AI Solutions Developer & Founder',
  description: 'The professional hub of Vaibhav Wani. AI Developer, Founder of Prime Web Tech, and creator of high-performance digital systems. Explore services in Web Dev, SEO, and AI.',
  keywords: ['Vaibhav Wani', 'V Wani', 'Prime Web Tech', 'AI Developer', 'SEO Expert', 'Web Development'],
  openGraph: {
    title: 'Vaibhav Wani – AI Solutions Developer & Founder',
    description: 'Explore the professional hub of Vaibhav Wani. Founding Prime Web Tech to build scalable, AI-driven digital solutions.',
    type: 'website',
    url: 'https://v-wani.com/vaibhav-wani', // Update with actual domain if known
  },
}

export default function VaibhavWaniLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
