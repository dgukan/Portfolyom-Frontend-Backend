import { BaseProps } from "../../model/sectionProps";

export type HeaderProps = BaseProps & { size: 1 | 2 | 3 | 4 | 5 | 6; };

// ic header elementi
export const IntrinsicHeader = (props: {
    size: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
    children?: JSX.Element | string | (string | JSX.Element | undefined)[] | undefined;
}) => {
    const { size, className, children } = props;
    // cocuk yoksa fragment gonder
    if (!children) 
        return <></>;

    // cocuk varsa ve tipi string ise, direk yolla.
    // cocuk varsa tipi string degilse fragment icinde cocuklari yolla.
    const renderedChildren = (
        (typeof children === 'string' || children instanceof String) 
        ? children 
        : <>{children}</>
    )

    // cocuklar sozlugunu tanimla ve icinden verilen boyuta gore bir element sec
    // hepsinin icine onceden ayarladigimiz ve tum olasiliklari dusunerek kurdugumuz
    // karma cocuklar tipini yerlestirdik. (tip:
    // string | ((string | JSX.Element | undefined)[] & String) | JSX.Element
    // )
    return ({
        1: <h1 className={className}>{renderedChildren}</h1>,
        2: <h2 className={className}>{renderedChildren}</h2>,
        3: <h3 className={className}>{renderedChildren}</h3>,
        4: <h4 className={className}>{renderedChildren}</h4>,
        5: <h5 className={className}>{renderedChildren}</h5>,
        6: <h6 className={className}>{renderedChildren}</h6>
    }[size]
    );
};
