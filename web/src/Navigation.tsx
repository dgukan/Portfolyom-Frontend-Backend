import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationElement } from "./model/componentData";
import { IconName, IconPrefix, IconProp } from "@fortawesome/fontawesome-svg-core";
import _ from "./view/_";

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
                            <FontAwesomeIcon icon={[
                                `${n.icon.substring(0, 2)}r` as IconPrefix, 
                                n.icon.substring(2, n.icon.length) as IconName]} />
                        </a>
                    </li>
                </_>)}
            </ul>
        </footer>
    </>;
};

export default Navigation;

