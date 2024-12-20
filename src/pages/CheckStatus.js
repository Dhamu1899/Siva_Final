import React, { useState, useEffect } from 'react';

const CheckStatus = () => {
  const [complaints, setComplaints] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Get the current logged-in user from localStorage
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (!user) {
      alert('Please log in to view your complaints.');
      return;
    }

    setLoggedInUser(user);

    // Fetch complaints from localStorage
    const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
    // Filter complaints for the logged-in user's email
    const userComplaints = storedComplaints.filter(
      (complaint) => complaint.email === user.email
    );

    setComplaints(userComplaints);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Complaint Status Table
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-left">Complaint ID</th>
                <th className="py-2 px-4 border-b text-left">State</th>
                <th className="py-2 px-4 border-b text-left">District</th>
                <th className="py-2 px-4 border-b text-left">City</th>
                <th className="py-2 px-4 border-b text-left">Area</th>
                <th className="py-2 px-4 border-b text-left">Landmark</th>
                <th className="py-2 px-4 border-b text-left">Department</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.length > 0 ? (
                complaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td className="py-2 px-4 border-b">{complaint.id}</td>
                    <td className="py-2 px-4 border-b">{complaint.state}</td>
                    <td className="py-2 px-4 border-b">{complaint.district}</td>
                    <td className="py-2 px-4 border-b">{complaint.city}</td>
                    <td className="py-2 px-4 border-b">{complaint.area}</td>
                    <td className="py-2 px-4 border-b">{complaint.landmark}</td>
                    <td className="py-2 px-4 border-b">{complaint.department}</td>
                    <td className="py-2 px-4 border-b">{complaint.description}</td>
                    <td className="py-2 px-4 border-b">{complaint.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="py-2 px-4 text-center">
                    No complaints registered yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default CheckStatus;
