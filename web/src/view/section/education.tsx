import React from "react";
import { Section } from "../../model/componentData";

export const Education = (props: {s: Section}) => {
    const sectionKey = `${props.s.name}`;
    return (
        <>
            <section className={sectionKey} id={`${sectionKey}`}>
                {/* __section -> __article */}
                <article className={`${sectionKey}__article`}>
                    {/* education__section__header -> article__header */}
                    <header className='article__header'>
                        <h3 className='h__text'>
                            {props.s.header}
                        </h3>
                    </header>
                    <body className="article__body">
                        {/* education__section__header__supplement */}
                        <div role='img' className='body__img bg'>
                            <img src="egeüni.png" 
                                // hero-photo -> 
                                 className='img__element'
                                 alt="Ege üniversitesi logo"
                            />
                        </div>
                        {/* education__section__paragraph hero-text ->  */}
                        <div role='presentation' className="body__presentation hero-text">
                            <p className='presentation__head-text' style={{fontFamily:"small-caps"}}>
                                {props.s.p}
                            </p>
                            <p className="p__text">
                                {props.s.text}
                            </p>
                        </div>
                    </body>
                </article>
            </section>   
        </>
    )
}