import React, { useState } from "react";

// Department and District data
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

const districtsData = {
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

function SendFeedback() {
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate mobile number
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobileNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const newFeedback = {
      id: Date.now(),
      user: "Reshma",
      date: date || new Date().toLocaleDateString(),
      department,
      subject,
      feedback: comment,
      mobileNumber,
      state: selectedState,
      district: selectedDistrict,
      city: selectedCity,
    };

    // Save feedback to localStorage
    const storedFeedback = JSON.parse(localStorage.getItem("feedback") || "[]");
    storedFeedback.push(newFeedback);
    localStorage.setItem("feedback", JSON.stringify(storedFeedback));

    // Clear form fields
    setDate("");
    setDepartment("");
    setSubject("");
    setComment("");
    setMobileNumber("");
    setSelectedState("");
    setSelectedDistrict("");
    setSelectedCity("");

    alert("Feedback submitted successfully!");
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedDistrict("");
    setSelectedCity("");
  };

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setSelectedCity("");
  };

  const getDistricts = () => {
    return selectedState ? Object.keys(districtsData[selectedState] || {}) : [];
  };

  const getCities = () => {
    return selectedState && selectedDistrict
      ? districtsData[selectedState][selectedDistrict] || []
      : [];
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold text-center mb-8">
          WELCOME RESHMA!!...... GIVE YOUR FEEDBACK
        </h2>
        <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">Submit your feedback..!!</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="space-y-4">
              <div>
                <label htmlFor="date" className="block font-medium">Date</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border rounded w-full px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="department" className="block font-medium">Department</label>
                <select
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="border rounded w-full px-3 py-2"
                >
                  <option value="" disabled>--Select Department--</option>
                  {departments.map((dept, idx) => (
                    <option key={idx} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="subject" className="block font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="border rounded w-full px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block font-medium">Comment</label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  className="border rounded w-full px-3 py-2"
                ></textarea>
              </div>
              <div>
                <label htmlFor="mobile" className="block font-medium">Mobile Number</label>
                <input
                  type="text"
                  id="mobile"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="border rounded w-full px-3 py-2"
                  placeholder="Enter 10-digit mobile number"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-4">
              <div>
                <label htmlFor="state" className="block font-medium">Select State</label>
                <select
                  id="state"
                  value={selectedState}
                  onChange={handleStateChange}
                  className="border rounded w-full px-3 py-2"
                >
                  <option value="">Select State</option>
                  {Object.keys(districtsData).map((state, idx) => (
                    <option key={idx} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {selectedState && (
                <div>
                  <label htmlFor="district" className="block font-medium">Select District</label>
                  <select
                    id="district"
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    className="border rounded w-full px-3 py-2"
                  >
                    <option value="">Select District</option>
                    {getDistricts().map((district, idx) => (
                      <option key={idx} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
              )}

              {selectedDistrict && (
                <div>
                  <label htmlFor="city" className="block font-medium">Select City</label>
                  <select
                    id="city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="border rounded w-full px-3 py-2"
                  >
                    <option value="">Select City</option>
                    {getCities().map((city, idx) => (
                      <option key={idx} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              )}
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Submit</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SendFeedback;
