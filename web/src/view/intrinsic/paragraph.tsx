import { ElementChildren } from "../../model/elementChildren";

export enum ParagraphStyle {
    Strong = 'strong',
    Stress = 'em',
    Regular = 'p',
}
export const IntrinsicParagraph = (props: { style: ParagraphStyle, children: ElementChildren, className?:string}) => {
    const { children, className, style } = props;
    const paragraph: {[key in ParagraphStyle]: JSX.Element} = {
        strong: <>
            <strong className={className}>{children}</strong>;
        </>,
        p: <>
            <p className={className}>{children}</p>
        </>,
        em: <>
            <em className={className}>{children}</em>
        </>,
    }

    return(paragraph[style]);
}
