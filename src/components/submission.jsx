import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";

export default function Submission() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-6 m-4 p-4 ">
          <div className="row m-2">
            <div className="col-md-12 p-2">
              <h4 className="p-2 text-primary" style={{ fontWeight: "bold" }}>
                Article Submission
              </h4>
              <p className="p-2" style={{ textAlign: "justify" }}>
                <span style={{ fontWeight: "bold" }}>Important Information: </span>You may upload the article either in DOC,
                DOCX, or PDF format with maximum file size 4 MB Please Read the
                Journal Terms & Conditions before Submission.Mail your article in specified format to <span style={{ fontWeight: "bold" }}>editor.manuscript1@gmail.com</span> .
              </p>
              <p className="p-2" style={{ textAlign: "justify" }}>
                <ul>
                    <li>The article must be in English.</li>
                    <li>Please Mention the following in your mail.</li>
                    <ul style={{textAlign:"left"}}>
                        <li>Article Submission Type : Initial Submission, Final Submission, e-presentation</li>
                        <li>Article Tittle</li>
                        <li>Number of Authors</li>
                        <li>Number of Pages</li>
                        <li>Your Email</li>
                        <li>Country</li>
                        <li>Subject Area</li>
                        <li>You Are : Post Graduate Student/Under Graduate Student/Ph.D. Student/Academician/Others</li>
                        <li>Contact Number</li>
                        <li>Author Names</li>
                    </ul>
                </ul>
            </p>

            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
}
