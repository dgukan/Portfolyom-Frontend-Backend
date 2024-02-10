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
                    <body>
                        <div role='img' className='body__image'>
                            <img src="egeüni.png" 
                                // hero-photo -> 
                                 className='img__element'
                                 alt="Ege üniversitesi logo"
                            />
                        </div>
                        {/* education__section__paragraph hero-text ->  */}
                        <div role='presentation' className="body__present">
                            <strong>
                                {props.s.p}
                            </strong>
                            <p>
                                {props.s.text}
                            </p>
                        </div>
                    </body>
                </article>
            </section>   
        </>
    )
}