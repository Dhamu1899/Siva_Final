import React, { useState } from 'react';

export default function AddHodPage() {
  const [formData, setFormData] = useState({
    department: 'chief-minister-cell',
    username: '',
    password: '',
    email: '',
    address: '',
    location: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Send data to backend or display a success message
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      

      <main className="flex-grow container mx-auto px-6 py-8">
        <div className="bg-white p-8 rounded-lg shadow max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Add Head of Department</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Department Name:</label>
              <select
                value={formData.department}
                onChange={(e) => handleChange('department', e.target.value)}
                className="border rounded w-full px-3 py-2"
              >
                <option value="chief-minister-cell">Chief Minister Cell</option>
                <option value="police">Tamil Nadu Pollution Control Board</option>
                <option value="civil-supplies">Tamil Nadu Water Supply and Drainage Board</option>
                <option value="water-supply">The Highway & Minor Ports Department</option>
                <option value="water-supply">Municipal Corporation</option>
                <option value="water-supply">Chennai Metropolitan Water supply and Sewage Board</option>
                <option value="water-supply">The Commissionerate of Land Administration</option>
                <option value="water-supply">Chennai Metropolitan Water supply and Sewage Board</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => handleChange('username', e.target.value)}
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium">Address</label>
              <textarea
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium">Department Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
