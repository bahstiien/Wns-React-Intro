import React from "react";

const Footer = () => {
  const mainFooter = {
    backgroundColor: "#f76c6c",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#c9c9c9",
  };
  return (
    <div>
      <footer style={mainFooter}>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
