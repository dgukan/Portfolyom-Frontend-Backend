import { ElementChildren } from "../../model/elementChildren";
import { BaseProps } from "../../model/sectionProps";
import { IntrinsicParagraph, ParagraphStyle } from "../intrinsic/paragraph";

export type ParagraphProps = BaseProps & { style: ParagraphStyle  };

export const ExtrinsicParagraph = (params: {config: ParagraphProps, className?: string, children: ElementChildren}) =>  {
    const { config, className, children } = params;
    
    // TODO: burada gelecekte code gibi ozel taglar gelecektir
    // cunku aslina bakarsan, code taki sadece paragrafin cevresine girerek (bir dis paragraf olarak)
    // ic paragrafin gorselini degistirir. bu yuzden, bu paragraf componenti, ozel taglar icin de kullanilabilir.
    // code, pre ve samp gibi taglarin, farklarini anlayarak, temalastirilmis bir
    //sozluk yaratabiliriz. Bu sozlugu burda ExtrinsicParagraph olarak degerlendirebiliriz.
    
    return (
        <IntrinsicParagraph style={config.style} className={className}>
            {children}
        </IntrinsicParagraph>
    )
}