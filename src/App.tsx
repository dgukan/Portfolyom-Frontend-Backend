import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { data } from './data';
import Navigation from './Navigation';
import Body from './Body';
import MyComponent from './myComponent';

function App() {
    return (
        <div className="App">
            <div id="top">
                <main id="main">
                    <header id="main-header">
                        <a href="#top" id="logo">
                            <h3>
                                {data.content.logo}
                            </h3>
                        </a>
                        <Navigation/>
                        <footer id="main-header__footer">
                            <ul id="main-header__footer_ul">
                                {
                                    data.socialMediaIcons.map((socialMediaIcon) => (
                                        <li>
                                            <a href={socialMediaIcon.href} target={socialMediaIcon.target}>
                                                <FontAwesomeIcon icon={socialMediaIcon.icon}/>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </footer>
                    </header>
                   <Body data={data}/>
                   Egzersiz:
                   <MyComponent sayilar={[1, 2, 3, 4, 5]}/>
                </main>
            </div>
        </div>
    );
}

export default App;
