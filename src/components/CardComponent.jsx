import React from 'react';
import { Link } from 'react-router-dom';
import rectangle from '../img/poto.JPG'

const CardComponent = () => {
    return (
        <div className="container mt-3" style={{ backgroundColor: "#A3D8ED" }}>
            <div className="jumbotron" style={{ backgroundColor: "#A3D8ED" }}>
                <div className="container row mx-auto">
                    <div className="card-group">
                        <div className="card mr-3" style={{ borderRadius: "20px" }}>
                            <img className="card-img-top" src="..." alt="" />
                            <div className="card-body">
                                <h5 className="card-title text-center" style={{ fontFamily: "poppins, sans-serif", fontSize: "24px", fontWeight: "bold" }}>PROYEK</h5>
                                <div className="text-center">
                                    <img src={rectangle} className="rounded" style={{ width: "100%" }} alt="" />
                                </div>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quam alias ducimus unde possimus quisquam ipsam dolorem explicabo officia accusantium, voluptatibus, libero sit velit quia nemo odio mollitia aut repudiandae.</p>
                            </div>
                        </div>

                        <div className="card mr-3" style={{ borderRadius: "20px" }} >
                            <img className="card-img-top" src="..." alt="" />
                            <div className="card-body">
                                <h5 className="card-title text-center" style={{ fontFamily: "poppins, sans-serif", fontSize: "24px", fontWeight: "bold" }}>Card title</h5>
                                <div className="text-center">
                                    <img src={rectangle} className="rounded" style={{ width: "100%" }} alt="" />
                                </div>
                                <p className="card-text" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias modi iste animi delectus veniam obcaecati esse, nisi aut minima, non sit reprehenderit, nam quos dignissimos ipsum rerum! Provident, eos placeat?</p>
                                <Link href="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                        <div className="card mr-3" style={{ borderRadius: "20px" }} >
                            <img className="card-img-top" src="..." alt="" />
                            <div className="card-body">
                                <h5 className="card-title text-center" style={{ fontFamily: "poppins, sans-serif", fontSize: "24px", fontWeight: "bold" }}>Card title</h5>
                                <div className="text-center">
                                    <img src={rectangle} className="rounded" style={{ width: "100%" }} alt="" />
                                </div>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa maxime qui sit nobis consectetur at amet doloremque totam consequuntur placeat labore est nesciunt cupiditate neque harum iusto rerum, facere sapiente.</p>
                                <Link href="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardComponent
