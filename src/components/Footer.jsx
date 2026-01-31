import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#3E2723",
        color: "#fff",
      }}
    >
      <p style={{ marginBottom: 0, fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} Men Parfume. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
