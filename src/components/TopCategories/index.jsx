import React from 'react';
import './styles.css';
import categoryDesign from '../../assets/img/categoryDesign.png';
import categoryWeb from '../../assets/img/categoryWeb.png';
import categoryPhotography from '../../assets/img/categoryPhotography.png';
import categoryBusiness from '../../assets/img/categoryBusiness.png';
import categoryMarketing from '../../assets/img/categoryMarketing.png';
import categoryIT from '../../assets/img/categoryIT.png';
import categoryMusic from '../../assets/img/categoryMusic.png';
import categoryPersonal from '../../assets/img/categoryPersonal.png';

const TopCategories = () => {
    return ( 
        <div className="topCategories">
            <h5 className="topCategories__title">Top Categories</h5>
            <div className="grid-container">
                <div className="grid-item">
                    <img src={categoryDesign} alt=""/>
                    <p>Design</p>
                </div>
                <div className="grid-item">
                    <img src={categoryWeb} alt=""/>
                    <p>Web Developer</p>
                </div>
                <div className="grid-item">
                    <img src={categoryPhotography} alt=""/>
                    <p>Photography</p>
                </div>
                <div className="grid-item">
                    <img src={categoryBusiness} alt=""/>
                    <p>Business</p>
                </div>
                <div className="grid-item">
                    <img src={categoryMarketing} alt=""/>
                    <p>Marketing</p>
                </div>
                <div className="grid-item">
                    <img src={categoryIT} alt=""/>
                    <p>IT & Software</p>
                </div>
                <div className="grid-item">
                    <img src={categoryMusic} alt=""/>
                    <p>Music</p>
                </div>
                <div className="grid-item">
                    <img src={categoryPersonal} alt=""/>
                    <p>Personal Development</p>
                </div>
            </div>
        </div>
     );
}
 
export default TopCategories;