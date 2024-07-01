// src/components/Dashboard.js
import React from "react";

function Dashboard() {
  // You can fetch user data from local storage or state management
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>Welcome to the Dashboard, {user.name}</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.dateOfBirth}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
