import React from 'react'
import { Link } from 'react-router-dom'
import './ConnectionCard.css'

const ConnectionCard = () => {
    return (
        <div className="connectionWrapper">
            <div className="connectContent">
                <div className="waySection">
                    <h3>Don't Wait, Act Now!</h3>
                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_199_3026)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5185 6.37362L4.36328 15.1235L3.61328 13.8245L18.7685 5.07458L19.5185 6.37362Z" fill="#002F6C" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1193 5.44951C15.0644 7.21326 14.1192 11.341 15.7731 14.2057L16.1481 14.8553L17.4471 14.1053L17.0721 13.4557C15.8164 11.2807 16.5593 8.08225 18.8693 6.74855L19.5185 6.37374L18.7685 5.07471L18.1193 5.44951Z" fill="#002F6C" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8695 6.74848C15.8146 8.51223 11.7672 7.26694 10.1133 4.40221L9.73828 3.75269L11.0373 3.00269L11.4123 3.65221C12.6681 5.8273 15.8095 6.78314 18.1195 5.44944L18.7687 5.07464L19.5187 6.37368L18.8695 6.74848Z" fill="#002F6C" />
                        </g>
                        <defs>
                            <clipPath id="clip0_199_3026">
                                <rect width="22" height="20" fill="white" transform="translate(0.566895 0.0986328)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <h2>Connect with Our Real Estate Team Today</h2>
                <input className="btn" type="text" placeholder="Enter your email address"/>
                    <div className="submitBtn">
                        <Link to="#" className="btn btn-filled">submit</Link>
                        <Link to="#" className="btn btn-filled rounded">
                        <img src="medias/arrow_icon.svg" alt=""/>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default ConnectionCard
