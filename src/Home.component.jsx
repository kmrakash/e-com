import React from 'react';
import './homepage.styles.scss';

const Home = () => (
    <div  className="homepage">
        <div className="directory-menu">
            <div className="menu-items">
                <div className="content">
                    <h1 className="title">Hats</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-items">
                <div className="content">
                    <h1 className="title">Jackets</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-items">
                <div className="content">
                    <h1 className="title">Shirts</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-items">
                <div className="content">
                    <h1 className="title">Women</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-items">
                <div className="content">
                    <h1 className="title">Men</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

        </div>
    </div>
);

export default Home;