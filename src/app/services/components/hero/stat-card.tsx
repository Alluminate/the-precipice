export interface StatCardProps {
  id: number;
  stat: string;
  description: string;
}

export const StatCard: React.FC<StatCardProps> = ({ id, stat, description }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={id * 100} className='flex-[0_0_calc(33.33% - 40px)] m-5 space-y-4'>
      <h1 className='text-7xl sm:text-9xl'>{stat}</h1>
      <h6 className='text-lg sm:text-xl max-w-[260px]'>{description}</h6>
    </div>
  )
}
