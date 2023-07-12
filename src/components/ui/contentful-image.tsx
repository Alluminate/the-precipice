"use client"

import Image, { ImageProps } from 'next/image'

type ImageLoaderProps = {
  src: string
  width: number
  quality?: number
  root?: string
}

const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 60}`
}

const ContentfulImage = (props: ImageProps) => {
  return <Image loader={contentfulLoader} {...props} width={props.width || 1000} height={props.height || 500} alt={`Hero Image for ${props.alt}`} />
}

export { ContentfulImage };