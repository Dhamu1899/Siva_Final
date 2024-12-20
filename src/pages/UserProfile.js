import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the logged-in user's data from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setProfileData(loggedInUser);
      setUpdatedData(loggedInUser);
    } else {
      alert('No user is logged in. Redirecting to login page.');
      navigate('/login');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (updatedData.password !== updatedData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Update the user's data in localStorage
    localStorage.setItem('user', JSON.stringify(updatedData));
    setProfileData(updatedData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  if (!profileData) return <p className="text-center text-xl text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Your Profile</h2>

        {!isEditing ? (
          <div>
            <table className="w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">
                    Field
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(profileData).map(([key, value]) => (
                  <tr key={key} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      {key === 'password' || key === 'confirmPassword'
                        ? '••••••••' // Mask password fields
                        : value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              onClick={handleEditClick}
              className="mt-6 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <table className="w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">
                    Field
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">
                    Edit Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(updatedData).map(([key, value]) => (
                  <tr key={key} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {key === 'password' || key === 'confirmPassword' ? (
                        <input
                          type="password"
                          name={key}
                          value={value}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                          required
                        />
                      ) : (
                        <input
                          type={key === 'email' ? 'email' : key === 'age' ? 'number' : 'text'}
                          name={key}
                          value={value}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                          required
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
