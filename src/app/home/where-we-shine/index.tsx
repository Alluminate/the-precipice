import { SubHeader } from '@/components/elements'
import { data } from './data'
import { WWSCard } from './wws-card'

export default function WhereWeShine() {
  return (
    <section className="container space-y-5">
      <SubHeader>
        Where We <span className='golden-italic'>Shine</span>
      </SubHeader>
      <div className="flex justify-center flex-wrap gap-8">
        {data.map(item => <WWSCard key={item.title} {...item} />)}
      </div>
    </section>
  )
}

