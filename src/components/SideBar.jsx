import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SideBar() {
  return (
    <div
      className="col-md-3 m-4 p-4 "
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* //five row divs with heading and content inside */}
      <div className="row bg-light m-2">
        <div className="col-md-12 p-0">
          <h5
            className="bg-primary text-white p-2"
            style={{ fontWeight: "bold" }}
          >
            Impact Factor
          </h5>
          <p className="p-2">6.325</p>
        </div>
      </div>
      <div className="row bg-light m-2">
        <div className="col-md-12 p-0">
          <h5
            className="bg-primary text-white p-2"
            style={{ fontWeight: "bold" }}
          >
            Submission
          </h5>
          <p className="p-2">
            <a
              href="/submission"
              style={{ color: "black", textDecoration: "none" }}
            >
              Submit Your Article
            </a>
          </p>
        </div>
      </div>
      <div className="row bg-light m-2">
        <div className="col-md-12 p-0">
          <h5
            className="bg-primary text-white p-2"
            style={{ fontWeight: "bold" }}
          >
            Journal Enquiry
          </h5>
          <p className="p-2">
            <a
              href="mailto:editor.ijmart@gmail.com"
              style={{ color: "black", textDecoration: "none" }}
            >
              editor.ijmart@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="row bg-light m-2">
        <div className="col-md-12 p-0">
          <h5
            className="bg-primary text-white p-2"
            style={{ fontWeight: "bold" }}
          >
            Publisher
          </h5>
          <p className="p-2">
            <p className="p-0">Rishi Publications,</p>
            <p className="p-0"> Vijayawada 520010,</p>
            <p className="p-0"> Andhra Pradesh</p>
          </p>
        </div>
      </div>
      <div className="row bg-light m-2">
        <div className="col-md-12 p-0">
          <h5
            className="bg-primary text-white p-2"
            style={{ fontWeight: "bold" }}
          >
            Publication Guidelines
          </h5>
        </div>
        <div className="col-md-12 p-0" style={{ borderBottom: "1px groove" }}>
          <p className="m-2">
            <a
              href="/instructions"
              style={{ color: "black", textDecoration: "none" }}
            >
              Publication Guidelines
            </a>
          </p>
        </div>
        {/* //create similiar for Instruction to Reviewer,Publication Policay, Publication Frequency,Publication Year,Publication Regularly,Plagiarism,Open Access */}
        <div className="col-md-12 p-0" style={{ borderBottom: "1px groove" }}>
          <p className="m-2">
            <a
              href="/instructions"
              style={{ color: "black", textDecoration: "none" }}
            >
              Instruction to Reviewer
            </a>
          </p>
        </div>
        <div className="col-md-12 p-0" style={{ borderBottom: "1px groove" }}>
          <p className="m-2">
            <a
              href="/instructions"
              style={{ color: "black", textDecoration: "none" }}
            >
              Publication Policy
            </a>
          </p>
        </div>
        <div className="col-md-12 p-0" style={{ borderBottom: "1px groove" }}>
          <p className="m-2">
            <a
              href="/instructions"
              style={{ color: "black", textDecoration: "none" }}
            >
              Publication Frequency
            </a>
          </p>
        </div>
        <div className="col-md-12 p-0" style={{ borderBottom: "1px groove" }}>
          <p className="m-2">
            <a
              href="/instructions"
              style={{ color: "black", textDecoration: "none" }}
            >
              Publication Year
            </a>
          </p>
        </div>
        <div className="col-md-12 p-0" style={{ borderBottom: "1px groove" }}>
          <p className="m-2">
            <a
              href="/instructions"
              style={{ color: "black", textDecoration: "none" }}
            >
              Publication Regularly
            </a>
          </p>
        </div>
        <div className="col-md-12 p-0" style={{ borderBottom: "1px groove" }}>
          <p className="m-2">
            <a
              href="/instructions"
              style={{ color: "black", textDecoration: "none" }}
            >
              Plagiarism
            </a>
          </p>
        </div>
        <div className="col-md-12 p-0" style={{ borderBottom: "1px groove" }}>
          <p className="m-2">
            <a
              href="/instructions"
              style={{ color: "black", textDecoration: "none" }}
            >
              Open Access
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
