import React from 'react'
import { Link } from 'react-router-dom'
import './imageCard.css'

const DetailingCards = () => {
    return (
        <section className="PropertyCardSection" id="PropertyCardSection">
            <div className="propertyListening">
                <div className="listeningHeading">
                    <h2>properties listening</h2>
                </div>
                <div className="PropertyCard">
                    <div className="PropertyCardWrapper">
                        <div className="propertyImage">
                            <img src="medias/cedar-villa.png" alt="" />
                            <Link to="#" className="rentTag">For rent</Link>
                        </div>
                        <h2>Cedar ridge villa</h2>
                        <p>3 Bedrooms | 3 Bathrooms | 3500 Sq.Ft</p>
                    </div>

                    <div className="PropertyCardWrapper">
                        <div className="propertyImage">
                            <img src="medias/maple-ridge.png" alt="" />
                                <Link to="#" className="rentTag">For sale</Link>
                        </div>
                        <h2>Maple ridge villas</h2>
                        <p>2 Bedrooms | 1 Bathrooms | 1400 Sq.Ft</p>
                    </div>

                    <div className="PropertyCardWrapper">
                        <div className="propertyImage">
                            <img src="medias/white-villa.png" alt=""/>
                                <Link to="#" className="rentTag">For buy</Link>
                        </div>
                        <h2>White villa</h2>
                        <p>3 Bedrooms | 4 Bathrooms | 4000 Sq.Ft</p>
                    </div>

                    <div className="PropertyCardWrapper">
                        <div className="propertyImage">
                            <img src="medias/archer-house.png" alt="" />
                                <Link to="#" className="rentTag">For rent</Link>
                        </div>
                        <h2>Archer house</h2>
                        <p>5 Bedrooms | 6 Bathrooms | 4500 Sq.Ft</p>
                    </div>

                    <div className="PropertyCardWrapper">
                        <div className="propertyImage">
                            <img src="medias/villa-archeetype.png" alt=""/>
                                <Link to="#" className="rentTag">For buy</Link>
                        </div>
                        <h2>Villa ArcheType</h2>
                        <p>2 Bedrooms | 1 Bathrooms | 1200 Sq.Ft</p>
                    </div>

                    <div className="PropertyCardWrapper">
                        <div className="propertyImage">
                            <img src="medias/bookside.png" alt="" />
                                <Link to="#" className="rentTag">For sale</Link>
                        </div>
                        <h2>Brookside manor</h2>
                        <p>3 Bedrooms | 2 Bathrooms | 1800 Sq.Ft</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailingCards
