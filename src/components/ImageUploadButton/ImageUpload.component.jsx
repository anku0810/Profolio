import React, { useState } from "react";
import "./ImageUpload.styles.css";
import Files from "react-files";
import { useResume } from "../../Context";

function ImageUpload() {
  const { about, setAbout } = useResume();
  const [showUpload, setShowUpload] = useState(false);

  const toggleUpload = () => {
    setShowUpload(!showUpload);
  };

  const onFilesChange = (files) => {
    console.log(files[0].preview.url);
    setAbout({ ...about, picture: files[0].preview.url });
    toggleUpload(); // Hide upload button after image is uploaded
  };

  const onFilesError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  return (
    <>
      <div className="toggle-container">
  <button className="toggle" onClick={toggleUpload}>
    {showUpload ? "Hide Upload" : "Show Upload"}
  </button>
</div>
      {showUpload && (
        <Files
          className="files-dropzone"
          onChange={onFilesChange}
          onError={onFilesError}
          accepts={["image/png", "image/jpeg"]}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Upload Image
        </Files>
      )}
    </>
  );
}

export default ImageUpload;
