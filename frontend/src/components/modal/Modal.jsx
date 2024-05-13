import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Modal.css";

const Modal = ({ title, onSubmit, onClose, initialValues }) => {
  const [formData, setFormData] = useState(initialValues);
  const [phoneValid, setPhoneValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) {
        setPhoneValid(false);
        return;
      } else {
        setPhoneValid(true);
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dob: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Error submitting formascascascs:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              className={phoneValid ? "" : "invalid"}
              onChange={handleChange}
              required
            />
            {!phoneValid && <p className="helper-text">Invalid Phone no.</p>}
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <DatePicker
              id="dob"
              name="dob"
              selected={formData.dob}
              onChange={handleDateChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
