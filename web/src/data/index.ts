import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ComponentData, { Section } from "../model/componentData";
import ModelData from "../model/componentData";
import { DynamicElementType as ElementType } from "../model/elementType";
import { AnchorProps, Child, ElementProps, PropsUnion, SectionName } from "../model/sectionProps";
import { ParagraphStyle } from "../view/intrinsic/paragraph";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class Data {
   static ModelData: ModelData = {
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
            ],
            navigation: [
                {
                    href: "about", 
                    text: "Hakkımda"
                },
                {
                    href: "education", 
                    text: "Eğitim"
                },
                {
                    href: "experience", 
                    text: "Projelerim"
                },
                {
                    href: "cv", 
                    text: "Özgeçmiş"
                },
                {
                    href:"https://www.linkedin.com/in/do%C4%9Fukan-ko%C3%A7-884758254/",
                    icon : {name:'linkedin', target: 'linkedin', icon: faLinkedin }
                },
                {
                    href:"https://github.com/dgukan",
                    icon: { name: 'github', target: 'github', icon: faGithub }
                },
                {
                    href:"mailto:",
                    icon: { name:'envelope', target:"mailto:", icon: faEnvelope}
                }
            ],
        },
        
    };

    static Configs = (s: Section)=> {
        return {
            header: {
                debug: true,
                props: undefined,
                type: ElementType.Section,
                name: ElementType.Header,
                children: [
                    {
                        props: {intrinsic: false},
                        type: ElementType.Image,
                        children: undefined
                    },
                    {
                        props: undefined,
                        type: ElementType.Article,
                        children: [
                            {
                                props: {size: 1, intrinsic: true,},
                                type: ElementType.Header,
                                children: s.header
                            },
                            {
                                props: undefined,
                                type: ElementType.Main,
                                children: [
                                    {
                                        props: {style: ParagraphStyle.Regular},
                                        type: ElementType.Paragraph,
                                        children: s.text
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            about: {
                debug: false,
                props: undefined,
                type: ElementType.Section,
                name: SectionName.About,
                children: [
                    {
                        props: undefined,
                        type: ElementType.Article,
                        children: [
                            {
                                props: {size: 3, intrinsic: false},
                                type: ElementType.Header,
                                children: s.header
                            },
                            {
                                props: undefined,
                                type: ElementType.Main,
                                children: [
                                    {
                                        props: {style: ParagraphStyle.Regular},
                                        type: ElementType.Paragraph,
                                        children: s.p
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            education: {
                debug: false,
                props: undefined,
                type: ElementType.Section,
                name: SectionName.Education,
                children: [
                    {
                        props: undefined,
                        type: ElementType.Article,
                        children: [
                            {
                                props: undefined,
                                type: ElementType.Header,
                                children: s.header
                            },
                            {
                                props: undefined,
                                type: ElementType.Main,
                                children: [
                                    {
                                        props: undefined,
                                        type: ElementType.Aside,
                                        children: [
                                            {
                                                props: { style: ParagraphStyle.Strong, intrinsic: true},
                                                type: ElementType.Paragraph,
                                                children: s.p
                                            },
                                            {
                                                props: {style: ParagraphStyle.Regular},
                                                type: ElementType.Paragraph,
                                                children: s.text
                                            }
                                        ]
                                    },
                                    {
                                        props: {intrinsic: false},
                                        type: ElementType.Image,
                                        children: undefined
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            experience: {
                debug: false,
                props: undefined,
                type: ElementType.Section,
                name: SectionName.Experience,
                children: [
                    {
                        props: undefined,
                        type: ElementType.Article,
                        children: [
                            {
                                props: { size: 3, intrinsic: false  },
                                type: ElementType.Header,
                                children: s.header
                            },
                            {
                                props: undefined,
                                type: ElementType.Main,
                                children: [
                                    {
                                        props: undefined,
                                        type: ElementType.Anchor,
                                        children: s.href,
                                    },
                                    {
                                        props: undefined,
                                        type: ElementType.Image,
                                        children: s.image?.source
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            cv: {
                props: undefined,
                type: ElementType.Section,
                name: SectionName.Cv,
                debug: false,
                children: [
                    {
                        props: undefined,
                        type: ElementType.Article,
                        children: [
                            {
                                props: undefined,
                                type: ElementType.Main,
                                children: [
                                    {
                                        type: ElementType.Header,
                                        props: { size: 3, intrinsic: true },
                                        children: s.header
                                    },
                                    {
                                        type: ElementType.Anchor,
                                        props: {
                                            href: s.href,
                                            img: {
                                                src: s.image?.source,
                                                alt: s.image?.alternative, 
                                                title: s.image?.title
                                            },
                                            intrinsic: false,
                                        },
                                    } as ElementProps<AnchorProps>
                                ]
                            }
                        ]
                    }
                ] as Child<PropsUnion>[]
            },
            footer: ({
                debug: true,
                props: undefined,
                type: ElementType.Footer,
                name: SectionName.Footer, 
                children: [
                    {
                        props: undefined,
                        type: ElementType.Article,
                        children: [
                            {
                                props: undefined,
                                type: ElementType.Main,
                                children: [
                                    {
                                        props: {style: ParagraphStyle.Regular},
                                        type: ElementType.Paragraph,
                                        children: `© ${s.text}`
                                    }
                                ]
                            }
                        ]
                    }
                ] as Child<PropsUnion>[]
            }),

        }
    }
}
    
export type { ComponentData };

