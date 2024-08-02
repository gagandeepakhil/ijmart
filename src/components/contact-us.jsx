import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ContactUs() {
  //handle form
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const subject = "Contact Us Form";
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    window.open(
      `mailto:editor.manuscript1@gmail.com?subject=${subject}&body=${body}`
    );
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4 m-4 p-4 ">
          <div className="row m-2">
            <div className="col-md-12 p-2">
              <h4 className="p-2" style={{ fontWeight: "bold" }}>
                CONTACT INFO
              </h4>
              <p className="p-2" style={{ textAlign: "justify" }}>
                If you have any questions or enquiries please feel free to
                contact us at the following, or fill out the contact form.
              </p>
              <i className="bi bi-envelope p-2"></i>
              <a
                href="mailto:editor.manuscript1@gmail.com"
                style={{ textDecoration: "none", color: "black" }}
                className="p-2"
              >
                editor.manuscript1@gmail.com
              </a>
              <br />
              <br />
              <i class="bi bi-telephone p-2"></i>
              <p style={{ display: "inline-block" }} className="p-2">
                +91 94931 59482
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 m-4 p-4 ">
          <div className="row m-2">
            <div className="col-md-12 p-2">
              <h4 className="p-2" style={{ fontWeight: "bold" }}>
                CONTACT INFO
              </h4>
              {/* //bootstarp form  */}
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                  ></textarea>
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
