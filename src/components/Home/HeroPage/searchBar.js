import React from 'react'
import './heropage.css'
import { Link } from 'react-router-dom'

const searchBar = () => {
  return (
    <div className="FilterSection">
                <div className="ImageWrapper">
                    <img src="medias/heroImage.png" alt=""/>
                </div>
                <div className="filterBar">
                    <div className="SearchInput">
                        <label for="search">

                            <img src="medias/search_icon.svg" alt=""/>
                        </label>
                        <input type="text" placeholder="Search properties..." name="search"/>
                        <div>
                            <Link to="#" className="btn btn-filled">Search</Link>
                        </div>
                    </div>
                    <div className="SearchInput">
                        <label for="dropdown">

                            <img src="medias/location_icon.svg" alt=""/>
                        </label>
                        <select name="dropdown" id="dropdwn" placeholder="Location">
                            <option value="location"><p>Location</p></option>
                            <option value="location"><p>USA</p></option>
                            <option value="location"><p>EGYPT</p></option>
                            <option value="location"><p>USE</p></option>
                            <option value="location"><p>FRANCE</p></option>
                            <option value="location"><p>AUSTRALIA</p></option>
                            <option value="location"><p>RUSSIA</p></option>
                            <option value="location"><p>JAPAN</p></option>
                            <option value="location"><p>iNDIA</p></option>
                            <option value="location"><p>LONDON</p></option>
                        </select>
                        
                        


                    </div>
                    <div className="SearchInput">
                        <label for="dropdown">

                            <img src="medias/property-icon.svg" alt=""/>
                        </label>
                        <select name="dropdown" id="dropdwn" placeholder="Property">
                            <option value="location"><p>Propery   </p></option>
                            <option value="location"><p>3 BHK   </p></option>
                            <option value="location"><p>2 BHK</p></option>
                            <option value="location"><p>4 BHK</p></option>
                           
                        </select>
                        
                        


                    </div>
                    <div className="SearchInput">
                        <label for="dropdown">

                            <img src="medias/dollar-icon.svg" alt=""/>
                        </label>
                        <select name="dropdown" id="dropdwn" placeholder="Type">

                            <option value="location"><p>Type  </p></option>
                            <option value="location"><p>$15,000   </p></option>

                            <option value="location"><p>$4,500</p></option>
                            <option value="location"><p>$3,500</p></option>
                           
                        </select>
                        
                        


                    </div>
                </div>
            </div>
  )
}

export default searchBar
