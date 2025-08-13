// // JobApplicationModal.jsx
// import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
// import { FaTimes } from "react-icons/fa";

// /*
//   IMPORTANT:
//   In your app entry (once), set the app element for react-modal for accessibility:
//     Modal.setAppElement('#root');
// */

// const initialData = (jobTitle = "") => ({
//   role: jobTitle,
//   fullName: "",
//   email: "",
//   mobileNumber: "",
//   address: "",
//   experience: "",
//   skills: "",
//   education: "",
//   isFresher: false,
//   linkedin: "",
//   expectedSalary: "",
//   noticePeriod: "",
//   coverLetter: "",
//   cv: null, // File object
// });

// const MAX_CV_SIZE_BYTES = 2 * 1024 * 1024; // 2 MB

// const validators = {
//   fullName: (v) => (v.trim() ? "" : "Full name is required."),
//   email: (v) => (/\S+@\S+\.\S+/.test(v) ? "" : "Enter a valid email."),
//   mobileNumber: (v) =>
//     /^\d{10}$/.test(v) ? "" : "Mobile number must be 10 digits (numbers only).",
//   address: (v) => (v.trim() ? "" : "Address is required."),
//   experience: (v) => (v.trim() ? "" : "Experience is required."),
//   skills: (v) => (v.trim() ? "" : "Skills are required."),
//   education: (v) => (v.trim() ? "" : "Education is required."),
//   linkedin: (v) =>
//     v.trim() && /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/.test(v)
//       ? ""
//       : "Enter a valid LinkedIn URL.",
//   expectedSalary: (v) => (v.trim() ? "" : "Expected salary is required."),
//   noticePeriod: (v) => (v.trim() ? "" : "Notice period is required."),
//   coverLetter: (v) => (v.trim() ? "" : "Cover letter is required."),
//   cv: (file) => {
//     if (!file) return "CV is required.";
//     if (file.type !== "application/pdf") return "CV must be a PDF.";
//     if (file.size > MAX_CV_SIZE_BYTES) return "CV must be smaller than 2 MB.";
//     return "";
//   },
// };

// export default function JobApplicationModal({ isOpen, onRequestClose, jobTitle }) {
//   useEffect(() => {
//     // safety: ensure role matches jobTitle when prop changes
//     setForm((prev) => ({ ...prev, role: jobTitle || "" }));
//   }, [jobTitle]);

//   const [form, setForm] = useState(initialData(jobTitle));
//   const [touched, setTouched] = useState({});
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);

//   // On open, reset
//   useEffect(() => {
//     if (isOpen) {
//       setForm(initialData(jobTitle));
//       setTouched({});
//       setErrors({});
//       setSubmitting(false);
//     }
//   }, [isOpen, jobTitle]);

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     if (type === "file") {
//       const file = files && files[0] ? files[0] : null;
//       setForm((f) => ({ ...f, [name]: file }));
//       // validate file immediately
//       const err = validators[name] ? validators[name](file) : "";
//       setErrors((prev) => ({ ...prev, [name]: err }));
//       return;
//     }
//     const val = type === "checkbox" ? checked : value;
//     setForm((f) => ({ ...f, [name]: val }));
//     // if field already touched, validate live
//     if (touched[name]) {
//       const err = validators[name] ? validators[name](val) : "";
//       setErrors((prev) => ({ ...prev, [name]: err }));
//     }
//   };

//   const handleBlur = (e) => {
//     const { name } = e.target;
//     setTouched((t) => ({ ...t, [name]: true }));
//     const val = form[name];
//     const err = validators[name] ? validators[name](val) : "";
//     setErrors((prev) => ({ ...prev, [name]: err }));
//   };

//   const validateAll = () => {
//     const newErrors = {};
//     Object.keys(validators).forEach((field) => {
//       const val = form[field];
//       newErrors[field] = validators[field](val) || "";
//     });
//     // remove empty errors
//     Object.keys(newErrors).forEach((k) => {
//       if (!newErrors[k]) delete newErrors[k];
//     });
//     setErrors(newErrors);
//     // mark all touched
//     const newTouched = {};
//     Object.keys(validators).forEach((f) => (newTouched[f] = true));
//     setTouched(newTouched);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (submitting) return;
//     if (!validateAll()) {
//       // focus first invalid input - minimal UX improvement
//       // const firstError = Object.keys(errors)[0];
//       // can't reliably focus by name here without refs; okay to return
//       return;
//     }

//     setSubmitting(true);
//     try {
//       // build FormData for server if needed
//       const payload = new FormData();
//       Object.keys(form).forEach((k) => {
//         if (k === "cv") {
//           if (form.cv) payload.append("cv", form.cv, form.cv.name);
//         } else {
//           payload.append(k, form[k]);
//         }
//       });

//       // replace this with your fetch / axios call
//       // await fetch('/api/apply', { method: 'POST', body: payload });

//       // demo: console
//       console.log("Submitting payload (demo):", form);
//       // show success briefly (you can replace with toast)
//       alert("Application submitted successfully!");
//       onRequestClose();
//     } catch (err) {
//       console.error("Submit error:", err);
//       alert("Something went wrong while submitting. Try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // Helper to get error message for field
//   const err = (name) => (errors[name] ? errors[name] : "");

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={() => !submitting && onRequestClose()}
//       contentLabel={`Apply for ${jobTitle}`}
//       className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-6 mx-4 relative overflow-y-auto max-h-[92vh] transition-transform transform-gpu"
//       overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//       shouldCloseOnOverlayClick={!submitting}
//     >
//       <button
//         onClick={() => !submitting && onRequestClose()}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
//         aria-label="Close modal"
//       >
//         <FaTimes size={18} />
//       </button>

//       <header className="mb-4">
//         <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
//           Apply for <span className="text-indigo-600">{jobTitle}</span>
//         </h2>
//         <p className="text-sm text-slate-500 mt-1">
//           Fill basic details & upload your CV (PDF). Fields marked with * are required.
//         </p>
//       </header>

//       <form onSubmit={handleSubmit} className="space-y-5">
//         {/* Grid: 2 columns for short fields, long fields full width */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Role - short (readOnly) */}
//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-slate-700">Role</label>
//             <input
//               name="role"
//               value={form.role || jobTitle}
//               readOnly
//               className="mt-1 rounded-lg border border-slate-200 px-3 py-2 bg-slate-50 text-slate-700"
//               aria-readonly="true"
//             />
//           </div>

//           {/* Full Name - make short but important */}
//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-slate-700">
//               Full Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               name="fullName"
//               value={form.fullName}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={`mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
//                 err("fullName") ? "border-red-400" : "border-slate-200"
//               }`}
//               aria-invalid={!!err("fullName")}
//             />
//             {err("fullName") && <div className="text-xs text-red-500 mt-1">{err("fullName")}</div>}
//           </div>

//           {/* Email */}
//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-slate-700">
//               Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={`mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
//                 err("email") ? "border-red-400" : "border-slate-200"
//               }`}
//               aria-invalid={!!err("email")}
//             />
//             {err("email") && <div className="text-xs text-red-500 mt-1">{err("email")}</div>}
//           </div>

//           {/* Mobile */}
//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-slate-700">
//               Mobile Number <span className="text-red-500">*</span>
//             </label>
//             <input
//               name="mobileNumber"
//               inputMode="numeric"
//               value={form.mobileNumber}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="10 digits"
//               className={`mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
//                 err("mobileNumber") ? "border-red-400" : "border-slate-200"
//               }`}
//               aria-invalid={!!err("mobileNumber")}
//             />
//             {err("mobileNumber") && <div className="text-xs text-red-500 mt-1">{err("mobileNumber")}</div>}
//           </div>

//           {/* Expected Salary */}
//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-slate-700">
//               Expected Salary <span className="text-red-500">*</span>
//             </label>
//             <input
//               name="expectedSalary"
//               value={form.expectedSalary}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="e.g., 6 LPA"
//               className={`mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
//                 err("expectedSalary") ? "border-red-400" : "border-slate-200"
//               }`}
//               aria-invalid={!!err("expectedSalary")}
//             />
//             {err("expectedSalary") && <div className="text-xs text-red-500 mt-1">{err("expectedSalary")}</div>}
//           </div>

//           {/* Notice Period */}
//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-slate-700">
//               Notice Period <span className="text-red-500">*</span>
//             </label>
//             <input
//               name="noticePeriod"
//               value={form.noticePeriod}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="e.g., Immediate / 30 days"
//               className={`mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
//                 err("noticePeriod") ? "border-red-400" : "border-slate-200"
//               }`}
//               aria-invalid={!!err("noticePeriod")}
//             />
//             {err("noticePeriod") && <div className="text-xs text-red-500 mt-1">{err("noticePeriod")}</div>}
//           </div>

//           {/* Is Fresher */}
//           <div className="flex items-center gap-3">
//             <input
//               id="isFresher"
//               type="checkbox"
//               name="isFresher"
//               checked={form.isFresher}
//               onChange={handleChange}
//               className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
//             />
//             <label htmlFor="isFresher" className="text-sm text-slate-700">
//               Are you a fresher?
//             </label>
//           </div>

//           {/* LinkedIn */}
//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-slate-700">LinkedIn URL <span className="text-red-500">*</span></label>
//             <input
//               name="linkedin"
//               value={form.linkedin}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="https://linkedin.com/in/your-profile"
//               className={`mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
//                 err("linkedin") ? "border-red-400" : "border-slate-200"
//               }`}
//               aria-invalid={!!err("linkedin")}
//             />
//             {err("linkedin") && <div className="text-xs text-red-500 mt-1">{err("linkedin")}</div>}
//           </div>
//         </div>

//         {/* Long / full-width fields */}
//         <div className="space-y-4">
//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-slate-700">Address <span className="text-red-500">*</span></label>
//             <input
//               name="address"
//               value={form.address}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={`mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
//                 err("address") ? "border-red-400" : "border-slate-200"
//               }`}
//               aria-invalid={!!err("address")}
//             />
//             {err("address") && <div className="text-xs text-red-500 mt-1">{err("address")}</div>}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-slate-700">Experience <span className="text-red-500">*</span></label>
//               <input
//                 name="experience"
//                 value={form.experience}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="e.g., 3 years as Frontend Dev"
//                 className={`mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
//                   err("experience") ? "border-red-400" : "border-slate-200"
//                 }`}
//                 aria-invalid={!!err("experience")}
//               />
//               {err("experience") && <div className="text-xs text-red-500 mt-1">{err("experience")}</div>}
//             </div>

//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-slate-700">Education <span className="text-red-500">*</span></label>
//               <input
//                 name="education"
//                 value={form.education}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="e.g., B.Tech Computer Science"
//                 className={`mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
//                   err("education") ? "border-red-400" : "border-slate-200"
//                 }`}
//                 aria-invalid={!!err("education")}
//               />
//               {err("education") && <div className="text-xs text-red-500 mt-1">{err("education")}</div>}
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-slate-700">Skills <span className="text-red-500">*</span></label>
//             <input
//               name="skills"
//               value={form.skills}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Comma separated, e.g., React, Node, Tailwind"
//               className={`mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
//                 err("skills") ? "border-red-400" : "border-slate-200"
//               }`}
//               aria-invalid={!!err("skills")}
//             />
//             {err("skills") && <div className="text-xs text-red-500 mt-1">{err("skills")}</div>}
//           </div>

//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-slate-700">Cover Letter <span className="text-red-500">*</span></label>
//             <textarea
//               name="coverLetter"
//               value={form.coverLetter}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               rows={5}
//               placeholder="Write a short cover letter..."
//               className={`mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
//                 err("coverLetter") ? "border-red-400" : "border-slate-200"
//               }`}
//               aria-invalid={!!err("coverLetter")}
//             />
//             {err("coverLetter") && <div className="text-xs text-red-500 mt-1">{err("coverLetter")}</div>}
//           </div>
//         </div>

//         {/* File upload row */}
//         <div className="flex flex-col md:flex-row md:items-center md:gap-6">
//           <div className="flex-1">
//             <label className="text-sm font-medium text-slate-700 block mb-1">Upload CV (PDF, max 2 MB) <span className="text-red-500">*</span></label>
//             <label className="inline-flex items-center gap-3 cursor-pointer">
//               <input
//                 type="file"
//                 accept="application/pdf"
//                 name="cv"
//                 onChange={handleChange}
//                 className="hidden"
//               />
//               <span className="inline-block px-4 py-2 rounded-md border border-slate-200 bg-slate-50 text-sm">
//                 Choose file
//               </span>
//               <span className="text-sm text-slate-500">
//                 {form.cv ? form.cv.name : "No file chosen"}
//               </span>
//             </label>
//             {err("cv") && <div className="text-xs text-red-500 mt-2">{err("cv")}</div>}
//           </div>

//           {/* Small helper / submit area */}
//           <div className="mt-3 md:mt-0 md:w-56">
//             <button
//               type="submit"
//               disabled={submitting}
//               className={`w-full py-2 rounded-md text-white font-medium transition ${
//                 submitting ? "bg-indigo-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
//               }`}
//               aria-disabled={submitting}
//             >
//               {submitting ? "Submitting..." : "Submit Application"}
//             </button>
//           </div>
//         </div>

//         {Object.keys(errors).length > 0 && (
//           <div className="text-sm text-red-600 pt-1">
//             Please fix the highlighted fields above.
//           </div>
//         )}
//       </form>
//     </Modal>
//   );
// }



















































































import React, { useState } from 'react';

export default function JobApplicationModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    role: 'Senior Frontend Engineer',
    fullName: '',
    email: '',
    mobileNumber: '',
    address: '',
    experience: '',
    skills: '',
    education: '',
    isFresher: false,
    linkedin: '',
    expectedSalary: '',
    noticePeriod: '',
    coverLetter: '',
    cv: null
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }

    const mobileRegex = /^\d{10}$/;
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required.";
    } else if (!mobileRegex.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile number must be 10 digits (numbers only).";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.experience.trim()) newErrors.experience = "Experience is required.";
    if (!formData.skills.trim()) newErrors.skills = "Skills are required.";
    if (!formData.education.trim()) newErrors.education = "Education is required.";
    if (!formData.expectedSalary.trim()) newErrors.expectedSalary = "Expected salary is required.";
    if (!formData.noticePeriod.trim()) newErrors.noticePeriod = "Notice period is required.";
    if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required.";

    const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.+$/i;
    if (!formData.linkedin.trim()) {
      newErrors.linkedin = "LinkedIn URL is required.";
    } else if (!linkedinRegex.test(formData.linkedin)) {
      newErrors.linkedin = "Enter a valid LinkedIn URL.";
    }

    if (!selectedFile) {
      newErrors.cv = "CV is required.";
    } else if (selectedFile.type !== "application/pdf") {
      newErrors.cv = "CV must be a PDF.";
    } else if (selectedFile.size > 2 * 1024 * 1024) {
      newErrors.cv = "CV must be smaller than 2 MB.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleMobileNumberChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    handleInputChange('mobileNumber', digits);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      handleInputChange('cv', file);
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for API submission
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "cv" && selectedFile) {
          payload.append("cv", selectedFile, selectedFile.name);
        } else {
          payload.append(key, String(value));
        }
      });

      // Here you can add your API call
      // Example: await fetch('/api/submit-application', { method: 'POST', body: payload });

      // Simulate API delay for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert("Application submitted successfully! (Add your API endpoint to actually submit the data)");
      setIsOpen(false);
    } catch (error) {
      alert("Error submitting application. Please try again.",error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <button 
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open Job Application Form
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 ">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Apply for <span className="text-blue-600">Senior Frontend Engineer</span>
              </h2>
              <p className="text-gray-600">
                Fill in your details and upload your CV (PDF, max 2 MB). Fields marked * are required.
              </p>
            </div>
            <button
              onClick={() => !isSubmitting && setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center"
              disabled={isSubmitting}
            >
              ×
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Role */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  value={formData.role}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
                />
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.mobileNumber}
                  onChange={handleMobileNumberChange}
                  placeholder="10 digits"
                  maxLength={10}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.mobileNumber && (
                  <p className="text-xs text-red-500">{errors.mobileNumber}</p>
                )}
              </div>

              {/* Expected Salary */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Expected Salary <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.expectedSalary}
                  onChange={(e) => handleInputChange('expectedSalary', e.target.value)}
                  placeholder="e.g., 6 LPA"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.expectedSalary ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.expectedSalary && (
                  <p className="text-xs text-red-500">{errors.expectedSalary}</p>
                )}
              </div>

              {/* Notice Period */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Notice Period <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.noticePeriod}
                  onChange={(e) => handleInputChange('noticePeriod', e.target.value)}
                  placeholder="e.g., Immediate / 30 days"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.noticePeriod ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.noticePeriod && (
                  <p className="text-xs text-red-500">{errors.noticePeriod}</p>
                )}
              </div>

              {/* Fresher Checkbox */}
              <div className="flex items-center gap-3 pt-5">
                <input
                  type="checkbox"
                  id="isFresher"
                  checked={formData.isFresher}
                  onChange={(e) => handleInputChange('isFresher', e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="isFresher" className="text-sm text-gray-700">
                  Are you a fresher?
                </label>
              </div>

              {/* LinkedIn URL */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  LinkedIn URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/your-profile"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.linkedin ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.linkedin && (
                  <p className="text-xs text-red-500">{errors.linkedin}</p>
                )}
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.address && (
                <p className="text-xs text-red-500">{errors.address}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Experience */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  placeholder="e.g., 3 years as Frontend Dev"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.experience ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.experience && (
                  <p className="text-xs text-red-500">{errors.experience}</p>
                )}
              </div>

              {/* Education */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Education <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.education}
                  onChange={(e) => handleInputChange('education', e.target.value)}
                  placeholder="e.g., B.Tech Computer Science"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.education ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.education && (
                  <p className="text-xs text-red-500">{errors.education}</p>
                )}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700">
                Skills <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.skills}
                onChange={(e) => handleInputChange('skills', e.target.value)}
                placeholder="Comma separated, e.g., React, Node, Tailwind"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.skills ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.skills && (
                <p className="text-xs text-red-500">{errors.skills}</p>
              )}
            </div>

            {/* Cover Letter */}
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700">
                Cover Letter <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.coverLetter}
                onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                placeholder="Write a short cover letter..."
                rows={5}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                  errors.coverLetter ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.coverLetter && (
                <p className="text-xs text-red-500">{errors.coverLetter}</p>
              )}
            </div>

            {/* File Upload and Submit */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <div className="flex-1">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Upload CV (PDF, max 2 MB) <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <span className="inline-block px-4 py-2 rounded-md border border-gray-300 bg-gray-50 text-sm hover:bg-gray-100 transition-colors">
                      Choose file
                    </span>
                  </label>
                  <span className="text-sm text-gray-500">
                    {selectedFile ? selectedFile.name : "No file chosen"}
                  </span>
                </div>
                {errors.cv && <p className="text-xs text-red-500 mt-2">{errors.cv}</p>}
              </div>

              <div className="mt-3 md:mt-0 md:w-56">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-md text-white font-medium transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






