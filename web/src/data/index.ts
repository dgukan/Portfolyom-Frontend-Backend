import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ComponentData from "../model/componentData";

export default class Data {
   static Component: ComponentData = {
        content: {
            logo:"Dogukan Koc",
            sections: [
                {
                    name: 'header',
                    header:"DOGUKAN KOC",
                    text: 'BT Öğrencisi',
                    image: {source: 'me-photo.png', alternative: 'cv-fotoğrafı' }
                },
                {
                    name: 'about',
                    header:"HAKKIMDA",
                    p:"Takım çalışmasına uyum sağlama yeteneğim ve hızlı öğrenme kabiliyetim sayesinde, takım projelerine önemli katkılar sunabilirim."
                },
                {
                    name: 'education',
                    header:"EĞİTİM",
                    p:"Bilgisayar ve Öğretim Teknolojileri Eğitimi",
                    text:"2020-2024",
                    image: { source: 'egeüni.png', alternative: 'Ege üniversitesi logo' }
                },
                {
                    name: 'experience' ,
                    header:"PROJELERİM",
                    href:"",
                    image: { source: "html5-css3.png", alternative: "html5-css3 logo", title: "Github'a git" }
                },
                {
                    name: 'cv',
                    header:"ÖZGEÇMİŞ",
                    href:"resume.pdf",
                    image: { source:"vector-users-icon.png", alternative:"users icon", title:"resume.pdf" }
                },
                {
                    name: 'footer',
                    text:  "2023, Tüm hakları saklıdır.",
                },
            ]
        },
        nav: [
            // {
            //     href: "about", 
            //     text: "Hakkımda"
            // },
            // {
            //     href: "education", 
            //     text: "Eğitim"
            // },
            // {
            //     href: "experience", 
            //     text: "Projelerim"
            // },
            // {
            //     href: "cv", 
            //     text: "Özgeçmiş"
            // },
            // {
            //     href:"https://www.linkedin.com/in/do%C4%9Fukan-ko%C3%A7-884758254/",
            //     icon : { target: 'linkedin', icon: faLinkedin }
            // },
            // {
            //     href:"https://github.com/dgukan",
            //     icon: { target: 'git', icon: faGithub }
            // },
            // {
            //     href:"mailto:",
            //     icon: { target:"mail", icon: faEnvelope}
            // }
        ],
    };        
}
    
export type { ComponentData };

