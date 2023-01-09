import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import{ fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const Layout = (props) => {
    return  (
        <React.Fragment>
            <nav>
                <Link to="/"><span className="nav-header"><h1>N2単語</h1></span></Link>
            </nav>
            <div className = "container">
                {props.children}
            </div>
            <hr className="footerDivider"></hr>
            <footer>
                <div className="footerContainer">
                    <a href="https://www.instagram.com/batoonworld/" rel="noreferrer" target="_blank" className="iconLink">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                    <a href="https://twitter.com/batoonworld" rel="noreferrer" target="_blank" className="iconLink">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                    <a href="https://github.com/marquesadilla" rel="noreferrer" target="_blank" className="iconLink">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </div>
                <p className="text-center">©2023 Marques Batoon</p>
            </footer>
        </React.Fragment>
    );
}

export default Layout;