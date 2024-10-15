import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav_Bar from './Nav_Bar';
import Footer from './Footer';

export default function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://192.168.189.180:3232/api/User/getUsers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', width: 1520 }}>
      <Nav_Bar />
      <table className="table align-middle mb-0 bg-white" style={{ width: '100%' }}>
        <thead className="bg-light">
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Mobile</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userID}>
              <td>{user.userID}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
              <td>{user.mobile}</td>
              <td>{user.password}</td>
              <td>
                <button type="button" className="btn btn-link btn-sm btn-rounded">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}
