import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const AboutSection = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row align-items-start"> {/* Row for alignment */}
                {/* About Section */}
                <div className="col-md-4 ms-5"> {/* Adjust column size as needed */}
                    <h2>About</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, provident.</p>
                    <button className="btn btn-primary">CLICK ME</button>
                </div>

                {/* Photo and Input Fields Side by Side */}
                <div className="col-md-4 d-flex align-items-center">
                    {/* Image */}
                    <div className="me-3"> {/* Margin to the right of the image */}
                        <img
                            src="https://via.placeholder.com/400" // Replace with your image URL
                            alt="About"
                            className="img-fluid" // Makes the image responsive
                            style={{ maxWidth: '260px' }} // Optional: control image size
                        />
                    </div>

                    {/* Input Fields */}
                    <div className='custom-margin3'>
                        <input placeholder="name" type="text" />
                        <input placeholder="password" type="password" className='mt-4' />
                    </div>
                </div>

                {/* Circular Images */}
                <div className="col-md-4 custom-margin2">
                    <div className="d-flex justify-content-center mb-3">
                        <div className="rounded-circle border" style={{ width: '100px', height: '100px', margin: '10px' }}>
                            <img src="https://via.placeholder.com/100" alt="Circle 1" className="img-fluid rounded-circle" />
                        </div>
                        <div className="rounded-circle border" style={{ width: '100px', height: '100px', margin: '10px' }}>
                            <img src="https://via.placeholder.com/100" alt="Circle 2" className="img-fluid rounded-circle" />
                        </div>
                        <div className="rounded-circle border" style={{ width: '100px', height: '100px', margin: '10px' }}>
                            <img src="https://via.placeholder.com/100" alt="Circle 3" className="img-fluid rounded-circle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
