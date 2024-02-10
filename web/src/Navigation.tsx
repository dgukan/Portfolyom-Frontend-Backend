import { ComponentData } from "./data";


const Navigation = (params: {data: ComponentData}) => {
    function openMenu(event: React.MouseEvent<HTMLAnchorElement>): void {
        event.preventDefault();

        const link = document.getElementById("header__nav");
        if (link)
          link.classList.toggle("responsive");
    };

    return (
        <nav className="header__nav responsive">
            <ul>
                {params.data.headerListElements.map((hle) => (
                        <li>
                            <a href={hle.href}>
                                {hle.text}
                            </a>
                        </li>
                    ))
                }
                <li id="menu">
                    <a href="#" onClick={(hle:React.MouseEvent<HTMLAnchorElement>) => openMenu(hle)}>
                        <i className="fa fa-b0ars menu"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}


export default Navigation;