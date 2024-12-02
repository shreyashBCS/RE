import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const CardComponent = () => {
    return (
        <div className="container mt-5 pt-5"> {/* Container for spacing */}
            <div className="row justify-content-center"> {/* Row for alignment */}
                <div className="col-md-4"> {/* First card column */}
                    <div className="card" style={{ width: '100%' }}> {/* Set width to 100% for responsiveness */}
                        <img
                            src="https://via.placeholder.com/150" // Placeholder image URL
                            className="card-img-top"
                            alt=''
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card Title 1</h5>
                            <p className="card-text">This is a description for Card 1.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"> {/* Second card column */}
                    <div className="card" style={{ width: '100%' }}>
                        <img
                            src="https://via.placeholder.com/150" // Placeholder image URL
                            className="card-img-top"
                            alt=''
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card Title 2</h5>
                            <p className="card-text">This is a description for Card 2.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"> {/* Third card column */}
                    <div className="card" style={{ width: '100%' }}>
                        <img
                            src="https://via.placeholder.com/150" // Placeholder image URL
                            className="card-img-top"
                            alt=''
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card Title 3</h5>
                            <p className="card-text">This is a description for Card 3.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;