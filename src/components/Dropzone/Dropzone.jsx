import React from "react";
import { useDropzone } from "react-dropzone";
import "./Dropzone.css";

function Dropzone({ open }) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({});

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">
            Release to drop the files here
          </p>
        ) : (
          <p className="dropzone-content">
            Drag and drop files here
          </p>
        )}
        <button type="button" onClick={open} className="btn">
          Select files to send
        </button>
      </div>
      <aside className="filename">
        <ul>{files}</ul>
      </aside>
    </div>
    </div>
  );
}

export default Dropzone;
