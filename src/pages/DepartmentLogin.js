import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const departments = [
  "Chief Minister Cell",
  "Waste Management",
  "Water Logging",
  "Road Conditions",
  "Street Lighting",
  "Sewage Overflow",
  "Encroachments",
  "Pollution",
];

const locations = {
  "Tamil Nadu": {
    "Chennai": ["Chennai City", "Ambattur", "Anna Nagar", "Adyar", "Madhavaram"],
    "Coimbatore": ["Coimbatore City", "Gandhipuram", "RS Puram", "Ganapathy"],
  },
};

function DepartmentLogin({ onLogin }) {
  const [formData, setFormData] = useState({
    department: "",
    state: "",
    district: "",
    city: "",
    username: "",
    password: "",
  });

  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData((prev) => ({ ...prev, state: selectedState, district: "", city: "" }));
    setDistricts(Object.keys(locations[selectedState] || {}));
    setCities([]);
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setFormData((prev) => ({ ...prev, district: selectedDistrict, city: "" }));
    setCities(locations[formData.state][selectedDistrict] || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const defaultAdminCredentials = { username: "admin", password: "admin" };

    if (!formData.department || !formData.state || !formData.district || !formData.city) {
      alert("Please select all fields before proceeding.");
      return;
    }

    if (
      formData.username === defaultAdminCredentials.username &&
      formData.password === defaultAdminCredentials.password
    ) {
      alert("Login Successful!");
      const loginDetails = { ...formData, role: "department" };
      localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
      onLogin(loginDetails);
      navigate("/department-dashboard");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold text-center mb-8">
          WELCOME TO PUBLIC GRIEVANCE SYSTEM
        </h2>

        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-6 text-center">Department Login</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="department" className="block font-medium mb-2">
                Select Department Name:
              </label>
              <select
                id="department"
                value={formData.department}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, department: e.target.value }))
                }
                className="border rounded w-full px-3 py-2"
              >
                <option value="" disabled>
                  Select Department
                </option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="state" className="block font-medium mb-2">
                Select State:
              </label>
              <select
                id="state"
                value={formData.state}
                onChange={handleStateChange}
                className="border rounded w-full px-3 py-2"
              >
                <option value="" disabled>
                  Select State
                </option>
                <option value="Tamil Nadu">Tamil Nadu</option>
              </select>
            </div>

            <div>
              <label htmlFor="district" className="block font-medium mb-2">
                Select District:
              </label>
              <select
                id="district"
                value={formData.district}
                onChange={handleDistrictChange}
                disabled={!formData.state}
                className="border rounded w-full px-3 py-2"
              >
                <option value="" disabled>
                  Select District
                </option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="city" className="block font-medium mb-2">
                Select City:
              </label>
              <select
                id="city"
                value={formData.city}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, city: e.target.value }))
                }
                disabled={!formData.district}
                className="border rounded w-full px-3 py-2"
              >
                <option value="" disabled>
                  Select City
                </option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="username" className="block font-medium mb-2">
                Enter Username:
              </label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, username: e.target.value }))
                }
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-medium mb-2">
                Enter Password:
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DepartmentLogin;
