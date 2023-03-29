import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { uploadFormFiles } from "../../utility/data";
import Loader from "../Loader";
import "./Dropzone.css";

function Dropzone({ open, setUploadPayload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({});

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    setIsUploading(true)
    const formData = new FormData();
    formData.append("file", selectedFile);
    // console.log(selectedFile)
    // post the data using  axios here
    try {
      const data = await uploadFormFiles(formData);
      if(data){
        setIsUploading(false);
        setUploadPayload(data);
      }
    } catch (error) {
      setIsUploading(false);
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div
        {...getRootProps({ className: "dropzone", onChange: handleFileChange })}
      >
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>
          ) : (
            <p className="dropzone-content">Drag and drop files here</p>
          )}
          <button type="button" onClick={open} className="btn">
            Select files to send
          </button>
        </div>
        <aside className="filename">
          <ul>{files}</ul>
        </aside>
      </div>
      <Button
        onClick={() => handleFileUpload()}
        isLoading={isUploading}
        spinner={<Loader />}
        backgroundColor="darkBlue"
        marginTop="5"
      >
        Upload File
      </Button>
    </div>
  );
}

export default Dropzone;
