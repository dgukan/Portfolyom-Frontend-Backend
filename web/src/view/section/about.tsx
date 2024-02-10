import React from "react";
import { Section } from "../../model/componentData";

export const About = (props: {s: Section}) => {
    return <>
        <section className={props.s.name} id={`${props.s.name}`}> 
            <article>
                <header>
                    <h3> {props.s.header} </h3>
                </header>
                <main>
                    <p> {props.s.p} </p>
                </main>
            </article>
        </section>
    </>
};