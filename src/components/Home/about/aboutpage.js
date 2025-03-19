import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'
const aboutpage = () => {
    return (
        <section className="aboutSection" id="aboutSection">
            <div className="propertyWrapper">
                <div className="PropertyImage">
                    <img src="medias/property-image.png" alt=""/>
                </div>
                <div className="propertyContentWrapper">
                    <div className="yearWrapper">
                        <h2>10</h2>
                        <p>Years <br/>Experience</p>

                    </div>
                    <div className="propertyInfo">
                        <h2>Your trusted real estate partner for finding
                            the ideal property</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Nunc morbi et tristique
                            senectus quam. Risus et in euismod eleifend mattis fames maecenas
                            eu semper. Diam pulvinar gravida varius blandit.</p>
                    </div>
                    <div className="moreAbout">
                        <Link to="#" className="btn btn-filled linkTag">MORE ABOUT US</Link>
                        <Link to="#" className="btn btn-filled rounded linkTag">
                        <img src="medias/arrow_icon.svg" alt=""/></Link>
                    </div>
                </div>

            </div>
            <h2 className="backText">about us</h2>
        </section>
    )
}

export default aboutpage
