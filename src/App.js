import React from "react";
import Header from "./components/Header";
import Main from "./components/MainPage";
import Home from "./components/Home";
import ContactUs from "./components/contact-us";
import Submission from "./components/submission";
import Instructions from "./components/instructions";
import EditorialBoard from "./components/editorial-board";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/submission" element={<Submission />} />
              <Route path="/instructions" element={<Instructions />} />
              <Route path="/editorial-board" element={<EditorialBoard />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
    </HashRouter>
  );
}

export default App;
