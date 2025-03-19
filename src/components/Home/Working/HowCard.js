import React from 'react'
import { Link } from 'react-router-dom'
import './HowCard.css'

const HowCard = () => {
    return (
        <div className="howWrapper" id="howWrapper">
            <div className="howWrapperContent">
                <h2>how it works</h2>
            </div>

            <div className="howCardContainer">
                <div className="cardContent">
                    <div className="cardTop">
                        <div className="stepTag">
                            <div className="tagging">
                                <Link to="#" className="tag">Step</Link>
                                <Link to="#" className="tag rounded">01</Link>
                            </div>
                            <hr className="verticalLine"/>


                        </div>

                        <div className="howCardImage">
                            <img src="medias/worklocation.png" alt=""/>
                        </div>
                    </div>
                    <div className="cardHeading">
                        <h2>Search property in your location</h2>
                        <p>Rutrum laoreet in sit ultricies. Massa risus parturient.</p>
                    </div>
                </div>

                <div className="cardContent">
                    <div className="cardTop">
                        <div className="stepTag">
                            <div className="tagging">
                                <Link to="#" className="tag">Step</Link>
                                <Link to="#" className="tag rounded">02</Link>
                            </div>
                            <hr className="verticalLine"/>


                        </div>

                        <div className="howCardImage">
                            <img src="medias/officelocation.png" alt=""/>
                        </div>
                    </div>
                    <div className="cardHeading">
                        <h2>Make a visit appointment</h2>
                        <p>Rutrum laoreet in sit ultricies. Massa risus parturient.</p>
                    </div>
                </div>

                <div className="cardContent">
                    <div className="cardTop">
                        <div className="stepTag">
                            <div className="tagging">
                                <Link to="#" className="tag">Step</Link>
                                <Link to="#" className="tag rounded">03</Link>
                            </div>
                            <hr className="verticalLine"/>


                        </div>

                        <div className="howCardImage">
                            <img src="medias/dreamlocation.png" alt=""/>
                        </div>
                    </div>
                    <div className="cardHeading">
                        <h2>Get your dream property</h2>
                        <p>Rutrum laoreet in sit ultricies. Massa risus parturient.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowCard
