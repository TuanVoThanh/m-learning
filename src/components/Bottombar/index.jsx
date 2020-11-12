import React from 'react';
import './styles.css';
import {ReactComponent as LogoWhite} from '../../assets/svg/m_learning_logo_white.svg';

const Bottombar = () => {
    return ( 
        <div className="bottombar">
            <div className="bottombar_container">
                <LogoWhite />
                <p>© 2020 M-learning.</p>
            </div>
        </div>
     );
}
 
export default Bottombar;