import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationElement } from "./model/componentData";
import {  } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import _ from "./view/_";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Navigation = (params: { elements: NavigationElement[] }) => {
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
                        {(
                            {
                                linkedin: <FontAwesomeIcon icon={faLinkedinIn}/>,
                                githup: <FontAwesomeIcon icon= {faGithub} />,
                                mail: <FontAwesomeIcon icon={faEnvelope} />
                            }
                          [n.icon])
                        }
                        </a>
                    </li>
                </_>)}
            </ul>
        </footer>
    </>;
};

export default Navigation;


