import React, { useEffect, useState } from "react";

function DepartmentViewComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [filters, setFilters] = useState({});
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState("");

  useEffect(() => {
    const loginDetails = JSON.parse(localStorage.getItem("loginDetails"));
    if (!loginDetails) {
      alert("No login details found. Redirecting to login.");
      window.location.href = "/department-login";
      return;
    }

    setFilters(loginDetails);

    const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
    const filteredComplaints = storedComplaints.filter(
      (complaint) =>
        complaint.department === loginDetails.department &&
        complaint.state === loginDetails.state &&
        complaint.district === loginDetails.district &&
        complaint.city === loginDetails.city
    );
    setComplaints(filteredComplaints);
  }, []);

  const handleViewMedia = (mediaUrl) => {
    const extension = mediaUrl.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png"].includes(extension)) {
      setSelectedMedia(mediaUrl);
      setMediaType("image");
    } else if (["mp4", "avi"].includes(extension)) {
      setSelectedMedia(mediaUrl);
      setMediaType("video");
    } else {
      alert("Unsupported media type");
    }
  };

  const handleCloseMedia = () => {
    setSelectedMedia(null);
    setMediaType("");
  };

  const handleStatusChange = (id) => {
    const updatedComplaints = complaints.map((complaint) => {
      if (complaint.id === id) {
        if (complaint.status === "Pending") {
          complaint.status = "In Process";
        } else if (complaint.status === "In Process") {
          complaint.status = "Resolved";
        }
      }
      return complaint;
    });
    setComplaints(updatedComplaints);
    localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
  };

  const handleDeleteComplaint = (id) => {
    const updatedComplaints = complaints.filter((complaint) => complaint.id !== id);
    setComplaints(updatedComplaints);
    localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Complaints - {filters.department} Department
      </h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2 text-left">ID</th>
            <th className="border p-2 text-left">State</th>
            <th className="border p-2 text-left">District</th>
            <th className="border p-2 text-left">City</th>
            <th className="border p-2 text-left">Pincode</th>
            <th className="border p-2 text-left">Area</th>
            <th className="border p-2 text-left">Landmark</th>
            <th className="border p-2 text-left">Mobile Number</th>
            <th className="border p-2 text-left">Description</th>
            <th className="border p-2 text-left">Department</th>
            <th className="border p-2 text-left">Status</th>
            <th className="border p-2 text-left">Media</th>
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.length > 0 ? (
            complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td className="border p-2">{complaint.id}</td>
                <td className="border p-2">{complaint.state}</td>
                <td className="border p-2">{complaint.district}</td>
                <td className="border p-2">{complaint.city}</td>
                <td className="border p-2">{complaint.pincode}</td>
                <td className="border p-2">{complaint.area}</td>
                <td className="border p-2">{complaint.landmark}</td>
                <td className="border p-2">{complaint.mobileNumber}</td>
                <td className="border p-2">{complaint.description}</td>
                <td className="border p-2">{complaint.department}</td>
                <td className="border p-2">{complaint.status}</td>
                <td className="border p-2">
                  {complaint.media && (
                    <button
                      onClick={() => handleViewMedia(complaint.media)}
                      className="text-blue-500 hover:underline"
                    >
                      View Media
                    </button>
                  )}
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => handleStatusChange(complaint.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                  >
                    {complaint.status === "Pending"
                      ? "Start Process"
                      : complaint.status === "In Process"
                      ? "Resolve"
                      : "Resolved"}
                  </button>
                  <button
                    onClick={() => handleDeleteComplaint(complaint.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="13" className="border p-2 text-center">
                No complaints matching the selected filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md relative">
            <button
              onClick={handleCloseMedia}
              className="text-red-500 absolute top-2 right-2"
            >
              Close
            </button>
            {mediaType === "image" ? (
              <img
                src={selectedMedia}
                alt="Complaint Media"
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <video controls className="max-w-full max-h-full">
                <source
                  src={selectedMedia}
                  type={`video/${selectedMedia.split(".").pop()}`}
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DepartmentViewComplaints;
