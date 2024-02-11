import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentData } from "./data";
import { Navigation as NavigationModel } from "./model/componentData";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useState } from "react";

const Navigation = (params: { data: ComponentData }) => {
    // useeffect yada state neden gerekti anlamadigini sor
    const [internalNavigation, setInternalNavigation] = useState<NavigationModel[]>([]);
    const [externalNavigation, setExternalNavigation] = useState<NavigationModel[]>([]);
    useEffect(() => {
        const internalNav: NavigationModel[] = [];
        const externalNav: NavigationModel[] = [];

        params.data.nav.forEach((n) => {
            if (n.icon == null) {
                internalNav.push(n);
            } else {
                externalNav.push(n);
            }
        });

        setInternalNavigation(internalNav);
        setExternalNavigation(externalNav);
    }, [params.data.nav]);

    console.log({
        internalNavigation,
        externalNavigation
    });

    return <>
        <nav className="responsive">
            <ul>
                {internalNavigation.map((n) => <>
                    <li>
                        <a href={`#${n.href}`}> {n.text} </a>
                    </li>
                </>)}

            </ul>
        </nav>
        <footer>
            <ul>
                {externalNavigation.map((socialMediaIcon) => <>
                    <li>
                        <a href={socialMediaIcon.href} target={socialMediaIcon.icon?.target}>
                            <FontAwesomeIcon icon={socialMediaIcon.icon?.icon as IconProp} />
                        </a>
                    </li>
                </>)}
            </ul>
        </footer>
    </>;
};

export default Navigation;

    // {/* TODO: Responsive menu */}
    // function openMenu(event: React.MouseEvent<HTMLAnchorElement>): void {
    //     event.preventDefault();

    //     const link = document.getElementById("header__nav");
    //     if (link)
    //       link.classList.toggle("responsive");
    // };
                // {/* TODO: Responsive menu */}
                // {/* <li id="menu">
                //     <a href="#" onClick={(hle:React.MouseEvent<HTMLAnchorElement>) => openMenu(hle)}>
                //         <i className="fa fa-b0ars menu"></i>
                //     </a>
                // </li> */}