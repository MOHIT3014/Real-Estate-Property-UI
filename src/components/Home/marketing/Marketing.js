import React from 'react'
// import { Link } from 'react-router-dom'
import './Marketing.css'
const Marketing = () => {
    return (
        <div className="marketingSection" id="marketingSection">
            <div className="marketingWrapper">
                <div className="marketingContent">
                    <h2>Why We Stand Out
                        in the Real Estate Market</h2>
                </div>
                <div className="marketingCard">
                    <div className="marketCard">
                        <div className="marketIcon">
                            <img src="medias/agent-icon.svg" alt=""/>
                        </div>
                        <h3>Experienced agents</h3>
                        <p>Lorem ipsum dolor sit amet onsectetur.
                            Nunc morbi et tristique senectus quam.
                            Risus et in euismod eleifend.</p>
                    </div>

                    <div className="marketCard">
                        <div className="marketIcon">
                            <img src="medias/service-icon.svg" alt=""/>
                        </div>
                        <h3>Personalized service</h3>
                        <p>Lorem ipsum dolor sit amet onsectetur.
                            Nunc morbi et tristique senectus quam.
                            Risus et in euismod eleifend.</p>
                    </div>

                    <div className="marketCard">
                        <div className="marketIcon">
                            <img src="medias/comprehensive-icon.svg" alt=""/>
                        </div>
                        <h3>Comprehensive listings</h3>
                        <p>Lorem ipsum dolor sit amet onsectetur.
                            Nunc morbi et tristique senectus quam.
                            Risus et in euismod eleifend.</p>
                    </div>

                    <div className="marketCard">
                        <div className="marketIcon">
                            <img src="medias/market-icon.svg" alt=""/>
                        </div>
                        <h3>Market insights</h3>
                        <p>Lorem ipsum dolor sit amet onsectetur.
                            Nunc morbi et tristique senectus quam.
                            Risus et in euismod eleifend.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketing
