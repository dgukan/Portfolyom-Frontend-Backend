import { Section } from "../model/componentData";
import { ElementChildren } from "../model/elementChildren";
import { DynamicElementType } from "../model/elementType";
import { ExtrinsicProps } from "../model/extrinsicProps";
import { IntrinsicHeader } from "./intrinsic/header";

export const getNestedTextOrChild = (children: ElementChildren, className?: string) => {
    // eger Array halinde cocuklari varsa,
        // o array'i fragment ile tek cocuga donustur ve yolla.
    // eger bu yukarda anlatilan durum gecerli degilse,
        // dinamik boyutlu header kullan ve  h1- h6 elementi yolla
        // cunku bu, cocuklarin tek bir string oldugu diger durumdur.
    const getChild = () => (Array.isArray(children) && (
        // text
        <>
            {children}
        </>
    )) || (
        // child
        <IntrinsicHeader size={3} className={className}>
            {children}
        </IntrinsicHeader>
    )
    
     // javasctipt dilinde, degerler hep true yada false olur.
    // bir degerin boolean degerini almak icin, !! kullanilir.
    // buna bir nevi, hile denilebilir.
    // ilk !, degerini boolean, fakat zit hale getirir.
    // ikinci !, artik boolean olan degerin zit halini alarak
    // degerini boolean'a donusturmus olur. Bu sayede,
    // eger ilk basta children bir obje yada array yada ne olursa olsun
    // o degerin boolean versyonunu almis olduk.
    // undefined yada null yada bos string bos array bos obje gibi bircok durumu
    // hizlica halletmis olduk.
    // ElementChildren tipinin ne oldugunu, bu children degiskeninin tipini takip
    // ederek gorebilirsin.
    const hasChildren: boolean = !!children;

    // cocuklari varsa (hasChildren?), cocuga donusturulmus hesaplanmis cocugu yolla
    // cocuklari yoksa,(||) undefined yolla.
    return (hasChildren && getChild()) || undefined;
}

// baslik olarak ne yaptimizi yada ne loglamak istedigimizi yaziyoruz
// ve bunlari tek bir obje halinde returnluyoruz
export const logDetails = (shouldDebug: boolean, model: Section, config: ExtrinsicProps, as: DynamicElementType, children: ElementChildren)=> {
    const info = `Now rendering html tag -.${as}.- for element ${model.name}`
    
    if (shouldDebug)
        console.log({
            // obje yaratirken kullanmak istedigimiz key, hesaplanmis birsey olabilir: 
            [info]: {
                config,
                model,
                children
            },
        });     
}