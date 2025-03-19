import React from 'react'
// import { Link } from 'react-router-dom'
import './imageCard.css'

const imageCard = () => {
    return (
        <div className="cardWrapper" id="cardWrapper">
            <div className="card">
                <div className="cardIcon">
                    <img src="medias/warehouse-icon.svg" alt=""/>
                </div>
                <div>
                    <h4>Warehouse</h4>
                    <p>6 Properties</p>
                </div>
            </div>

            <div className="card">
                <div className="cardIcon">
                    <img src="medias/apartment-icon.svg" alt=""/>
                </div>
                <div>

                    <h4>Apartment</h4>
                    <p>8 Properties</p>
                </div>
            </div>

            <div className="card">
                <div className="cardIcon">
                    <img src="medias/solo-shop-icon.svg" alt=""/>
                </div>
                <div>
                    <h4>Solo Shop</h4>
                    <p>3 Properties</p>
                </div>
            </div>

            <div className="card">
                <div className="cardIcon">
                    <img src="medias/commercial-icon.svg" alt=""/>
                </div>
                <div><h4>Commercial</h4>
                    <p>6 Properties</p></div>
            </div>

            <div className="card">
                <div className="cardIcon">
                    <img src="medias/township-icon.svg" alt=""/>
                </div>
                <div>
                    <h4>TownShip</h4>
                    <p>7 Properties</p>
                </div>
            </div>

            <div className="card">
                <div className="cardIcon">
                    <img src="medias/villa-icon.svg" alt=""/>
                </div>
                <div>
                    <h4>Villa</h4>
                    <p>2 Properties</p>
                </div>
            </div>

        </div>
    )
}

export default imageCard
