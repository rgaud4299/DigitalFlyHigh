import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

const JobApplicationModal = ({ isOpen, onRequestClose, jobTitle }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    experience: "",
    skills: "",
    education: "",
    isFresher: false,
    cv: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Mobile number must be 10 digits.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.experience) newErrors.experience = "Experience is required.";
    if (!formData.skills) newErrors.skills = "Skills are required.";
    if (!formData.education) newErrors.education = "Education is required.";
    if (!formData.cv) newErrors.cv = "CV upload is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log("Form submitted:", formData);
      onRequestClose(); // Close modal after submission
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
      <button className="close-button" onClick={onRequestClose}>
        <FaTimes />
      </button>
      <h2>Apply for {jobTitle}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
          {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div>
          <label>Experience:</label>
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} />
          {errors.experience && <span className="error">{errors.experience}</span>}
        </div>
        <div>
          <label>Skills:</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
          {errors.skills && <span className="error">{errors.skills}</span>}
        </div>
        <div>
          <label>Education:</label>
          <input type="text" name="education" value={formData.education} onChange={handleChange} />
          {errors.education && <span className="error">{errors.education}</span>}
        </div>
        <div>
          <label>
            <input type="checkbox" name="isFresher" checked={formData.isFresher} onChange={handleChange} />
            Are you a fresher?
          </label>
        </div>
        <div>
          <label>Upload CV (PDF only):</label>
          <input type="file" accept=".pdf" onChange={handleFileChange} />
          {errors.cv && <span className="error">{errors.cv}</span>}
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </Modal>
  );
};

export default JobApplicationModal;