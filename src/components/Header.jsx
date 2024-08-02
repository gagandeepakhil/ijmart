import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import navbarItems from "../constants";

const Header = () => {
  return (
    <div className="container-fluid bg-primary text-white py-2">
      {/* 30:70 colums */}
      <div className="container">
        <div className="row">
          <div className="col-md-3 align-self-center">
            <img src="logo.png" onClick={() => window.location.href = "/"} className="img-fluid" width={100} alt="logo" />
          </div>
          <div className="col-md-9 align-self-center">
            <h5 style={{ textAlign: "right", fontWeight: "bold",margin:"auto" }}>
              INTERNATIONAL JOURNAL OF MULTIDISCIPLINARY ADVANCED RESEARCH AND
              TECHNOLOGY
            </h5>
            <p style={{ textAlign: "right" ,margin:"auto"}}>ISSN: 2349-7408</p>
          </div>
          {/* white //divider line  */}
          <div className="col-md-12">
            <hr
              style={{
                borderColor: "white",
                height: "2px",
                backgroundColor: "white",
              }}
            />
          </div>
          {/* //nav bar  */}
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">                    
                  <ul className="navbar-nav">
                    {navbarItems.map((item) => (
                      <li className="nav-item" style={{ fontWeight:"bold", marginRight:"15px" }} key={item.title}>
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href={item.url}
                        >
                          {item.title.toUpperCase()}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
