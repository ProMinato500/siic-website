import React from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Navbar with logos - Angistha */}
      <Navbar />

      {/* Header with background - Saptorshee */}
      <Header />

      {/* Body - Pradipta */}
      <Body />

      {/* Footer - Angistha */}
      <Footer />
    </div>
  );
}

export default App;
