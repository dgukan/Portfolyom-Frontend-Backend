import { IconDefinition, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export interface SocialMediaIcon {
    href: string;
    target: string;
    icon: IconDefinition;
}

export interface HeaderListElement {
    href: string;
    text: string;
}

export interface Content {
    logo: string;
    body: {
        header: string;
        text: string;
    };
    section: {
        sectinabout: string;
        sectinaboutp: string;
        sectineducation: string;
        sectineducationp: string;
        sectineducatintext: string;
        sectinprojelerim: string;
        sectincv: string;
        sectinfooter: string;
    };
}

export interface Data {
    content: Content;
    headerListElements: HeaderListElement[];
    socialMediaIcons: SocialMediaIcon[];
}


export const data: Data = {
    content: {
        logo:"Dogukan Koc",
        body:{
            header:"DOGUKAN KOC",
            text:"BT Öğrencisi",
        },
        section:{
            sectinabout:"HAKKIMDA",
            sectinaboutp:"Takım çalışmasına uyum sağlama yeteneğim ve hızlı öğrenme kabiliyetim sayesinde, takım projelerine önemli katkılar sunabilirim.",
            sectineducation:"EĞİTİM",
            sectineducationp:"Bilgisayar ve Öğretim Teknolojileri Eğitimi",
            sectineducatintext:"2020-2024",
            sectinprojelerim:"PROJELERİM",
            sectincv:"ÖZGEÇMİŞ",
            sectinfooter:"2023, Tüm hakları saklıdır."
        }
    },
    headerListElements: [
        {
            href: "#about", 
            text: "Hakkımda"
        },
        {
            href: "#education", 
            text: "Eğitim"
        },
        {
            href: "#proje", 
            text: "Projelerim"
        },
        {
            href: "#cv", 
            text: "Özgeçmiş"
        },
    ],
    socialMediaIcons: [
        {
            href:"https://www.linkedin.com/in/do%C4%9Fukan-ko%C3%A7-884758254/",
            target:"linkedin",
            icon: faLinkedin
        },
        {
            href:"https://github.com/dgukan",
            target:"git",
            icon: faGithub
        },
        {
            href:"mailto:",
            target:"mail",
            icon: faEnvelope
        }
    ]
};
