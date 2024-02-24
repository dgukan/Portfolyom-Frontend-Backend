import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import _ from "./fragment";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { NavigationElement } from "../model/componentData";

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
                        <a href={n.href} target={n?.icon?.target}>
                        {(
                            {
                                linkedin: <FontAwesomeIcon icon={faLinkedinIn}/>,
                                github: <FontAwesomeIcon icon= {faGithub} />,
                                envelope: <FontAwesomeIcon icon={faEnvelope} />
                            }
                          [n.icon?.name as 'linkedin' | 'github' | 'envelope'])
                        }
                        </a>
                    </li>
                </_>)}
            </ul>
        </footer>
    </>;
};

export default Navigation;


