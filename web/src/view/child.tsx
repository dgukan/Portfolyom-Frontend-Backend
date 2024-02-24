import { Section } from "../model/componentData";
import { DynamicElementType } from "../model/elementType";
import { Child, Config, PropsUnion } from "../model/sectionProps";
import { DynamicElement } from "./element";

export const DynamicChild = ({
    element,
    model,
    parentConfig
}: {
    element: Child<PropsUnion> | string;
    model: Section;
    parentConfig: Config<PropsUnion>;
}): JSX.Element => {
    // string ise dogrudan yolla gitsin demek ki component degil bu cocuk sadece bir yazi
    if (typeof element === 'string') 
        return <>{element}</>;
    
    try {
        // ... spread operatorudur. Spread operatoru ile, bir objeyi veya bir diziyi
        // ayri ayri elemanlar halinde ayirabiliriz, elemanlari bu sekilde alarak
        // birden cok objeyi key - value ciftleri olarak tek objede birlestirebiliriz.
        const childConfig = { ...parentConfig, ...element.props } as Config<PropsUnion> & PropsUnion;
        return (
            // cocugun icindeki ilk elementte anne element
            // bu aslinda recursionda 2. seviye
            // ve bunun icine maplanan her cocuk ucuncu seviye
            // kendi kendisini cagiracagi icin ucuncu seviyeler kendi cocuklarini
            // halledecekler
            <DynamicElement
                as={element.type as DynamicElementType}
                model={model}
                config={childConfig}
                key={`${model.name}__${element.type}`}
            >
                {/* eger cocuklar array ise, array i dinamik cocuga mapla */}
                {(Array.isArray(element.children) &&
                    element.children.map((child, index) => (
                        <DynamicChild
                            // cocuk undefined ise bos bir element ver 
                            element={child || <></>}
                            model={model}
                            parentConfig={childConfig} //cocugun ayarlarini parent config olarak ver ki DynamicElement bunu Dynamic Child araciligiyla kullanabilsin
                            key={index}
                        />
                        // eger yukardaki array mi sorusu false ise, cocugu strig olarak ver
                    ))) || (element.children as string)} 
            </DynamicElement>
        );
    } catch (e) {
        console.error('Child failed to render, check config file and try again.', e);
        // eger yukarda bir hata olursa, bos bir element yolla
        // tek bir yerde hata olup butun site cokmesin diye.
        // TODO: elementleri site genelinde tanimlayabilecek bir id yarat
        // ve hatali elementleri bu id ile birliktel logla.
        // ornek: app__section__header__h1__0
        return <></>;
    }
};
