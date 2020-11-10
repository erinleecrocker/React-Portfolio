import React from "react";

const Contact = () => (
  <div className="container mt-5">
    <div className="row ml-auto mr-auto">
    <div className="col">
      <div className="card w-100">
        <div className="card-body card-body-style">
          <h2 className="card-title">Contact Me</h2>
          <div className="image-paragraph-divider">
            <form
              id="my-form"
              action="https://formspree.io/xaylywwv"
              method="POST"
            >
              <div className="form-group text-left">
                <label for="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group text-left">
                <label for="Email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group text-left">
                <label for="Message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <input
                className="btn btn-primary button m-2"
                type="submit"
                id="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    <div className="row mt-5"></div>
  </div>
);

export default Contact;
