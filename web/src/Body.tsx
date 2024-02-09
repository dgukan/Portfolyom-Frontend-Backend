import { Data } from "./data";

const Body = (params: {data: Data}) => (
<div id="main-div">
    <article id="main-article">
        <section id="main-article__section">
            <div className="bg">
                <img src="me-photo.png" alt="cv-fotoğrafı" className="hero-photo"/>
            </div>
            <div id="hero-text">
                <h1>{params.data.content.body.header}</h1>
                <p>{params.data.content.body.text}</p>
            </div>
        </section>
            <section id="about">
                <div id="about__section">
                    <div id="about__section__header">
                        <h3>{params.data.content.section.sectinabout}</h3>
                    </div>
                    <div id="about__section__header__supplement">
                        <p>{params.data.content.section.sectinaboutp}</p>
                    </div>
                </div>
            </section>
            <section id="education">
                <div id="education__section">
                    <div id="education__section__header">
                        <h3>{params.data.content.section.sectineducation}</h3>
                    </div>
                    <div id="education__section__header__supplement" className="bg">
                        <img src="egeüni.png" alt="Ege üniversitesi logo" className="hero-photo"></img>
                    </div>
                    <div id="education__section__paragraph hero-text">
                        <p style={{fontFamily:"small-caps"}}>{params.data.content.section.sectineducatintext}</p>
                        <p>{params.data.content.section.sectineducationp}</p>
                    </div>
                </div>
            </section>
            <section id="proje">
                <div id="proje__section">
                    <div id="proje__section__header">
                        <h3>{params.data.content.section.sectinprojelerim}</h3>
                    </div>
                    <div id="proje__section__header__supplement">
                        <a href="#"><img src="html5-css3.png" alt="html5-css3 logo" title="Github'a git" className="projem"></img></a>
                    </div>
                </div>
            </section>
            <section id="article-data">
                <div id="cv">
                    <h3>{params.data.content.section.sectincv}</h3>
                    <a href="resume.pdf" target="_blank"><img src="vector-users-icon.png" alt="users icon" id="cv-img" title="resume.pdf"></img></a>
                </div>
            </section>
            <section id="article-footer">
                <p>&copy; {params.data.content.section.sectinfooter} </p>
            </section>
    </article>
</div>
)


export default Body;