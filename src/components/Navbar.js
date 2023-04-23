import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 6vw",
      }}
    >
      <div style={{ width: "20vw", padding: "0 5vw" }}>
        <img
          style={{ width: "120px" }}
          src="/assets/Product-Expo.png"
          alt="Logo"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "4vw",
          alignItems: "center",
        }}
      >
        <img src="/assets/srm.jpeg" alt="" style={{ width: "110px" }} />
        <img src="/assets/siiec.jpeg" alt="" style={{ width: "200px" }} />
        <img src="/assets/startuptn.png" alt="" style={{ width: "120px" }} />
        <img src="/assets/ciap.jpeg" alt="" style={{ width: "80px" }} />
      </div>
    </div>
  );
};

export default Navbar;
