import React, { useState, useEffect } from "react";
import "./profile.css";

export const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [submittedData, setSubmittedData] = useState(() => {
    const savedData = localStorage.getItem("submittedData");
    return savedData ? JSON.parse(savedData) : null;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!!");
    setSubmittedData(formData);
    localStorage.setItem("submittedData", JSON.stringify(formData));
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
    });
  };

  useEffect(() => {
    const savedData = localStorage.getItem("submittedData");
    if (savedData) {
      setSubmittedData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div>
      {submittedData ? (
        <div>
          <h2>Entered Data</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Address: {submittedData.street}</p>
          <p>City: {submittedData.city}</p>
          <p>State: {submittedData.state}</p>
          <p>Zip Code: {submittedData.postalCode}</p>
        </div>
      ) : (
        <p>No Profile Data</p>
      )}
      <div className="formContainer">
        <h2>Enter/Change Profile Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="formItem">
            <label>First Name:</label> <br />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formItem">
            <label>Last Name:</label> <br />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formItem">
            <label>Email:</label> <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formItem">
            <label>Street Address:</label> <br />
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formItem">
            <label>City: </label> <br />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formItem">
            <label>State: </label> <br />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formItem">
            <label>Postal Code:</label> <br />
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formItem">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
