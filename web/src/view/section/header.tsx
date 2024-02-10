import React from "react";
import { Section } from "../../model/componentData";

export const Header = (props: {s: Section}) => {
    return <>
        <section className={props.s.name}>
		    <figure role="presentation">
				<img src="me-photo.png" alt="cv-fotoğrafı" />
			</figure>
			<article>
				<h1>{props.s.header}</h1>
				<p>{props.s.text}</p>
			</article>
		</section>
    </>
};