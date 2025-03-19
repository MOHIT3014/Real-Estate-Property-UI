import React from 'react'
import { Link } from 'react-router-dom'
import './EmployeeCard.css'
const EmployeeCard = () => {
    return (
        <section className="profileWrapper" id="profileWrapper">
            <div className="profileContent">
                <div className="aboutProfile">
                    <div className="profileImage">
                        <img src="medias/michael.png" alt="" />
                    </div>
                    <div className="profileDetails">
                        <div className="name">
                            <h2>Michael brown <br/> <span>Luxury Property Expert</span></h2>
                        </div>
                        <div className="socialLink">
                            <Link to="#" className="btn btn-white">facebook</Link>
                            <Link to="#" className="btn  btn-white rounded"><img src="medias/facebook.svg" alt="" /></Link>
                        </div>
                    </div>
                </div>

                <div className="aboutProfile">
                    <div className="profileImage">
                        <img src="medias/sarah.png" alt="" />
                    </div>
                    <div className="profileDetails">
                        <div className="name">
                            <h2>Sarah johnson <br/> <span>Real Estate Specialist</span></h2>
                        </div>
                        <div className="socialLink">
                            <Link to="#" className="btn btn-white">Linkedin</Link>
                            <Link to="#" className="btn  btn-white rounded"><img src="medias/linkedin.svg" alt="" /></Link>
                        </div>
                    </div>
                </div>

                <div className="aboutProfile">
                    <div className="profileImage">
                        <img src="medias/davud.png" alt="" />
                    </div>
                    <div className="profileDetails">
                        <div className="name">
                            <h2>David wilson <br/> <span>Property Consultant</span></h2>
                        </div>
                        <div className="socialLink">
                            <Link to="#" className="btn btn-white">twitter</Link>
                            <Link to="#" className="btn btn-white rounded"><img src="medias/twiiter.png" alt="" /></Link>
                        </div>
                    </div>
                </div>

                <div className="aboutProfile">
                    <div className="profileImage">
                        <img src="medias/emily.png" alt="" />
                    </div>
                    <div className="profileDetails">
                        <div className="name">
                            <h2>Emily davis<br/> <span>Client Relations Manager</span></h2>
                        </div>
                        <div className="socialLink">
                            <Link to="#" className="btn btn-white">linkedin</Link>
                            <Link to="#" className="btn btn-white rounded"><img src="medias/linkedin.svg" alt="" /></Link>
                        </div>
                    </div>
                </div>

                <div className="aboutProfile">
                    <div className="profileImage">
                        <img src="medias/robert.png" alt="" />
                    </div>
                    <div className="profileDetails">
                        <div className="name">
                            <h2>Robert lee<br/> <span>Property Agent</span></h2>
                        </div>
                        <div className="socialLink">
                            <Link to="#" className="btn btn-white">instagram</Link>
                            <Link to="#" className="btn btn-white rounded"><img src="medias/instagram.svg" alt="" /></Link>
                        </div>
                    </div>
                </div>

                <div className="aboutProfile">
                    <div className="profileImage">
                        <img src="medias/garcia.png" alt="" />
                    </div>
                    <div className="profileDetails">
                        <div className="name">
                            <h2>Laura garcia<br/> <span>Real Estate Broker</span></h2>
                        </div>
                        <div className="socialLink">
                            <Link to="#" className="btn btn-white">Facebook</Link>
                            <Link to="#" className="btn btn-white rounded"><img src="medias/facebook.svg" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmployeeCard
