import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationElement } from "./model/componentData";
import { IconName, IconPrefix, IconProp, icon } from "@fortawesome/fontawesome-svg-core";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import _ from "./view/_";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Navigation = (params: { elements: NavigationElement[] }) => {
    // faLinkedin in prefix ve postfix olarak ayrilmasi gerek
    // bir programlama klasigi olan string manipulation(manipulasyonu) yapacan
    // prefix ve icon name'i as dedigimiz tipden gorduk ve yazdik. (mouse ile takip et gor)

return <>
        <nav className="responsive">
            <ul>
                {params.elements.filter(e => e.type === 'internal').map((n, i) => <_ key={`${n.type}-${i}`}>
                    <li>
                        <a href={`#${n.href}`}> {n.text} </a>
                    </li>
                </_>)}
            </ul>
        </nav>
        <footer>
            <ul>
                {params.elements.filter(e => e.type === 'external').map((n, i) => <_ key={`${n.type}-${i}`}>
                    <li>
                        <a href={n.href} target={n?.target}>
                            <SocialMedia model={[n.icon]}/>
                        </a>
                    </li>
                </_>)}
            </ul>
        </footer>
    </>;
};

export default Navigation;

const SocialMedia = (props: {model: NavigationElement[]}) => props.model.map(
    (s) => ({
        linkedin: <FontAwesomeIcon icon={faLinkedinIn}/>,
        githup: <FontAwesomeIcon icon= {faGithub} />,
        mail: <FontAwesomeIcon icon={faEnvelope} />
    }[s.icon])
)

