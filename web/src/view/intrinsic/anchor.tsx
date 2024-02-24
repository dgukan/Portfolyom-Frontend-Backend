import { ElementChildren } from "../../model/elementChildren";
import { AnchorProps  } from "../../model/sectionProps";
import { IntrinsicImage } from "./image";

// temel anchor componenti budur, ozunde hep bir a ve hep icindeki img olacak.
// TODO: intrinsic image yerine extrinsic image kullanma secenegi ver.
export const IntrinsicAnchor = (params: {config: AnchorProps, className?:string, children: ElementChildren }) => {
    const { config, className, children } = params;
    return (
    <a
        target="_blank"
        rel="noreferrer"
        href={config?.href} className={className}
    >
        {children}
        {config.img && (
            <IntrinsicImage
                img={{source: config.img.src, alternative: config.img.alt, title: config.img.alt}}
                className={className}
            >
                {/* {config.img.caption} */}
            </IntrinsicImage>
        )}
    </a>
)}