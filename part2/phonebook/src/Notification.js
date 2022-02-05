import React from "react";

const Notification = ({ message, error }) => {
  const errorStyle = {
    color: error ? "red" : "green",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  if (message === null) {
    return null;
  }

  return <div style={errorStyle}>{message}</div>;
};
export default Notification;
