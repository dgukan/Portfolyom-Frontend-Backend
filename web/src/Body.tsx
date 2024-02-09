import { Section } from "./model/componentData";
import SectionData from "./model/componentData";
import { About, Project, Cv, Footer, Education } from './view/section';

const Body = (params: {data: SectionData}) => {
    const {data} = params;
    const {content} = data;
    const {body, section} = content;

    return (
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
                {section.map(SectionDictionary)}  
            </article>
        </div>
    );
}
export default Body;

export const SectionDictionary = (s: Section) => (
    ({
        about:     <About s={s}/>,
        project:     <Project s={s} />,
        cv:        <Cv s={s}/>,
        footer:    <Footer s={s}/>,
        education: <Education s={s}/>,
    }
    )[s.name]
);
// Section Sozlugum 
// Anahtar ile Sectiona erisim