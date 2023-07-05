import Link from 'next/link'
import { SubHeader } from '@/components/elements'
import { buttonVariants } from '@/components/ui/button'
import { calculateRange, cn } from '@/lib/utils'
import { BlogCard } from './blog-card'
import { Icons } from '@/components/icons'

export default function DevBlog() {
  return (
    <div className='container space-y-5'>
      <SubHeader>
        Dev <span className='golden-italic'>Blog</span>
      </SubHeader>
      <div className='grid grid-cols-1 gap-5'>
        {calculateRange(3).map((item, index) => <BlogCard key={index} />)}
      </div>
      <div className='flex justify-center'>
        <Link href='/blog' className={cn(buttonVariants({ variant: 'outline' }), 'gap-1 border-foreground')}>Read All <Icons.arrowRight size={'1em'} /></Link>
      </div>
    </div>
  )
}
