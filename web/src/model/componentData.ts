import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default interface ComponentData {
    content: Content;
}

//Daha rahat anlamak ve referanslayabilmek icin, bu yukardaki tipe bir isim vermenin yeridir
export type NavigationElement = (Navigation & {type: 'internal' | 'external'});

export interface Content {
    logo: string;
    navigation: Navigation[];
    sections: Section[];
};


export interface Section {
    name: 'header' | 'about' | 'education' | 'experience' | 'cv' | 'footer';
    header?: string;
    p?: string;
    text?: string;
    href?: string;
    image?: SectionImage;
}

export type SectionImage = {
    source:string; alternative:string, title?: string
}
export interface Navigation {
    text?: string;
    href: string;
    icon?: { name: 'linkedin'| 'github'| 'envelope', target: string; icon: IconDefinition; } ;
}
