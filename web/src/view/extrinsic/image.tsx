import { SectionImage } from "../../model/componentData"
import { ElementChildren } from "../../model/elementChildren";
import { ExtrinsicProps } from "../../model/extrinsicProps"
import { BaseProps } from "../../model/sectionProps";
import { IntrinsicImage } from "../intrinsic/image";

export enum ImageType {
    Image = 'image',
    Figure = 'figure'
}
export type FigureProps = BaseProps & {
    src: string;
    alt: string;
    title: string;
};

// cunku aslina bakarsan, her figure bir dis imagedir
// her img bir temel imagedir.
export const ExtrinsicImage = (props: {config: ExtrinsicProps, img: SectionImage, children?: ElementChildren, className?:string}) => {
    const { img, className } = props;
    
    return (
        <figure className={className}>
            <IntrinsicImage img={img} className={className} >
                {/* {children} */}
            </IntrinsicImage>
             {/*
                    <figcaption>
                        {img.caption}
                    </figcaption>
                */}
        </figure>

    )  
}