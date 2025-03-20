import React from 'react'
import { Link } from 'react-router-dom'
import './imageCard.css'
import { Property } from '../../../data'

const DetailingCards = () => {
    return (
        
        <section className="PropertyCardSection" id="PropertyCardSection">
                <div className="propertyListening">
                    <div className="listeningHeading">
                        <h2>Properties Listing</h2>
                    </div>
                    <div className="PropertyCard">
                        {Property.map((item) => (
                            <div className="PropertyCardWrapper" key={item.id}>
                                <div className="propertyImage">
                                    <img src={item.image} alt=" "/>
                                    <Link to="#" className="rentTag">
                                        {item.tag}
                                    </Link>
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    )
}

export default DetailingCards
