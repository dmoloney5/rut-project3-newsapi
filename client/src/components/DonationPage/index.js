import React from 'react'
import coverImage from '../../assets/cover/thank-kindly-donation.jpg'

function DonationPage(){
    return (
        <section className="my-5">
          <h1 id="myprofile">Null and Void News would like to</h1>
    
          <div className="description">
           <p> </p>  {" "}
            
            <img 
              src={coverImage}
              className="my-2"
              style={{ width: "75%" }}
              alt="cover"
            />
          </div>
        </section>
      );
}

export default DonationPage

