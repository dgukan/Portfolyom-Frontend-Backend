import { data } from "./data";

const Navigation = () => {
    function openMenu(event: React.MouseEvent<HTMLAnchorElement>): void {
        event.preventDefault();

        const link = document.getElementById("main-header__nav");
        if (link)
          link.classList.toggle("responsive");
    };

    return (
        <nav id="main-header__nav" className="responsive">
            <ul id="main-header__nav__items">
                {
                    data.headerListElements.map((hle) => (
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