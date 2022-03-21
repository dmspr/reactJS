import React from "react";
import { Button } from 'reactstrap'
import "./style.scss"

export default function Homepage() {
    return (
        <div className="background">
            <div className="homepage-page">
                <div className="homepage-left">
                    <div className="left-top">
                        <img src={require('../../img/logo.png')} alt='logo' className="logo" />
                    </div>
                    <div className="left-bot">
                        <h2>Discover the</h2>
                        <h2>best furniture</h2>
                        <p>This is the best place to see furnitures to</p>
                        <p>make your home beatiful</p>
                        <div className="button">

                            <a href='/catalog' ><Button color="primary" className="btn-catalog ">Catalog</Button></a>


                            <a href='/login' ><Button className="btn-signin"> Sign In</Button></a>
                        </div>
                    </div>
                </div>
                <div className="homepage-right">
                    <img src={require('../../img/slider1.png')} alt="Furnituire" className="picture" />
                </div>
            </div>
        </div>


    )
}