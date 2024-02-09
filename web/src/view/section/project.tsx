import React from "react";
import { Section } from "../../model/componentData";

export const Project = (props: {s: Section}) => {
    const sectionKey = props.s.name;
    return (
        <>
        {/* proje -> project */}
            <section className={`${sectionKey}`} id={`${sectionKey}`}>
                {/* proje__section -> */}
                <article className={`${sectionKey}__article`}>
                    {/* proje__section__header */}
                    <header className="article__header">
                        <h3 className="h__text">
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
