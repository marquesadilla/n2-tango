import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import{ fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const Layout = (props) => {
    return  (
        <React.Fragment>
            <div className = "container">
                {props.children}
            </div>
            <footer>
                <div className="footerContainer">
                    <a href="https://www.instagram.com/batoonworld/" rel="noreferrer" target="_blank" className="iconLink">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                    <a href="https://twitter.com/batoonworld" rel="noreferrer" target="_blank" className="iconLink">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                    <a href="https://www.github.com/MBatoon1996" rel="noreferrer" target="_blank" className="iconLink">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </div>
                <p className="text-center">©2021 Marques Batoon</p>
            </footer>
        </React.Fragment>
    );
}

export default Layout;