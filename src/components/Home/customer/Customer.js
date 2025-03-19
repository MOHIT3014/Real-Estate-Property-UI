import React from 'react'
import './Customer.css'

const Customer = () => {
  return (
    <section className="homeSection" id="homeSection">
    <div className="homeWrapper">
        <div className="homeContent">
            <hr className="line"/>
                <h2>our happy homeowners!</h2>
                <div className="stars">
                    <i className="fa-solid fa-star " style={{color:"white"}}></i>
                    <i className="fa-solid fa-star " style={{color:"white"}}></i>
                    <i className="fa-solid fa-star " style={{color:"white"}}></i>
                    <i className="fa-solid fa-star" style={{color:"white"}}></i>
                    <i className="fa-solid fa-star " style={{color:"white"}}></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Aenean viverra sit odio id enim fusce.
                    Sed senectus vel diam nunc egestas in adipiscing quam egestas. Rutrum
                    laoreet in sit ultricies. Massa risus parturient et curabitur</p>
                <div className="ownerCard">
                    <img src="medias/Homeowner.png" alt=""/>
                        <h3>Musa Delimuza <br/>Realtor</h3>
                </div>
        </div>
        <div className="homeImage">
            <img src="medias/homeOwnerImage.png" alt=""/>
        </div>
    </div>
</section>
  )
}

export default Customer