import React from "react";
import Header from "./components/Header";
import MidSection from "./components/MidSection";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <div className="flex-grow">
        <MidSection />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;