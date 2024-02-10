import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default interface ComponentData {
    content: Content;
    nav: Navigation[];
}

export interface Content {
    logo: string;
    sections: Section[]
};


export interface Section {
    name: 'header' | 'about' | 'education' | 'experience' | 'cv' | 'footer';
    header?: string;
    p?: string;
    text?: string;
    href?: string;
}

export interface Navigation {
    href: string;
    text?: string;
    icon?:  {
        target: string;
        icon: IconProp;
    }
}
