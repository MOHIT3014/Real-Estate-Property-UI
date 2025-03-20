import React from 'react'
import { Link } from 'react-router-dom'
import './EmployeeCard.css'
import { employees } from '../../../data'
const EmployeeCard = () => {
    return (
        <section className="profileWrapper" id="profileWrapper">
            <div className="profileContent">
                {
                    employees.map((items) => {
                        return (
                            <div className="aboutProfile" key={items.id}>
                                <div className="profileImage">
                                    <img src={items.profile} alt="" />
                                </div>
                                <div className="profileDetails">
                                    <div className="name">
                                        <h2>{items.name} <br /> <span>{items.position}</span></h2>
                                    </div>
                                    <div className="socialLink">
                                        <Link to="#" className="btn btn-white">{items.social}</Link>
                                        <Link to="#" className="btn  btn-white rounded"><img src={items.socialIcon} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                
            </div>
        </section>
    )
}

export default EmployeeCard
