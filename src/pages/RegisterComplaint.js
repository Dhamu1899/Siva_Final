import React, { useState, useEffect } from 'react';

function RegisterComplaint() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    state: 'Tamil Nadu',
    district: '',
    city: '',
    pincode: '',
    area: '',
    landmark: '',
    description: '',
    image: null,
    video: null,
    department: '',
    mobileNumber: '',
  });
  const [error, setError] = useState('');

  const districtCities = {
    "Tamil Nadu": {
    "Chennai": [
      "Chennai City",
      "Ambattur",
      "Anna Nagar",
      "Adyar",
      "Madhavaram",
      "Pallavaram",
      "Tambaram",
      "Perungudi",
      "Perambur",
      "Nungambakkam"
    ],
    "Coimbatore": [
      "Coimbatore City",
      "Gandhipuram",
      "RS Puram",
      "Ganapathy",
      "Peelamedu",
      "Tidel Park",
      "Saravanampatti",
      "Podanur"
    ],
    "Madurai": [
      "Madurai City",
      "Thirumangalam",
      "Anna Nagar",
      "Koodal Nagar",
      "Mattuthavani",
      "Vadipatti",
      "Usilampatti"
    ],
    "Tiruchirappalli": [
      "Tiruchirappalli City",
      "Srirangam",
      "Thiruverumbur",
      "Lalgudi",
      "Manachanallur",
      "Musiri",
      "Thuraiyur"
    ],
    "Salem": [
      "Salem City",
      "Mettur",
      "Attur",
      "Omalur",
      "Edappadi",
      "Nangavalli",
      "Gangavalli"
    ],
    "Erode": [
      "Erode City",
      "Bhavani",
      "Perundurai",
      "Gobichettipalayam",
      "Sathyamangalam",
      "Chithode",
      "Modakurichi"
    ],
    "Tirunelveli": [
      "Tirunelveli City",
      "Palayamkottai",
      "Nanguneri",
      "Ambasamudram",
      "Tenkasi",
      "Cheranmahadevi",
      "Vikramasingapuram"
    ],
    "Thanjavur": [
      "Thanjavur City",
      "Kumbakonam",
      "Papanasam",
      "Orathanadu",
      "Pattukkottai",
      "Peravurani",
      "Thiruvaiyaru"
    ],
    "Vellore": [
      "Vellore City",
      "Gudiyatham",
      "Ambur",
      "Arakkonam",
      "Katpadi",
      "Walajapet",
      "Arcot"
    ],
    "Tiruppur": [
      "Tiruppur City",
      "Avinashi",
      "Dharapuram",
      "Udumalpet",
      "Palladam",
      "Kangayam"
    ],
    "Thoothukudi": [
      "Thoothukudi City",
      "Kovilpatti",
      "Ettayapuram",
      "Sathankulam",
      "Tiruchendur",
      "Ottapidaram"
    ],
    "Virudhunagar": [
      "Virudhunagar",
      "Sivakasi",
      "Rajapalayam",
      "Aruppukkottai",
      "Sattur",
      "Srivilliputhur"
    ],
    "Cuddalore": [
      "Cuddalore City",
      "Chidambaram",
      "Panruti",
      "Virudhachalam",
      "Neyveli",
      "Bhuvanagiri"
    ],
    "Kanyakumari": [
      "Nagercoil",
      "Kanyakumari",
      "Marthandam",
      "Thuckalay",
      "Colachel",
      "Padmanabhapuram"
    ],
    "Kanchipuram": [
      "Kanchipuram",
      "Sriperumbudur",
      "Walajabad",
      "Chengalpattu",
      "Thiruporur",
      "Maraimalai Nagar"
    ],
    "Dharmapuri": [
      "Dharmapuri",
      "Palacode",
      "Pennagaram",
      "Hosur",
      "Thoppur",
      "Pappireddipatti"
    ],
    "Dindigul": [
      "Dindigul",
      "Palani",
      "Kodaikanal",
      "Oddanchatram",
      "Batlagundu",
      "Natham"
    ],
    "Krishnagiri": [
      "Krishnagiri",
      "Hosur",
      "Kaveripattinam",
      "Bargur",
      "Uthangarai"
    ],
    "Nagapattinam": [
      "Nagapattinam",
      "Velankanni",
      "Thirunallar",
      "Karaikal",
      "Sirkazhi",
      "Mayiladuthurai"
    ],
    "Ramanathapuram": [
      "Ramanathapuram",
      "Rameswaram",
      "Paramakudi",
      "Kamuthi",
      "Thiruvadanai"
    ],
    "Karur": [
      "Karur",
      "Kulithalai",
      "Pugalur",
      "Aravakurichi",
      "Vellianai"
    ],
    "Sivaganga": [
      "Sivaganga",
      "Karaikudi",
      "Devakottai",
      "Manamadurai",
      "Tirupathur"
    ],
    "Namakkal": [
      "Namakkal",
      "Tiruchengode",
      "Rasipuram",
      "Paramathi Velur",
      "Puduchatram"
    ],
    "The Nilgiris": [
      "Ooty",
      "Coonoor",
      "Kotagiri",
      "Gudalur",
      "Wellington"
    ],
    "Theni": [
      "Theni",
      "Bodinayakanur",
      "Andipatti",
      "Periyakulam",
      "Cumbum"
    ],
    "Villupuram": [
      "Villupuram",
      "Tindivanam",
      "Gingee",
      "Kallakurichi",
      "Ulundurpettai"
    ],
    "Perambalur": [
      "Perambalur",
      "Ariyalur",
      "Kunnam",
      "Veppanthattai"
    ],
    "Pudukkottai": [
      "Pudukkottai",
      "Aranthangi",
      "Keeranur",
      "Illuppur"
    ],
    "Ariyalur": [
      "Ariyalur",
      "Jayankondam",
      "Sendurai",
      "Andimadam"
    ]
  }
  };

  useEffect(() => {
    const districtData = Object.keys(districtCities['Tamil Nadu']);
    setDistricts(districtData);
  }, []);

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      district: selectedDistrict,
      city: '',
    }));
    setCities(districtCities['Tamil Nadu'][selectedDistrict] || []);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleDepartmentClick = (department) => {
    setFormData((prevData) => ({
      ...prevData,
      department,
    }));
    setIsPopupOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!loggedInUser) {
      alert('Please log in to register a complaint.');
      return;
    }

    const requiredFields = ['state', 'district', 'city', 'pincode', 'area', 'landmark', 'description', 'department', 'mobileNumber'];
    for (let field of requiredFields) {
      if (!formData[field]) {
        setError(`Please fill the ${field} field.`);
        return;
      }
    }

    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!formData.image || !formData.video) {
      setError('Please upload both an image and a video.');
      return;
    }

    try {
      const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
      const newComplaint = {
        ...formData,
        id: Date.now(),
        email: loggedInUser.email,
        image: formData.image.name,
        video: formData.video.name,
        status: 'Pending',
      };
      storedComplaints.push(newComplaint);
      localStorage.setItem('complaints', JSON.stringify(storedComplaints));
      alert('Complaint successfully registered!');
      setError('');
      setIsPopupOpen(false);
      setFormData({
        state: 'Tamil Nadu',
        district: '',
        city: '',
        pincode: '',
        area: '',
        landmark: '',
        description: '',
        image: null,
        video: null,
        department: '',
        mobileNumber: '',
      });
    } catch (error) {
      console.error('Error saving complaint:', error);
      setError('An error occurred while saving the complaint. Please try again.');
    }
  };

  const handleCancel = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          WELCOME ..... REGISTER YOUR COMPLAINT HERE
        </h2>

        <h3 className="text-2xl font-bold mb-6">Complaints Forum</h3>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <ul className="space-y-2">
              {[
                'Chief Minister Cell',
                'Waste Management',
                'Water Logging',
                'Road Conditions',
                'Street Lighting',
                'Sewage Overflow',
                'Encroachments',
                'Pollution',
              ].map((dept, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  <button
                    onClick={() => handleDepartmentClick(dept)} // Set department when clicked
                    className="text-blue-600 hover:underline"
                  >
                    {dept}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-2/3 bg-orange-100 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">The Goal of our system:</h4>
            <p className="mb-4">
              The Department of Public Grievances is to facilitate the pursuit of excellence in
              governance through promotion of:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improvements in Government structures and processes</li>
              <li>Citizen-friendly initiatives including redressal of public grievances</li>
              <li>Documentation, incubation, and dissemination of best practices</li>
              <li>Codification and simplification of procedures</li>
              <li>Networking with various agencies</li>
            </ul>
          </div>
        </div>
      </main>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-center mb-4">Register Complaint</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Department field at the top */}
              <div className="mb-4">
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  readOnly
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      readOnly
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                      District
                    </label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleDistrictChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="" disabled>
                        Select a district
                      </option>
                      {districts.map((district, index) => (
                        <option key={index} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="" disabled>
                        Select a city
                      </option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                      Area
                    </label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="landmark" className="block text-sm font-medium text-gray-700">
                      Landmark
                    </label>
                    <input
                      type="text"
                      id="landmark"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                  </label>
                  <input
                   type="text"
                   id="mobileNumber"
                   name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your 10-digit mobile number"
                   required
                  />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="4"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="block w-full text-sm text-gray-700"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="video" className="block text-sm font-medium text-gray-700">
                      Video
                    </label>
                    <input
                      type="file"
                      id="video"
                      name="video"
                      onChange={handleFileChange}
                      accept="video/*"
                      className="block w-full text-sm text-gray-700"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                {error && <p className="text-red-600 mb-2">{error}</p>}
                <div className="w-1/2 pr-2">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md"
                  >
                    Submit
                  </button>
                </div>
                <div className="w-1/2 pl-2">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="w-full mt-0 bg-gray-500 text-white py-2 px-4 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterComplaint;
