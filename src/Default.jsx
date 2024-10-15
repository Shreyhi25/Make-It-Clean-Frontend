import React from 'react';
import './Default.css';

export default function Default() {
  return (
    <div>
      <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'black' , width:1536}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
                  <span className="display-1 fw-bold" style={{ color: 'white' }}>4</span>
                  <i className="bi bi-exclamation-circle-fill text-danger display-4"></i>
                  <span className="display-1 fw-bold bsb-flip-h" style={{ color: 'white' }}>4</span>
                </h2>
                <h3 className="h2 mb-2" style={{ color: 'white' }}>Oops! You're lost.</h3>
                <p className="mb-5" style={{ color: 'white' }}>The page you are looking for was not found.</p>
                <a className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0" href="#!" role="button">Back to Home</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
