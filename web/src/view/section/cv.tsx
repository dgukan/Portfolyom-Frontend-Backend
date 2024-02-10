import React from "react";
import { Section } from "../../model/componentData";

export const Cv = (props:{ s: Section }) => {
    const sectionKey = `${props.s.name}`;
    return (
        <>
            <section className={sectionKey} id={`${sectionKey}`}>
                <article>
                    <main>
                        <h3>
                            {props.s.header}
                        </h3>
                        <a href={props.s.href}
                           target="_blank"
                           rel="noreferrer"
                        >
                            <img src="vector-users-icon.png" 
                                alt="users icon" 
                                title="resume.pdf"
                            />
                        </a>
                    </main>                    
                </article>
            </section>
        </>
    )
}