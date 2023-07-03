import { Paragraph, SubHeader } from '@/components/elements'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'

export default function ThoriumRadiance() {
  return (
    <section className='container space-y-5'>
      <SubHeader>
        Thorium <span className='golden-italic'>Radiance</span>
      </SubHeader>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <div className="relative p-6 border border-secondary-foreground h-[350px] bg-thorium-rad-1 bg-cover bg-no-repeat">
          <div className='absolute bottom-6 space-y-2'>
            <h4 className='text-lg md:text-xl'>Thorium is Discovered</h4>
            <Paragraph>News • July 30, 2023</Paragraph>
            <Paragraph>Read Here <Icons.arrowRight className='inline text-[1em]' /></Paragraph>
          </div>
        </div>
        <div className="relative p-6 border border-secondary-foreground h-[350px] col-span-1 sm:col-span-2 bg-thorium-rad-2 bg-cover bg-no-repeat">
          <div className='absolute bottom-6 space-y-2 mx-auto left-0 right-0 text-center sm:text-left sm:mx-0 sm:left-6 sm:right-auto'>
            <SubHeader className='font-normal max-w-xl sm:max-w-md'>Automated + AI DeFi Trading Strategies</SubHeader>
            <Paragraph>Webinar • July 30, 2023</Paragraph>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <Button variant='outline' className='border-foreground'>Get Your Ticket <Icons.arrowRight className='inline text-[1em]' /></Button>
              <Paragraph className='text-sm md:text-sm'>Become a Speaker <Icons.arrowRight className='inline text-[1em]' /></Paragraph>
            </div>
          </div>
        </div>
        <div className="relative p-6 border border-secondary-foreground h-[350px] col-span-1 sm:col-span-2 bg-thorium-rad-3 bg-cover bg-no-repeat">
          <div className='absolute bottom-6 space-y-2 mx-auto left-0 right-0 text-center sm:text-left sm:mx-0 sm:left-6 sm:right-auto'>
            <SubHeader className='font-normal max-w-xl sm:max-w-md'>Thorium Presents: Convergence 2023</SubHeader>
            <Paragraph>Metaverse Conference • July 30, 2023</Paragraph>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <Button variant='outline' className='border-foreground'>Get Your Ticket <Icons.arrowRight className='inline text-[1em]' /></Button>
              <Paragraph className='text-sm md:text-sm'>Become a Speaker <Icons.arrowRight className='inline text-[1em]' /></Paragraph>
            </div>
          </div>
        </div>
        <div className="relative p-6 border border-secondary-foreground h-[350px] bg-thorium-rad-4 bg-cover bg-no-repeat">
          <div className='absolute bottom-6 space-y-2'>
            <h4 className='text-lg md:text-xl'>The Thorium Team Meets IRL</h4>
            <Paragraph>News • July 30, 2023</Paragraph>
            <Paragraph>Read Here <Icons.arrowRight className='inline text-[1em]' /></Paragraph>
          </div>
        </div>
      </div>
    </section>
  )
}
