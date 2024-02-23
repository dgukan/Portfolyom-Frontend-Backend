
export default interface ComponentData {
    sections: Section[];
    // component datada, bu arrayde navigation objeleri var, evet dogru.
    // fakat bu objelerin uzerinde ek olarak, type anahtarida var.
    // type anahtarida sadece internal yada external olabilir.
    nav: NavigationElement[];
}

//Daha rahat anlamak ve referanslayabilmek icin, bu yukardaki tipe bir isim vermenin yeridir
export type NavigationElement = (Navigation & {type: 'internal' | 'external'});

export interface Content {
    navigation: Navigation[];
    sections: Section[];
};


export interface Section {
    name: 'header' | 'about' | 'education' | 'experience' | 'cv' | 'footer';
    header?: string;
    p?: string;
    text?: string;
    href?: string;
    image?: { source:string; alternative:string, title?: string };
}

export interface Navigation {
    logo: string,
    text?: string;
    href: string;
    target: string;
    icon: string ;
}
