import "./App.scss";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import ComponentData, { Content, Section as SectionModel } from "./model/componentData";
import { About, Cv, Education, Footer, Experience } from "./view/section";
import { Header } from "./view/section/header";


function App() {

const [data, setData] = useState<null | ComponentData>(null); 

  useEffect(() =>{ fetchContent(setData) },[]);

  if (data === null) return <div>Loading...</div>;
	return (
		<body className="app"  id="top">
				<article>
					<header className="article__header">
						<a href="#top" id="logo">
							<h3> {data?.nav[0].logo} </h3>
						</a>
    				<Navigation elements={data.nav} />
					</header>
					<main className="article__main">
						<article className="main">
							<Sections model={data.sections} />
						</article>
					</main>
				</article>
		</body>
	);
}
export default App;

const Sections = (props: { model: SectionModel[] }) =>
  props.model.map(
	(s) => ({
		header: 	  <Header s={s}/>,
		about: 	    <About s={s} />,
		education:  <Education s={s} />,
		experience: <Experience s={s} />,
		cv: 		    <Cv s={s} />,
		footer: 	  <Footer s={s} />,
	  }[s.name])
  );

const getComponentDataFromContent = (content: Content | null): ComponentData => {
  return {
    nav: content?.navigation.map((n) => {
      return  {
          type: n.icon == null ? "internal" : "external",
          href: n.href,
          text: n.text,
          icon: n.icon,
          target: n.target
      }
    }),
    sections: content?.sections // bunuda yaptik
  } as ComponentData;
}

const fetchContent = async (setData: React.Dispatch<React.SetStateAction<ComponentData | null>>) => {
  try
  {
    const response = await fetch(
      'http://localhost:5075/Content',
      { method : 'GET', headers : {  'Accept' :'application/json', },}
    );
    
    setData(
      getComponentDataFromContent(
        await response.json()
      )
    );
    
  }
  catch(e) {
    window.alert('Veri serverden gelemedi, sayfayi yenileyiniz lutfen, hata detaylari konsoldadir.');
    console.error(e);
  }
};