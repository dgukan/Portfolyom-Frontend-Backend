import React from "react";
import { Section } from "../../model/componentData";

export const Cv = (props:{ s: Section }) => {
    const sectionKey = `${props.s.name}`;
    return (
        <>
            <section className={sectionKey} id={`${sectionKey}`}>
                <article className={`${sectionKey}__article`}>
                    <body className="article__body">
                        <h3 className="h__text">
                            {props.s.header}
                        </h3>
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
                    </body>                    
                </article>
            </section>
        </>
    )
}