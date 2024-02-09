import { Section } from "../../model/componentData";
import React from "react";

export const Footer = (props: {s: Section}) => {
    const sectionKey = props.s.name;
    return (
        <>
            {/* article-footer -> footer */}
            <section className={sectionKey}>
                <article className={`${sectionKey}__article`}>
                    <body className='article__body'>
                        <p className='p__text'>
                            &copy; {props.s.text}
                        </p>
                    </body>
                </article>
            </section>
        </>
    );
}