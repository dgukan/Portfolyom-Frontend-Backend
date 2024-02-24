import "./App.scss";
import Navigation from "./view/navigation";
import Data from "./data";
import { Section } from "./view/section";

function App() {
	const data = Data.ModelData;
	const { content } = data;
	const { sections } = content;

	return (
		<body className="app" id="top">
				<article>
					<header className="article__header">
						<a href="#top" id="logo">
							<h3> {data?.content.logo} </h3>
						</a>
    				<Navigation elements={data.content.navigation.map(n=>({type: n.icon ? 'external' : 'internal', ...n}))} />
					</header>
					<main className="article__main">
						<article className="main">
                <> {sections.map(Section)} </>
            </article>
					</main>
				</article>
		</body>
	);
}
export default App;
