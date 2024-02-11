import { Section as SectionModel } from "../../model/componentData";

export const Section = (props: { s: SectionModel }) => {
    return (
        <>
            <section className={props.s.name}>
                {props.s.image && <>
                    <figure role="presentation">
                        <img src={props.s.image.source} alt={props.s.image.source} />
                    </figure>
                </>}
                <article>

                </article>
            </section>
        </>
    );
}

const Header = (props: {s: SectionModel}) => {
    return <>
        <section className={props.s.name} id={props.s.name}>
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

const Education = (props: {s: SectionModel}) => {
    return <>
        <section className={props.s.name} id={props.s.name}>
            <article>
                <header>
                    <h3> {props.s.header} </h3>
                </header>
                <main>
                    {props.s.image && <>
                        <figure role='img'>
                            <img src={props.s.image.source} 
                                 alt={props.s.image.alternative}
                                 title={props.s.image.title}
                            />
                        </figure>
                    </>}
                    <aside role='presentation'>
                        <strong> {props.s.p} </strong>
                        <p>  {props.s.text} </p>
                    </aside>
                </main>
            </article>
        </section>   
    </>
}
 const Experience = (props: {s: SectionModel}) => {
    return <>
        <section className={`${props.s.name}`} id={`${props.s.name}`}>
            <article>
                <header>
                    <h3> {props.s.header} </h3>
                </header>
                <main>
                    <a href={props.s.href}>
                        { props.s.image && <>
                            <img src={props.s.image.source} 
                                 alt={props.s.image.alternative}
                                 title={props.s.image.title} 
                            />
                        </>}
                    </a>
                </main>
            </article>
        </section>
    </>
}
 const Cv = (props:{ s: SectionModel }) => {
    return <>
        <section className={props.s.name} id={props.s.name}>
            <article>
                <main>
                    <h3> {props.s.header} </h3>
                    <a href={props.s.href} target="_blank" rel="noreferrer">
                        {props.s.image && <>
                            <img src={props.s.image.source} 
                                 alt={props.s.image.alternative}
                                 title={props.s.image.title}
                            />
                        </>}
                    </a>
                </main>                    
            </article>
        </section>
    </>
}

 const Footer = (props: {s: SectionModel}) => {
    return <>
        <section className={props.s.name} id={props.s.name}>
            <article>
                <main>
                    <p> &copy; {props.s.text} </p>
                </main>
            </article>
        </section>
    </>
}

const IntrinsicElement = (props: {s: SectionModel, key: string}) => (
    {
        header: (
            <>
                <h3>
                    {props.s.text}
                </h3>
            </>
        ),
        p: (
            <>
                <p>
                    {props.s.p}
                </p>
            </>
        ),
        text: (
            <>
                <p>
                    {props.s.text}
                </p>
            </>
        ),
        href: (
            <>
                <a href={props.s.href}
                   target="_blank"
                   rel="noreferrer"
                >
                    {props.s.image && <>
                        <img src={props.s.image.source} 
                             alt={props.s.image.alternative}
                             title={props.s.image.title}
                        />
                    </>}
                </a>
            </>
        ),
    }[props.key]
);
