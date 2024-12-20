import React, { useEffect, useState } from "react";

function ViewComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(""); // "image" or "video"

  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(storedComplaints);
  }, []);

  const handleViewMedia = (mediaUrl) => {
    const extension = mediaUrl.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(extension)) {
      setSelectedMedia(mediaUrl);
      setMediaType("image");
    } else if (["mp4", "avi", "mkv", "webm", "mov", "flv"].includes(extension)) {
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

  const handleDeleteComplaint = (id) => {
    if (window.confirm("Are you sure you want to delete this complaint?")) {
      const updatedComplaints = complaints.filter((complaint) => complaint.id !== id);
      setComplaints(updatedComplaints);
      localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
    }
  };

  const handleStatusChange = (id) => {
    const updatedComplaints = complaints.map((complaint) => {
      if (complaint.id === id) {
        if (complaint.status === "Pending") {
          complaint.status = "Process";
        } else if (complaint.status === "Process") {
          complaint.status = "Resolved";
        }
      }
      return complaint;
    });
    setComplaints(updatedComplaints);
    localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">View Complaints</h2>

      {/* Complaints Table */}
      <table className="min-w-full table-auto border-collapse text-sm">
        <thead>
          <tr>
            <th className="border p-1 text-left">ID</th>
            <th className="border p-1 text-left">State</th>
            <th className="border p-1 text-left">District</th>
            <th className="border p-1 text-left">City</th>
            <th className="border p-1 text-left">Pincode</th>
            <th className="border p-1 text-left">Area</th>
            <th className="border p-1 text-left">Landmark</th>
            <th className="border p-1 text-left">Mobile Number</th>
            <th className="border p-1 text-left">Description</th>
            <th className="border p-1 text-left">Department</th>
            <th className="border p-1 text-left">Status</th>
            <th className="border p-1 text-left">View</th>
            <th className="border p-1 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.length > 0 ? (
            complaints.map((complaint) => (
              <tr key={complaint.id} className="odd:bg-gray-100 even:bg-white">
                <td className="border p-1">{complaint.id}</td>
                <td className="border p-1">{complaint.state}</td>
                <td className="border p-1">{complaint.district}</td>
                <td className="border p-1">{complaint.city}</td>
                <td className="border p-1">{complaint.pincode}</td>
                <td className="border p-1">{complaint.area}</td>
                <td className="border p-1">{complaint.landmark}</td>
                <td className="border p-1">{complaint.mobileNumber || "N/A"}</td>
                <td className="border p-1">{complaint.description}</td>
                <td className="border p-1">{complaint.department || "N/A"}</td>
                <td className="border p-1">{complaint.status || "Pending"}</td>
                <td className="border p-1">
                  {complaint.image && (
                    <button
                      onClick={() => handleViewMedia(complaint.image)}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      View Image
                    </button>
                  )}
                  {complaint.video && (
                    <button
                      onClick={() => handleViewMedia(complaint.video)}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Play Video
                    </button>
                  )}
                </td>
                <td className="border p-1">
                  <button
                    onClick={() => handleStatusChange(complaint.id)}
                    className="bg-yellow-500 text-white px-1 py-1 rounded hover:bg-yellow-600 mr-1"
                  >
                    {complaint.status === "Pending"
                      ? "Start Process"
                      : complaint.status === "Process"
                      ? "Resolve"
                      : "Resolved"}
                  </button>
                  <button
                    onClick={() => handleDeleteComplaint(complaint.id)}
                    className="bg-red-500 text-white px-1 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="13" className="border p-1 text-center">
                No complaints found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Media Modal */}
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
                <source src={selectedMedia} type={`video/${selectedMedia.split(".").pop()}`} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewComplaints;
