import React, { useState } from "react";
// import PatientFields from "./roles/PatientFields";
// import DoctorFields from "./roles/DoctorFields";
// import VendorFields from "./roles/VendorFields";
// import AdminFields from "./roles/AdminFields";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    gender: "",
    dob: "",
    role: "patient"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    // 👉 call signup API later
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {/* Common Fields */}
      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

      <select name="role" value={formData.role} onChange={handleChange} required>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
        <option value="medicineVendor">Medicine Vendor</option>
      </select>

      {/* Role Specific Fields
      {formData.role === "patient" && <PatientFields onChange={handleChange} />}
      {formData.role === "doctor" && <DoctorFields onChange={handleChange} />}
      {formData.role === "medicineVendor" && <VendorFields onChange={handleChange} />}
      {formData.role === "admin" && <AdminFields onChange={handleChange} />} */}

      <button type="submit" className="btn">Sign Up</button>
    </form>
  );
}

export default SignUpForm;