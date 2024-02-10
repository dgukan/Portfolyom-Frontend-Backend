import { Section } from "../../model/componentData";
import React from "react";

export const Footer = (props: {s: Section}) => {
    const sectionKey = props.s.name;
    return (
        <>
            <section className={sectionKey}>
                <article>
                    <main>
                        <p>
                            &copy; {props.s.text}
                        </p>
                    </main>
                </article>
            </section>
        </>
    );
}