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
                <article>
                    <header>
                        <h3>
                            {props.s.header}
                        </h3>
                    </header>
                    <body>
                        <p>
                            {props.s.p}
                        </p>
                    </body>
                </article>
            </section>
        </>
    )
};