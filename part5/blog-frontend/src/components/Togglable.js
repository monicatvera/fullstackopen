import React, { forwardRef, useImperativeHandle, useState } from "react";

const Togglable = forwardRef(({ children, buttonLabel }, ref) => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    };
  });
  return (
    <div>
      <div style={{ display: visible ? "none" : "" }}>
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      </div>
      <div style={{ display: visible ? "" : "none" }}>
        {children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  );
});

Togglable.displayName = "Togglable";

export default Togglable;