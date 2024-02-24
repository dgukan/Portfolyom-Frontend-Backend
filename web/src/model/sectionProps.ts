import { FigureProps } from "../view/extrinsic/image";
import { HeaderProps } from "../view/intrinsic/header";
import { ParagraphProps } from "../view/extrinsic/paragraph";
import { DynamicElementType } from "./elementType";

export type BaseProps = { intrinsic: boolean; children?: Child<PropsUnion>[] | string };

export type AnchorProps = BaseProps & {
  href: string;
  img?: {  src: string; alt: string; title: string; }
  text?: string;
};

// kullanilmayan ama kullanilabilecek props tipleri
// eger bunlari kullanacak bir component yaratilirsa
// bu dosyadan o componentin dosyasina aktarilir
export type AsideProps = BaseProps & { p: string; text: string; };
export type FooterProps = BaseProps;
export type ArticleProps = BaseProps & { children?: Child<PropsUnion>[] };

export type PropsUnion = BaseProps & (
  HeaderProps
  | FigureProps
  | ParagraphProps
  | AnchorProps
  | AsideProps
  | FooterProps
  | ArticleProps
);

export type ElementProps<T extends PropsUnion> = {
  type: DynamicElementType;
  props?: T;
};

export enum SectionName {
  Header = 'header',
  About = 'about',
  Education = 'education',
  Experience = 'experience',
  Cv = 'cv',
  Footer = 'footer'
}

// Section modelimize denk gelen section html yapilarini
// bu veriler sayesinde yukardan alta dogru recursive (tekrar eden) bir sekilde
// render edebiliriz. Bu sayede, her bir section icin ayri ayri kod yazmak
// zorunda kalmayiz.
// debug ozelligi sayesinde, calistigini bildigimiz bir section in loglarini
// diger section icin bakarken gormek zorunda kalmayiz
// section ismi sayesinde dogru element ismini class ve id olarak kullanabiliriz
// bir elementin intrinsic mi degil mi olduguna bu ozellik ile karar verebiliriz
// ornegin h3 mu gosterilsin yoksa header ve icinde h3 mu
// generic tipi burda tanimladigimiz icin
// T tipi, herhangibir tip verilebilir ama props union tipindeki tiplerden
// birisi olmak zorunda diyebiliyoruz extens sayesinde
export type Config<T extends PropsUnion> = {
    type: DynamicElementType;
    name: SectionName
    children: Child<T>[];
    props: T | undefined;
    debug: boolean;
    intrinsic?: boolean;
  };


export interface Child<T extends PropsUnion> {
  type: DynamicElementType;
  props?: T; 
  children?: (Child<T> | string | undefined)[] | Child<T> | string | undefined;
}
