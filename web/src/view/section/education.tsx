import React from "react";
import { Section } from "../../model/componentData";

export const Education = (props: {s: Section}) => {
    const sectionKey = `${props.s.name}`;
    return (
        <>
            <section className={sectionKey} id={`${sectionKey}`}>
                <article>
                    <header>
                        <h3>
                            {props.s.header}
                        </h3>
                    </header>
                    <main>
                        <figure role='img'>
                            <img src="egeüni.png" 
                                // hero-photo -> 
                                //  className='img__element'
                                 alt="Ege üniversitesi logo"
                            />
                        </figure>
                        {/* education__section__paragraph hero-text ->  */}
                        {/*  className="body__present" */}
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
    )
}