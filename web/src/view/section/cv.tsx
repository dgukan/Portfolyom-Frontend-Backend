import React from "react";
import { Section } from "../../model/componentData";

export const Cv = (props:{ s: Section }) => {
    return <>
        <section className={props.s.name} id={props.s.name}>
            <article>
                <main>
                    <h3> {props.s.header} </h3>
                    <a href={props.s.href} target="_blank" rel="noreferrer">
                        <img src="vector-users-icon.png" alt="users icon" title="resume.pdf"/>
                    </a>
                </main>                    
            </article>
        </section>
    </>
}