import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export default interface ComponentData {
    content: Content;
    headerListElements: HeaderListElement[];
    socialMediaIcons: SocialMediaIcon[];
}

export interface Content {
    logo: string;
    body: {
        header: string;
        text: string;
    };
    section: Section[]
    
    };


export interface Section {
        name: string;
        header?: string;
        p?: string;
        text?: string;
        href?: string;
}

export interface HeaderListElement {
    href: string;
    text: string;
}

export interface SocialMediaIcon {
    href: string;
    target: string;
    icon: IconDefinition;
}
// section: {
    //     about:
    //     {
    //         name: string,
    //         header:string,
    //         p:string
    //     };

    //     education:
    //     {
    //         name: string,
    //         header: string,
    //         p: string,
    //         text: string,
    //     };

    //     proje:{
    //         name: string,
    //         header:string,
    //         href: string,
    //     };

    //     cv:{
    //         name: string,
    //         header: string,
    //         href: string,
    //     };
    //     footer:{
    //         name: string,
    //         text: string,
    //     };






    // export const data: ComponentData = {
    //     content: {
    //         logo:"Dogukan Koc",
    //         body:{
    //             header:"DOGUKAN KOC",
    //             text:"BT Öğrencisi",
    //         },
    //         section:{
    //             sectinabout:"HAKKIMDA",
    //             sectinaboutp:"Takım çalışmasına uyum sağlama yeteneğim ve hızlı öğrenme kabiliyetim sayesinde, takım projelerine önemli katkılar sunabilirim.",
    //             sectineducation:"EĞİTİM",
    //             sectineducationp:"Bilgisayar ve Öğretim Teknolojileri Eğitimi",
    //             sectineducatintext:"2020-2024",
    //             sectinprojelerim:"PROJELERİM",
    //             sectincv:"ÖZGEÇMİŞ",
    //             sectinfooter:"2023, Tüm hakları saklıdır."
    //         }
    //     },
    //     headerListElements: [
    //         {
    //             href: "#about", 
    //             text: "Hakkımda"
    //         },
    //         {
    //             href: "#education", 
    //             text: "Eğitim"
    //         },
    //         {
    //             href: "#proje", 
    //             text: "Projelerim"
    //         },
    //         {
    //             href: "#cv", 
    //             text: "Özgeçmiş"
    //         },
    //     ],
    //     socialMediaIcons: [
    //         {
    //             href:"https://www.linkedin.com/in/do%C4%9Fukan-ko%C3%A7-884758254/",
    //             target:"linkedin",
    //             icon: faLinkedin
    //         },
    //         {
    //             href:"https://github.com/dgukan",
    //             target:"git",
    //             icon: faGithub
    //         },
    //         {
    //             href:"mailto:",
    //             target:"mail",
    //             icon: faEnvelope
    //         }
    //     ]
    // };
