import React from 'react';
import './styles.css';
import imgBannerOne from '../../assets/img/imgBannerOne.jpg';

const BannerOne = () => {
    return ( 
        <div className="bannerOne">
            <div className="bannerOne__contain">
                <img className="bannerOne__image" src={imgBannerOne} alt="bannerOne"/>
                <div className="bannerOne__text">
                    <h4 className="bannerOne__text_title">Get personal learning recommendations</h4>
                    <p className="bannerOne__text_desc">Answer a few questions for your top picks</p>
                    <button className="btnPrimary">Get started</button>
                </div>
            </div>
        </div>
     );
}
 
export default BannerOne;