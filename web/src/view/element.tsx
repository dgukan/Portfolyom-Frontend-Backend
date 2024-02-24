import React from "react";
import { AnchorProps } from "../model/sectionProps";
import { DynamicElementType as ElementType } from "../model/elementType";
import { DynamicElementProps as ElementProps } from "../model/elementProps";
import { logDetails } from "./tools";
import { IntrinsicAnchor } from "./intrinsic/anchor";
import { ExtrinsicHeader } from "./extrinsic/header";
import { ExtrinsicParagraph, ParagraphProps } from "./extrinsic/paragraph";
import { ExtrinsicProps } from "../model/extrinsicProps";
import { SectionImage } from "../model/componentData";
import { ExtrinsicImage } from "./extrinsic/image";

export const DynamicElement = (props: ElementProps) => {
    const { model, as, useClass, config, children } = props;
    const className = (useClass && model.name) || undefined;

    // konsoldan takip edebilmek sorun cozebilmek icin
    logDetails(
        config.debug, 
        model,
        config, 
        as, 
        children
    );
    
    // "[key in Enum]: DegerTipi" 
    // yukardaki yapiyi kullanarak, kullanilabilecek anahtarlari
    // enumdakiler ile limitlemis olduk. artik rastgele string ile 
    // burdan birsey kullanmak istersen, hata alirsin.
    const Element: { [key in ElementType]: React.ReactElement } = {
        [ElementType.Section]: <>
            <section id={className} className={className}>
                {children}
            </section>
        </>,
        // daha komplike tiplerde iki derinlik seviyeler olusturduk
        // bu seviyelerin en dis olanina extrinsic, en ic olanina ise intrinsic dedik
        [ElementType.Header]: <>
            <ExtrinsicHeader config={config} className={className}>
                {children}
            </ExtrinsicHeader>
        </>,
        // basit tiplerde hep dogrudan elementin kendisini burda kullandik
        [ElementType.Article]: <>
            <article className={className}>
                {children}
            </article>
        </>,
        [ElementType.Main]: <>
            <main className={className}>
                {children}
            </main>
        </>,
        [ElementType.Aside]: <>
            <aside className={className}>
                {children}
            </aside>
        </>,
        [ElementType.Footer]: <>
            <footer className={className}>
                {children}
            </footer>
        </>,
        [ElementType.Paragraph]: <>
            <ExtrinsicParagraph config={config as ParagraphProps} className={className}>
                {children}
            </ExtrinsicParagraph>
        </>,
        [ElementType.Anchor]: <>
            <IntrinsicAnchor config={config as AnchorProps} className={className}>
                {children}
            </IntrinsicAnchor>
        </>,

        [ElementType.Image]: <>
            <ExtrinsicImage img={model.image as SectionImage} 
                config={config as ExtrinsicProps} 
                className={className}
            >
                {children} 
            </ExtrinsicImage>
        </>,
    };

    return Element[as];
};
