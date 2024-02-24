import { Section } from "./componentData";
import { ElementChildren } from "./elementChildren";
import { DynamicElementType } from "./elementType";
import { Config, PropsUnion } from "./sectionProps";

export interface DynamicElementProps {
    model: Section;
    children?: ElementChildren;
    as: DynamicElementType;
    useClass?: boolean;
    config: DynamicElementConfig;
    intrinsic?: boolean | undefined;
}
// Dinamik Element Tipiminizin Ayari icin ufak bir isim verdik.
// Config tipi, bir Generic tipdir. generic tipler hem typescript hem c#
// ta herzaman kullanilir. Generic tiplerde, "buraya bir tip gelecek ve bu
// tip diger su tip yada tiplerden birisi olacak" gibi kurallar koymamiza ve 
// any kullanmadan guzel isler yapmamiza yardim eder.
// Union birlesim demektir, props union objesinde aslinda biz bir cok tipi birlesirip
// generic itp olarak kullaaniyoruz
//   HeaderProps
//   | FigureProps
//   | ParagraphProps
//   | AnchorProps
//   | AsideProps
//   | FooterProps
//   | ArticleProps
// yani aslinda, Config ayar tipinin icinde bazi ozellikleri ve elementlerin kendi
// ihtiyaclari olan seyleri tasiyan kendilerine has props tiplerini bir arada
// kullanmanin temiz bir yolu
// & kullanimi, o objeye yeni ahahtarlar ekler yada daha fazla objeyi birlestirir
// bu durumda debug ve ayarlari props unionun kendisine birlestiriyoruz
// bunu yapiyoruz cunku anne element ayar objesi fakat cocuk element props union bekliyor
// fakat anne element hep cocuk araciligi ile cagiriliyor
// tiplerde iki elementide memnun etmemiz icin bu gerekliydi.
export type DynamicElementConfig = Config<PropsUnion> & { debug?: boolean } & PropsUnion;
