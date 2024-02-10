import React from "react";
import { Section } from "../../model/componentData";

export const Education = (props: {s: Section}) => {
    return <>
        <section className={props.s.name} id={`${props.s.name}`}>
            <article>
                <header>
                    <h3> {props.s.header} </h3>
                </header>
                <main>
                    {props.s.image && <>
                        <figure role='img'>
                            <img src={props.s.image.source} 
                                 alt={props.s.image.alternative}
                                 title={props.s.image.title}
                            />
                        </figure>
                    </>}
                    <aside role='presentation'>
                        <strong> {props.s.p} </strong>
                        <p>  {props.s.text} </p>
                    </aside>
                </main>
            </article>
        </section>   
    </>
}