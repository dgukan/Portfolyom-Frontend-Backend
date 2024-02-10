import React from "react";
import { Section } from "../../model/componentData";

export const Cv = (props:{ s: Section }) => {
    return <>
        <section className={props.s.name} id={props.s.name}>
            <article>
                <main>
                    <h3> {props.s.header} </h3>
                    <a href={props.s.href} target="_blank" rel="noreferrer">
                        {props.s.image && <>
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