import { Section } from "../../model/componentData";
import React from "react";

export const Footer = (props: {s: Section}) => {
    const sectionKey = props.s.name;
    return (
        <>
            <section className={sectionKey}>
                <article>
                    <body>
                        <p>
                            &copy; {props.s.text}
                        </p>
                    </body>
                </article>
            </section>
        </>
    );
}