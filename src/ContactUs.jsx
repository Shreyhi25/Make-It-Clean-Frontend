import React, { useState } from 'react';
import axios from 'axios';
import Nav_Bar from './Nav_Bar';
import Footer from './Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    complaint: '',
    complaintType: '',
    location: '',
    status: ''
  });

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log data to verify it's being set correctly
    console.log('Form data:', formData);

    // Post data to the database
    axios.post('http://192.168.0.143:8080/api/Admin/addComplaint', formData)
      .then(response => {
        console.log('Data submitted successfully:', response.data);
        // Optionally, you can reset the form or show a success message
        setFormData({
          complaint: '',
          complaintType: '',
          location: '',
          status: ''
        });
      })
      .catch(error => {
        console.error('Error submitting data:', error.response ? error.response.data : error.message);
      });
  };

  return (
    <React.Fragment>
      <Nav_Bar />
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
              <div className="bg-white border rounded shadow-sm overflow-hidden">
                <form onSubmit={handleSubmit}>
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div className="col-12">
                      <label htmlFor="complaint" className="form-label">
                        <span style={{ color: 'black' }}>Complaint</span> <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="complaint"
                        name="complaint"
                        rows="3"
                        value={formData.complaint}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="complaintType" className="form-label">
                        <span style={{ color: 'black' }}>Complaint Type</span> <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="complaintType"
                        name="complaintType"
                        value={formData.complaintType}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="location" className="form-label">
                        <span style={{ color: 'black' }}>Location</span> <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="status" className="form-label">
                        <span style={{ color: 'black' }}>Status</span> <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default ContactForm;
