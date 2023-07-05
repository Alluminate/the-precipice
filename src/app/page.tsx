import Hero from './home/hero'
import ThoriumRadiance from './home/thorium-radiance'
import WhereWeShine from './home/where-we-shine'
import DevBlog from './home/dev-blog'
import Community from './home/community'

export default function Home() {
  return (
    <section className='space-y-20'>
      <Hero />
      <WhereWeShine />
      <ThoriumRadiance />
      <DevBlog />
      <Community />
    </section>
  )
}
