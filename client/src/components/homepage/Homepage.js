import React from "react";
import coverImage from "../../../../assets/istockphoto.jpg"

function Homepage() {
    <section>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> 
             <div className="row">
                    {
                      news.map((value, index) => {
                            return (
                                <div key={index} className="col-4">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={value.urlToImage} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.description}</p>
                                            <a href="#" className="btn btn-primary">Main</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                </section>
    };
export default Homepage;