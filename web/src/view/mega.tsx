import { Section as SectionModel } from "../model/componentData";

export const Section = (props: { s: SectionModel }) => {
    const sectionKey = `${props.s.name}`;
    return (
        <>
            <section className={sectionKey}>
                <article className={`${sectionKey}__article`}>
                    <body className="article__body">
                        {Object.entries(props.s).map(([key,value])=> (
                            <IntrinsicElement s={props.s} key={key}/>
                        ))}   
                    </body>
                </article>
            </section>
        </>
    );
}

const About = (props: {s: SectionModel}) => {
    const sectionKey = `${props.s.name}`;
    return (
        <>
            <section className={sectionKey}> 
            {/* __section -> __article */}
                <article className={`${sectionKey}__article`}>
                    <header className='article__header'>
                        <h3 className='h__text'>
                            {props.s.header}
                        </h3>
                    </header>
                    {/* section__header-supplement -> __body */}
                    <body className={`${sectionKey}__body`}>
                        <p className='body__text'>
                            {props.s.p}
                        </p>
                    </body>
                </article>
            </section>
        </>
    )
};



const Education = (props: {s: SectionModel}) => {
    const sectionKey = `${props.s.name}`;
    return (
        <>
            <section className={sectionKey}>
                {/* __section -> __article */}
                <article className={`${sectionKey}__article`}>
                    {/* education__section__header -> article__header */}
                    <header className='article__header'>
                        <h3 className='header__text'>
                            {props.s.header}
                        </h3>
                    </header>
                    <body className="article__body">
                        {/* education__section__header__supplement */}
                        <div role='img' className='body__img bg'>
                            <img src="egeüni.png" 
                                // hero-photo -> 
                                 className='img__element'
                                 alt="Ege üniversitesi logo"
                            />
                        </div>
                        {/* education__section__paragraph hero-text ->  */}
                        <div role='presentation' className="body__presentation hero-text">
                            <p className='presentation__head-text' style={{fontFamily:"small-caps"}}>
                                {props.s.text}
                            </p>
                            <p className="presentation__text">
                                {props.s.p}
                            </p>
                        </div>
                    </body>
                </article>
            </section>   
        </>
    )
}


export const Project = (props: {s: SectionModel}) => {
    const sectionKey = props.s.name;
    return (
        <>
        {/* proje -> project */}
            <section className={sectionKey}>
                {/* proje__section -> */}
                <article className={`${sectionKey}__article`}>
                    {/* proje__section__header */}
                    <header className="article__header">
                        <h3 className="header__text">
                            {props.s.header}
                        </h3>
                    </header>
                    {/* proje__section__header__supplement */}
                    <body className="article__body">
                        <a className="body__anchor" href={props.s.href}>
                            <img src="html5-css3.png"
                                // projem ->  
                                 className="anchor__image"
                                 alt="html5-css3 logo" 
                                 title="Github'a git" 
                            />
                        </a>
                    </body>
                </article>
            </section>
        </>
    );
}


const IntrinsicElement = (props: {s: SectionModel, key: string}) => (
    {
        header: (
            <>
                <h3 className='body__head-text'>
                    {props.s.text}
                </h3>
            </>
        ),
        p: (
            <>
                <p className='body__text'>
                    {props.s.p}
                </p>
            </>
        ),
        text: (
            <>
                <p className='body__text'>
                    {props.s.text}
                </p>
            </>
        ),
        href: (
            <>
                <a className="body__anchor" 
                    href={props.s.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="vector-users-icon.png" 
                        // cv-img -> anchor__image
                        className="anchor__image" 
                        alt="users icon" 
                        title="resume.pdf"
                    />
                </a>
            </>
        ),
    }[props.key]
);
