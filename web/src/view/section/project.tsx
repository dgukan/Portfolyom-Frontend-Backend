import React from "react";
import { Section } from "../../model/componentData";

export const Project = (props: {s: Section}) => {
    const sectionKey = props.s.name;
    return (
        <>
            <section className={`${sectionKey}`} id={`${sectionKey}`}>
                <article>
                    <header>
                        <h3 >
                            {props.s.header}
                        </h3>
                    </header>
                    <body>
                        <a href={props.s.href}>
                            <img src="html5-css3.png"                                 
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
