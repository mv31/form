import React, { useState } from "react";
import "./App.css";
import bootstrap from "bootstrap";

function App() {
  const [value, setvalue] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Country: "",
    City: "",
    State: "",
  });
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    setOpen(true);
  }
  function handleChange(e) {
    setvalue({ ...value, [e.target.name]: e.target.value });
  }

  return (
    <div className="app">
      <div className="form">
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-title"> Form Module</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label>Name</label>
                <input
                  pattern="^[A-Za-z0-9]{3,16}$"
                  required
                  type="text"
                  name="Name"
                  class="form-control"
                  placeholder="Enter Name"
                  onChange={handleChange}
                  value={value.Name}
                />
                <span>Field must contain 3-16 Characters</span>
              </div>
              <div class="form-group">
                <label>Email </label>
                <input
                  pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9]$"
                  required
                  name="Email"
                  type="email"
                  class="form-control"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  value={value.Email}
                />
                <span>Enter Valid Email</span>
              </div>
              <div class="form-group">
                <label>Mobile</label>
                <input
                  pattern="^[0-9]{10}$"
                  name="Mobile"
                  type="text"
                  class="form-control"
                  placeholder="Enter Mobile"
                  onChange={handleChange}
                  value={value.Mobile}
                />
                <span>Enter valid Mobile Number</span>
              </div>
              <div class="form-group">
                <label>Country</label>
                <input
                  pattern="^[a-zA-Z]{3,16}$"
                  name="Country"
                  type="text"
                  class="form-control"
                  placeholder="Enter Country"
                  onChange={handleChange}
                  value={value.Country}
                />
                <span>Enter valid Country</span>
              </div>
              <div class="form-group">
                <label>City</label>
                <input
                  pattern="^[a-zA-Z]{3,16}$"
                  name="City"
                  type="text"
                  class="form-control"
                  placeholder="Enter City"
                  onChange={handleChange}
                  value={value.City}
                />
                <span>Enter valid City</span>
              </div>
              <div class="form-group">
                <label>State</label>
                <input
                  pattern="^[a-zA-Z]{3,16}$"
                  type="text"
                  name="State"
                  class="form-control"
                  placeholder="Enter State"
                  onChange={handleChange}
                  value={value.State}
                />
                <span>Enter valid state</span>
              </div>
              <button id="liveToastBtn" type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="toast-container position-fixed top-0 end-0 p-3">
        <div
          id="liveToast"
          class={open ? "toast fade show " + "toast" : "toast fade hide"}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <strong class="me-auto">success</strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">Form Submitted successfully...</div>
        </div>
      </div>
    </div>
  );
}

export default App;
