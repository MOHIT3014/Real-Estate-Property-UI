import React from 'react'
// import { Link } from 'react-router-dom'
import './Marketing.css'
import { Market } from '../../../data'
const Marketing = () => {
    return (
        <div className="marketingSection" id="marketingSection">
            <div className="marketingWrapper">
                <div className="marketingContent">
                    <h2>Why We Stand Out
                        in the Real Estate Market</h2>
                </div>
                <div className="marketingCard">
                    {
                        Market.map((item) => {
                            return (
                                <div className="marketCard" key={item.id}>
                                    <div className="marketIcon">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Marketing
