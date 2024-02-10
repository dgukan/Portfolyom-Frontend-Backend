import React from "react";
import { Section } from "../../model/componentData";

export const Header = (props: {s: Section}) => {
    return <>
        <section className={props.s.name}>
		    {props.s.image && <>
                <figure role="presentation">
                    <img src={props.s.image.source} alt={props.s.image.source} />
                </figure>
            </>}
			<article>
				<h1>{props.s.header}</h1>
				<p>{props.s.text}</p>
			</article>
		</section>
    </>
};