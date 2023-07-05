import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link';
import { Paragraph } from '@/components/elements';

export interface BlogCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

export const BlogCard: React.FC<Partial<BlogCardProps>> = ({
  imageUrl = '/home/dev-blog/blog-placeholder.png',
  title = 'TITLE',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim praesent elementum.',
  link = '/blog/1'
}) => {
  return (
    <Card className='bg-[#010101] '>
      <CardContent className='pt-6 flex flex-col sm:flex-row items-center gap-4'>
        <Image src={imageUrl} width={400} height={200} alt={title} className='border border-secondary-foreground' />
        <div className='space-y-5'>
          <h3 className='text-xl md:text-2xl font-bold'>{title}</h3>
          <Paragraph>{description}</Paragraph>
          <Link href={link} className='text-secondary-foreground'>Read More</Link>
        </div>
      </CardContent>
    </Card>
  );
}
