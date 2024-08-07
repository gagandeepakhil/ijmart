import React from "react";
import Header from "./components/Header";
import Main from "./components/MainPage";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Submission from "./components/Submission";
import Instructions from "./components/Instructions";
import EditorialBoard from "./components/EditorialBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/editorial-board" element={<EditorialBoard />} />
          <Route exact path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
