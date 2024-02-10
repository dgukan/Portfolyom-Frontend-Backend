import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect, useState} from 'react';
import Navigation from './Navigation';
import Content from './model/content'
import  ComponentData, { Section }  from './model/componentData';
import Data from './data';
import { About, Cv, Education, Footer, Project } from './view/section';
// 1- App basladigi an, bir method calistir
// 1a React'tan UseEffect'i importla, App'in icine Return'un uzerinde kullan
// (React Component  lifecycle nedir)?
//      UseEffect bir component'in mount, update, unmount gibi lifecycle'larinda calisan bir methoddur
// 2- Calisan method ile, backend'e bir GET request yap
    // 2a- fetch'i kullan. Fetch'e backend'in url'ini ver
    // 2b- fetch'in icine, method olarak GET'i belirt
    // 2c - fetch'in icine, headers olarak content-type: application/json'i belirt
    // 2d- fetch'in icine, body olarak null'i belirt
    // 2e- fetch'in sonucunu, response olarak al
    // 2f- response'u printle, backenddeki veriyi burda goVrebildigin zaman tamamdir
// 3- Gelen response'u, state'e at
//  3a- useState'i importla
//  3b- useState'i kullanarak, state'teki objenin seklini ve ilk varsayilan degerini belirt
//  3c- usestate'in set methodunu kullanarak, state'i guncelle

// 4- component'teki content'i artik state'ten al
//  4a- Component'teki eski verinin geldigi noktayi yorumlara al
//  4b- O artik yorumda olan ve hata veren seyleri, state'ten kullanacak sekilde degistir
//  4c- Calistir ve ekrana bak, her verinin eskisi gibi gozukmesi ama backend'den gelmesi lazim
function App() {
    // const [content, setContent] = useState<Content | null>(null);

    // //ilk veriyi aliyoruz ve state'e atiyoruz
    // const getInitialData = async() => {
    //     try {
    //         const apiUrl = 'http://localhost:5075/api/Content/GetData';

    //         const response = await fetch(apiUrl,{
    //             method:'GET',
    //             headers: {
    //                 'Content-Type':'application.json',
    //             },
    //         });
    //         console.log(response);

    //         // data : any
    //         const data = await response.json();
    //         // data: Content
    //         const content: Content = JSON.parse(data);
    //         setContent(content);

    //         console.log(content);
    //     }
    //     catch(e)
    //     {
    //         console.error(e);
    //     }
    // };
    //     useEffect(() => {
    //             getInitialData()
    //     },[]);
    
    
    // if(content === null)
    //     return <div>Loading...</div>
    
    // //content'i component data ya donusturuyoruz
    // content.Navigation.map((nav) => {
    //     return ({
    //         href: nav.Href, 
    //         text: nav.Text,
    //     })
    // });

    // content.Sections.map((section) => {
    //     return ({
    //         header: section.Header,
    //         // content: section.,
    //     })
    // });

    // const logo:string | undefined = content.Navigation.find(n => n.Logo!= null)?.Logo;
    
    // const data : ComponentData = {
    //     content:{
    //         logo: String(logo),
    //         body: {
    //             header: string,
    //             text: string,
    //         },
    //         section: {
    //             sectinabout: string,
    //             sectinaboutp: string,
    //             sectineducation: string,
    //             sectineducationp: string,
    //             sectineducatintext: string,
    //             sectinprojelerim: string,
    //             sectincv: string,
    //             sectinfooter: string,
    //         },
    //     },
    //     headerListElements: [
    //         {
    //             href: string,
    //             text: string,
    //         },
    //     ]
    //     socialMediaIcons: [
    //         {
    //             href: string,
    //             target: string,
    //             icon: IconDefinition,
    //         }
    //     ]
    // }
    // content.Navigation[0].
    // content.Sections
    
    // const data: ComponentData = {
    //     content: ,
    //     headerListElements: ,
    //     socialMediaIcons: ,
    // }


    // adimlar:
    // Content -> ComponentData

    // Ornek veri sekli (bos)
    // let socialMediaIcons = {
    //     content:{
    //          logo: "",
    //          body: {
    //              header: "",
    //              text: ""
    //          },
    //          section: [
    //              {
    //                  name: "",
    //                  header: "",
    //                  p: "",
    //                  text: "",
    //                  href: ""
    //              }
    //          ]
    //     },
    //     headerListElements: [
    //           {
    //                href: "",
    //                text: ""
    //           }
    //      ],
    //      socialMediaIcons: [
    //          {
    //              href: "",
    //              target: "",
    //              icon: ""
    //          }
    //      ]
    //  };

    //statik class'tan erisim ornegi
    const data = Data.Component;
    const {content} = data;
    const {body, sections} = content;
    
    return (
        <body className="app">
            <div role='presentation' className="app__main"  id="top">
                <main className="target">
                    <header>
                        <a href="#top" id="logo">
                            <h3>
                                {data.content.logo}
                            </h3>
                        </a>
                        <Navigation data={data}/>
                        <footer>
                            <ul>
                                {data.socialMediaIcons.map((socialMediaIcon) => (
                                        <li>
                                            <a href={socialMediaIcon.href} target={socialMediaIcon.target}>
                                                <FontAwesomeIcon icon={socialMediaIcon.icon}/>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </footer>
                    </header>
                    {/* TODO diger hersey gibi css ini duzelt gereksiz classlari sil */}
                    {/* diger hersey gibi html ini duzelt mantikli isimler kullan div yerine */}
                    {/* scss avantajlarini kullanarak classnamesiz bem guzellikleri yakalayacayik bu sayede */}
                    <div id="main-div">
                        <article id="main-article">
                            <section id="main-article__section">
                                <div className="bg">
                                    <img src="me-photo.png" alt="cv-fotoğrafı" className="img__element"/>
                                </div>
                                <div className="hero-text">
                                    <h1>{body.header}</h1>
                                    <p>{body.text}</p>
                                </div>
                            </section>
                            <Sections model={sections}/>  
                        </article>
                    </div>
                </main>
            </div>
        </body>
    );
};
export default App;


const Sections = (props:{model: Section[]}) => props.model.map(s => ({
        about:     <About s={s}/>,
        project:   <Project s={s} />,
        cv:        <Cv s={s}/>,
        footer:    <Footer s={s}/>,
        education: <Education s={s}/>,
    }[s.name]
    )
)