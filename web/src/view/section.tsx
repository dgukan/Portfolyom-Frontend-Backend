import Data from "../data";
import { Section as SectionModel } from "../model/componentData";
import { DynamicElementConfig } from "../model/elementProps";
import { DynamicElementType } from "../model/elementType";
import { DynamicChild } from "./child";
import { DynamicElement } from "./element";

// about cv education experience footer header yerine artik bu var
// configFetcher ile gelen model ile birlesen ayarlar ile elementlerimizi yaratabiliriz
// bu elementlerin her biri bir section ve iclerindeki childlar ile birlikte 
// elementlerin kendilerini kod ile hic bir kere telafuz etmeden
// element yapisini tamamen ayarlardan alarak olusturabiliyoruz
export const Section = ((s: SectionModel) => {
  const config = Data.Configs(s)[s.name] as DynamicElementConfig;

  // dinamik elemente, classi ismi vermek istiyorsak ayarlayabiliriz
  // hangi element olmasini istesek, as ile belirleyebiliriz
  // modeli ve config ayarlarini yollamamiz gerek
  return <>
    <DynamicElement 
        as={config.type as DynamicElementType} 
        useClass={true}
        model={s} 
        config={config}
    >
        {/* buna ek olarak, bu elementin her cocugunu tek tek Dinamik Cocuga maplamaliyiz
        Dinamik cocuk aslinda, sadece Recursive (kendini tekrar eden) bir componentdir
        bu component, kendi icinde, bir Dinamik element olusturur ve bu elementin cocuklarini
        yine kendi icinde cocuk olarak cagirir ve bu sekilde son cocuga kadar devam eder.
        bunu yapmanin kosulu bir noktada son cocugun ya string yada null olmasidir.
        */}
        {config.children.map((child, i) => {
            return (<>
                <DynamicChild parentConfig={config} element={child} model={s} key={i}/>
            </>
            )
        })}
    </DynamicElement>
</>;
});


