import React, { useState } from "react";

const Modal = ({ visible, onClose, ytLink, poster, title }) => {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  if (!visible) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <img src={`${poster}`} />
        <div className="modalRight">
          <button className="closeBtn" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <div className="content">
            <p>Do you want to</p>
            <p>watch trailer of</p>
            <h1 className="text-2xl">{title} ?</h1>
          </div>
          <div className="btnContainer">
            <button onClick={() => openNewTab(ytLink)} className="btn">
              watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
