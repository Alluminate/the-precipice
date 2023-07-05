export interface StatCardProps {
  stat: string;
  description: string;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, description }) => {
  return (
    <div className='flex-[0_0_calc(33.33% - 40px)] m-5 space-y-4'>
      <h1 className='text-7xl sm:text-9xl'>{stat}</h1>
      <h6 className='text-lg sm:text-xl max-w-[260px]'>{description}</h6>
    </div>
  )
}
