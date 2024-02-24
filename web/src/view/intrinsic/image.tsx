import { SectionImage } from "../../model/componentData";

// temel img componenti budur, ozunde hep bir img ve captiondir.

export const IntrinsicImage = (props: { img?: SectionImage, className?: string}) =>{
    const { img, className } = props;
     return <>
        <img
            src={img?.source}
            alt={img?.alternative}
            title={img?.title}
            className={className}
        >
            {/* {img.caption} */}
        </img>
    </>;    
}