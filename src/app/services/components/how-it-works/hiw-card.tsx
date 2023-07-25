import { Separator } from "@/components/ui/separator";

export interface HIWCardProps {
  title: string;
  description: string;
}

export const HIWCard: React.FC<HIWCardProps> = ({ title, description }) => {
  return (
    <div>
      <div data-aos="fade-left" className='flex flex-col sm:flex-row justify-between items-start gap-4 py-4'>
        <h1 className='text-2xl w-64'>{title}</h1>
        <h6 className='text-lg max-w-[24rem]'>{description}</h6>
      </div>
      <Separator data-aos="fade-in" />
    </div>
  )
}