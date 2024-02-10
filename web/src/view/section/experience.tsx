import React from "react";
import { Section } from "../../model/componentData";

export const Experience = (props: {s: Section}) => {
    return <>
        <section className={`${props.s.name}`} id={`${props.s.name}`}>
            <article>
                <header>
                    <h3 >
                        {props.s.header}
                    </h3>
                </header>
                <main>
                    <a href={props.s.href}>
                        <img src="html5-css3.png" alt="html5-css3 logo"title="Github'a git" />
                    </a>
                </main>
            </article>
        </section>
    </>
}
