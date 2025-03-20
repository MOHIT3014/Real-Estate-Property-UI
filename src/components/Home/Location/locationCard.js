import React from 'react'
import './locationCard.css'
import { Location } from '../../../data'


const locationCard = () => {
    return (
        <div className="locationWrapper" id="locationWrapper">
            <div className="locationCard">
                {
                    Location.map((item) => {
                        return (
                            <div className="locationImage" key={item.id}>
                                <img src={item.image} alt="" />
                            </div>
                        )
                    }
                    )}


            </div>
        </div>
    )
}

export default locationCard
