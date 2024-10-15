import React, { useState } from "react";
import "./TestDashboard.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const LeaveManagementDashboard = () => {
  const [show, setShow] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (entry) => {
    setSelectedEntry(entry);
    setShow(true);
  };

  // Example data, replace with your data fetching logic
  const complaints = [
    { id: "GH78CD65", name: "Shrey Malviya", type: "Garbage", date: "2024-08-14 21:50:30", status: "Approved", detail: "Our neighborhood is facing an urgent issue with garbage overflow. Despite regular collection, trash has accumulated, posing health risks and diminishing community cleanliness. Immediate action is needed." },
    { id: "PQ74NB56", name: "Tejas Ahire", type: "Drainage", date: "2024-08-12 06:29:17", status: "Approved", detail: "Details about drainage issue." },
    { id: "SW74XW95", name: "Anmol Chaudhary", type: "Dead Animal", date: "2024-08-14 21:50:30", status: "Approved", detail: "Details about dead animal issue." },
    // Add other complaints as needed
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Admin Role</h2>
        <ul>
          <li>Dashboard</li>
          <li>Department</li>
          <li>Complaint Types</li>
          <li>Employees</li>
          <li>Complaint Handle</li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>COMPLAINT MANAGEMENT</h1>
          <a href="#" className="logout">
            Logout
          </a>
        </header>
        <section className="stats">
          <div className="stat-item">
            <span className="number">12</span>
            <span className="label">Leave Types</span>
          </div>
          <div className="stat-item">
            <span className="number">8</span>
            <span className="label">Active Employees</span>
          </div>
          <div className="stat-item">
            <span className="number">8</span>
            <span className="label">Departments</span>
          </div>
          <div className="stat-item">
            <span className="number">14</span>
            <span className="label">Pending Applications</span>
          </div>
          <div className="stat-item">
            <span className="number">2</span>
            <span className="label">Declined Applications</span>
          </div>
          <div className="stat-item">
            <span className="number">7</span>
            <span className="label">Approved Applications</span>
          </div>
        </section>
        <section className="recent-list">
          <h2>Recent List</h2>
          <table>
            <thead>
              <tr>
                <th>S.N</th>
                <th>COMPLAINT ID</th>
                <th>FULL NAME</th>
                <th>COMPLAINT TYPE</th>
                <th>COMPLAINT DATE</th>
                <th>CURRENT STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint, index) => (
                <tr key={complaint.id}>
                  <td>{index + 1}</td>
                  <td>{complaint.id}</td>
                  <td>{complaint.name}</td>
                  <td>{complaint.type}</td>
                  <td>{complaint.date}</td>
                  <td>{complaint.status}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleShow(complaint)}>
                      Issue
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        {selectedEntry && (
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Issue Detail</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {selectedEntry.detail}
            </Offcanvas.Body>
          </Offcanvas>
        )}
      </main>
    </div>
  );
};

export default LeaveManagementDashboard;
