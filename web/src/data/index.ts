import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ComponentData from "../model/componentData";

export default class Data {
   static Component: ComponentData = {
        content: {
            logo:"Dogukan Koc",
            body:{
                header:"DOGUKAN KOC",
                text:"BT Öğrencisi",
            },
            section: [
                {
                    name: 'about',
                    header:"HAKKIMDA",
                    p:"Takım çalışmasına uyum sağlama yeteneğim ve hızlı öğrenme kabiliyetim sayesinde, takım projelerine önemli katkılar sunabilirim."
                },
                {
                    name: 'education',
                    header:"EĞİTİM",
                    p:"Bilgisayar ve Öğretim Teknolojileri Eğitimi",
                    text:"2020-2024"
                },
                {
                    name: 'project' ,
                    header:"PROJELERİM",
                    href:"",
                },
                {
                    name: 'cv',
                    header:"ÖZGEÇMİŞ",
                    href:"resume.pdf"
                },
                {
                    name: 'footer',
                    text:  "2023, Tüm hakları saklıdır.",
                },
            ]
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
                href: "#project", 
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
}
    
export type { ComponentData };

