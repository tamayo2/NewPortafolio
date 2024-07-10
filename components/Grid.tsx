import { gridItems } from './data'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid >
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
         <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid