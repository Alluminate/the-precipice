import { SubHeader } from '@/components/elements'
import { data } from './data'
import { CommunityCard } from './community-card'

export default function Community() {
  return (
    <div className='container space-y-5 grid place-items-center'>
      <SubHeader className=''>
        Join the <span className='golden-italic'>Community</span>
      </SubHeader>
      <div className='flex justify-center flex-wrap'>
        {data.map(item => <CommunityCard key={item.title} {...item} />)}
      </div>
    </div>
  )
}
