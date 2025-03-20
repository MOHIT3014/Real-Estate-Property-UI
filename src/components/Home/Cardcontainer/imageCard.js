import React from 'react'
// import { Link } from 'react-router-dom'
import './imageCard.css'
import { PropertyTypes } from '../../../data'

const imageCard = () => {
    return (
        <div className="cardWrapper" id="cardWrapper">
            {
                PropertyTypes.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <div className="cardIcon">
                                <img src={item.icon} alt="" />
                            </div>
                            <div>

                                <h4>{item.name}</h4>
                                <p>{item.property}</p>
                            </div>
                        </div>

                    )
                })}
        </div>


    )
}

export default imageCard
