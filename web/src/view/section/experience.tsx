import React from "react";
import { Section } from "../../model/componentData";

export const Experience = (props: {s: Section}) => {
    return <>
        <section className={`${props.s.name}`} id={`${props.s.name}`}>
            <article>
                <header>
                    <h3> {props.s.header} </h3>
                </header>
                <main>
                    <a href={props.s.href}>
                        { props.s.image && <>
                            <img src={props.s.image.source} 
                                 alt={props.s.image.alternative}
                                 title={props.s.image.title} 
                            />
                        </>}
                    </a>
                </main>
            </article>
        </section>
    </>
}
