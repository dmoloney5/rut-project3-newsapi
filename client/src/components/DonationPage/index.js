import React from 'react'
import coverImage from '../../assets/cover/thank-kindly-donation.jpg'


function DonationPage(){
    return (
        <section className="my-5">
          
          <div className="row g-0">
          <div className="col-sm-6 col-md-6">
           <p>Null and Void News is dedicated to delivering all the top stories and most accurate news around the world.
             Our team is determined to give our users the best digital newspaper experience on the web. Your support will undoubtably aide 
            in our efforts to achieve our goals. On the behalf of the full team here are Null and Void News we would like to:  </p>  {" "}
            </div>
            <div className="col-6 col-md-6">
            <img 
              src={coverImage}
              className="my-2"
              style={{ width: "100%" }}
              alt="cover"
            />
          </div>
          </div>
          </section>
        
      );
}

export default DonationPage