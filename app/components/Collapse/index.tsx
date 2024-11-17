import React, { useState } from "react";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button
        onClick={toggleCollapse}
        style={{ width: "100%", padding: "10px", cursor: "pointer" }}>
        {title}
      </button>
      {isOpen && (
        <div
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderTop: "none",
          }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;
