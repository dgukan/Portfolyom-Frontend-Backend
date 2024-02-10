import React from "react";
import { Section } from "../../model/componentData";

export const Education = (props: {s: Section}) => {
    return <>
        <section className={props.s.name} id={`${props.s.name}`}>
            <article>
                <header>
                    <h3>
                        {props.s.header}
                    </h3>
                </header>
                <main>
                    <figure role='img'>
                        <img src="egeüni.png" 
                                alt="Ege üniversitesi logo"
                        />
                    </figure>
                    <aside role='presentation'>
                        <strong>
                            {props.s.p}
                        </strong>
                        <p>
                            {props.s.text}
                        </p>
                    </aside>
                </main>
            </article>
        </section>   
    </>
}