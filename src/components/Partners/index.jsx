import React from 'react';
import './styles.css';
import  imgPartners from '../../assets/img/imgPartners.png';

const Partners = () => {
    return ( 
        <div className="partners">
            <h5>Trusted by companies of all sizes</h5>
            <img src={imgPartners} alt="partners"/>
        </div>
     );
}
 
export default Partners;