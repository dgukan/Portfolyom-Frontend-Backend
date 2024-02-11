import { Section as SectionModel } from "../../model/componentData";

const ElementDictionary = ({ model, children,key,}: (
    {
        model: SectionModel;
        children?: JSX.Element | JSX.Element[];
        key: string;
    }
)) => {
    const Element = (
        {
            section: (
                <section className={model.name} id={model.name}>
                    {children}
                </section>
            ),
        }
    )[key];
  
    return Element;
};



const renderChildComponents = (
  child: ElementChild<PropsUnion>,
  sectionModel: SectionModel
): JSX.Element => {
  const { type, props } = child;

  // Render child components recursively
  const ChildElement = (
    <ElementDictionary model={sectionModel} key={type}>
      {props && Object.entries(props).map(([propKey, propValue]) => {
        if (typeof propValue === 'object' && propValue !== null) {
          // Recursively render nested props
          return renderChildComponents(propValue as ElementChild<PropsUnion>, sectionModel);
        } else {
          // Render primitive props directly
          return <div key={propKey}>{propValue}</div>;
        }
      })}
    </ElementDictionary>
  );

  return ChildElement;
};

export const Section = ({
  s,
  config,
}: {
  s: SectionModel;
  config: ElementConfig<PropsUnion>;
}) => {
  return (
    <ElementDictionary model={s} key={config.root}>
      {config.children.map((child, index) => (
        renderChildComponents(child, s)
      ))}
    </ElementDictionary>
  );
};


const About = (props: {s: SectionModel}) => {
    return <>
        <section className={props.s.name} id={`${props.s.name}`}> 
            <article>
                <header>
                    <h3> {props.s.header} </h3>
                </header>
                <main>
                    <p> {props.s.p} </p>
                </main>
            </article>
        </section>
    </>
};

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

const Sections = (props: { model: SectionModel[] }) =>
  props.model.map(
	(s) => ({
		header: <>
            <Section s={s} config={{
            name: 'header',
            root: 'section',
            children: [
                { type: 'header', props: { intrinsic: true, text: 'string', size: 1 } }
            ]
        }} />
        </>,

		about:<>
            <Section s={s} config={{
                name: 'about',
                root: 'section',
                children: [
                    { type: 'article', props: { 
                        intrinsic: false, 
                        text: 'string',
                        props: { 
                            header: { intrinsic: false, text: 'string', size: 3, } as HeaderProps,
                            main: { intrinsic: false, text: 'string', style: 'p' } as MainProps
                        } 
                      } as ArticleProps
                    }
                ]
              }}
            />
        </>,
		education: <>   
            <Section s={s} config={{
                name: 'education',
                root: 'section',
                children: [
                    { type: 'article', props: { intrinsic: false, text: 'string', props: {
                        
                    }}, }, // Main
                    { type: 'figure', props: { intrinsic: false, text: 'string', src: 'string', alt: 'string', title: 'string' } }, // Figure
                    { type: 'aside', props: { intrinsic: false, text: 'string', p: 'string' } }, // Aside
                    { type: 'footer', props: { intrinsic: false, text: 'string' } } // Footer
                ]
              }}
            />
        </>,
		experience: <>
            <Section s={s} config={{
                name: 'experience',
                root: 'section',
                children: [
                    { type: 'article', props: { intrinsic: false, text: 'string' } }, // Main
                    { type: 'anchor', props: { intrinsic: false, text: 'string', href: 'string', props: { img: { src: 'string', alt: 'string', title: 'string' } } } } // Anchor
                ]
              }}
            />
        </>,
		cv:<>
            <Section s={s} config={{
                name: 'cv',
                root: 'section',
                children: [
                    { type: 'article', props: { intrinsic: true, text: 'string', style: 'p' } }
                ]
              }}
            />
        </>,
		footer:<>
            <Section s={s} config={{
                name: 'footer',
                root: 'section',
                children: [
                    { type: 'footer', props: { intrinsic: false, text: 'string' } }
                ]
              }}
            />
        </>,
	  }[s.name])
  );


type BaseProps = { intrinsic: boolean; text: string };

type HeaderProps = BaseProps & {
  size: 1 | 2 | 3 | 4 | 5 | 6;
};
type FigureProps = BaseProps & {
  src: string;
  alt: string;
  title: string;
};
type MainProps = BaseProps & {
  style: 'p' | 'em' | 'strong' | 'small';
};
type AnchorProps = BaseProps & {
  href: string;
  props: {
    img: {
      src: string;
      alt: string;
      title: string;
    };
  };
};
type AsideProps = BaseProps & {
  p: string;
  text: string;
};
type FooterProps = BaseProps;
type ArticleProps = BaseProps & Partial<MainProps>;

type ElementProps<T extends PropsUnion> = {
  type: 'header' | 'figure' | 'article' | 'anchor' | 'aside' | 'footer';
  props?: T;
};

type ElementConfig<T extends PropsUnion> = {
  name: 'header' | 'about' | 'education' | 'experience' | 'cv' | 'footer';
  children: ElementChild<T>[];
  root: 'section';
};

// type ElementChild<T extends BaseProps> = ElementProps<T>;




type PropsUnion = BaseProps | HeaderProps | FigureProps | MainProps | AnchorProps | AsideProps | FooterProps | ArticleProps;

type ElementChild<T extends PropsUnion> = ElementProps<T>;
