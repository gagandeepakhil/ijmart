import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";

export default function EditorialBoard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-6 m-4 p-4 ">
          <div className="row m-2">
            <div className="col-md-12 p-2">
              <h4 className="p-2 text-primary" style={{ fontWeight: "bold" }}>
                Editorial Board
              </h4>
              <div className="p-2" style={{ textAlign: "justify" }}>
                <span style={{ fontWeight: "bold" }}>Editorial in chief:</span>
                {/* You can add more details here */}
              </div>
              {/* Table for Editorial Board Members */}
              <table className="table table-bordered mt-4">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Department</th>
                    <th scope="col">Institution</th>
                    <th scope="col">Institutional Email ID</th>
                  </tr>
                </thead>
                <tbody>
                  {/* You can map through your data here */}
                  <tr>
                    <td>John Doe</td>
                    <td>Editor in Chief</td>
                    <td>Department of Science</td>
                    <td>XYZ University</td>
                    <td>john.doe@xyz.edu</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
}
