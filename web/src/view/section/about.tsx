import React from "react";
import { Section } from "../../model/componentData";
// typescript kullandığımız için mi her şey isürekli değişkene atıyoz yoksa reacttan mı. o yüzden adım adım yapıp benzerliği ortaya cıkarcaz . sonra tek

// butun sectionlar icin benzer bir yapi yakalayip
// sectionlarin icindeki logic'i tek yere cekmek isterik
// o yuzden i
export const About = (props: {s: Section}) => {
    const sectionKey = `${props.s.name}`;
    return (
        <>
            <section className={sectionKey} id={`${sectionKey}`}> 
            {/* __section -> __article */}
                <article className={`${sectionKey}__article`}>
                    <header className='article__header'>
                        <h3 className='h__text'>
                            {props.s.header}
                        </h3>
                    </header>
                    {/* section__header-supplement -> __body */}
                    <body className={`${sectionKey}__body`}>
                        <p className='p__text'>
                            {props.s.p}
                        </p>
                    </body>
                </article>
            </section>
        </>
    )
};