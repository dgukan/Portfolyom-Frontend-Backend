import React from "react";
import { Section } from "../../model/componentData";

export const Footer = (props: {s: Section}) => {
    return <>
        <section className={props.s.name}>
            <article>
                <main>
                    <p> &copy; {props.s.text} </p>
                </main>
            </article>
        </section>
    </>
}