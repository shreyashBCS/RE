import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-light py-4">
            <div className="container">
                <div className="row text-center text-md-start">
                    {/* Column 1: COMPANIES */}
                    <div className="col-md-4">
                        <h5 className="mb-3 fw-bold">COMPANIES</h5>
                        <ul className="list-unstyled">
                            <li>
                                <div className="d-flex align-items-center">
                                    <span className="me-2">●</span> Connect your world
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <span className="me-2">●</span> Responsible facilities
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <span className="me-2">●</span> Best agricultural base
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: CONTACT INFORMATION */}
                    <div className="col-md-4">
                        <h5 className="mb-3 fw-bold">CONTACT INFORMATION</h5>
                        <ul className="list-unstyled">
                            <li>
                                <div className="d-flex align-items-center">
                                    <span className="me-2">📞</span> 001122 3344
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <span className="me-2">✉️</span> info@example.com
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <span className="me-2">📍</span> Email 558
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: FOOTER */}
                    <div className="col-md-4">
                        <h5 className="mb-3 fw-bold"></h5>
                        <p>Stay in touch with us</p>
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <a href="#" className="me-3 text-dark">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="me-3 text-dark">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="me-3 text-dark">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <button className="btn btn-dark mt-3">Send a Query</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
