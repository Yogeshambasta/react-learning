import React, { useState } from "react";

function App() {
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (fileExtension === "cdr") {
        setError(""); // error hata do
        setFileName(file.name); // selected file ka naam dikhaye
      } else {
        setError(" Invalid file! Please select a .cdr file.");
        setFileName("");
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Upload CDR File</h2>

      {/* Hidden input */}
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Button to trigger hidden input */}
      <button onClick={() => document.getElementById("fileInput").click()}>
        Choose File
      </button>

      {/* File Name */}
      {fileName && <p> Selected File: {fileName}</p>}

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
