import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <header>
            <div className="innerHeaderWrapper">

                <div className="logoWrapper">
                    <Link to="#"className='linkTag'>
                        <img src="medias/logo.svg" alt="" />
                    </Link>
                </div>

                <div className="navbarWrapper">
                    <nav>
                        <ul>
                            <li><Link to="#"className='linkTag'>Home</Link></li>
                            <li><Link to="#"className='linkTag'>All Pages</Link></li>
                            <li><Link to="#"className='linkTag'>About Us</Link></li>
                            <li><Link to="#"className='linkTag'>Property</Link></li>
                            <li><Link to="#"className='linkTag'>News</Link></li>
                        </ul>
                    </nav>
                    <div className="callToAction">
                        <Link to="#"className='linkTag'>
                            <div className="cardbtn">
                                <img src="medias/cart_icon.svg" alt="" />
                                <div className="cardCount">
                                    <p>0</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="#" className="btn btn-filled linkTag disNone">Contact Us</Link>
                        <Link to="#" className="btn btn-filled rounded linkTag disNone">
                            <img src="medias/arrow_icon.svg" alt="" />
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
