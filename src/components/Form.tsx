import emailjs from "@emailjs/browser";
import React, { FormEvent, useState } from "react";

interface FormData {
  name: string;
  schoolName: string;
  city: string;
  class: string;
  phoneNo: string;
  query: string;
}

function Form() {
  emailjs.init({ publicKey: "M4KHgRmUTUXxIpTxU" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    schoolName: "",
    city: "",
    class: "",
    phoneNo: "",
    query: "",
  });

  const [phoneError, setPhoneError] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phoneNo") {
      const digitsOnly = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      setPhoneError(
        digitsOnly.length !== 10 ? "Phone number must be 10 digits" : ""
      );
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formData.phoneNo.length !== 10) {
      setPhoneError("Phone number must be 10 digits");
      return;
    }

    emailjs
      .send("service_vmmjwur", "template_zis1hyr", {
        subject: "ByStudent",
        name: formData.name,
        schoolname: formData.schoolName,
        city: formData.city,
        class: formData.class,
        phone: formData.phoneNo,
        message: formData.query,
      })
      .then(() => {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          schoolName: "",
          city: "",
          class: "",
          phoneNo: "",
          query: "",
        });
        setPhoneError("");
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong while sending the form. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 via-pink-100 to-white p-2 sm:p-4">
      <div className="w-full max-w-md transform rounded-xl bg-white/90 backdrop-blur-md border border-gray-200 px-6 py-4 shadow-2xl transition-all duration-300 hover:scale-[1.01]">
        <h2 className="text-center text-2xl font-bold text-indigo-700 mb-4">
          Grievance Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full name"
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="schoolName"
              className="block text-sm font-medium text-gray-800"
            >
              School Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleInputChange}
              placeholder="School name"
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-800"
            >
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="class"
              className="block text-sm font-medium text-gray-800"
            >
              Class <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="class"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              placeholder="Class (e.g., 10th)"
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phoneNo"
              className="block text-sm font-medium text-gray-800"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleInputChange}
              placeholder="10-digit phone number"
              className={`mt-1 w-full rounded-md border ${
                phoneError ? "border-red-500" : "border-gray-300"
              } bg-gray-50 p-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300`}
              required
            />
            {phoneError && (
              <p className="text-xs text-red-500 mt-1">{phoneError}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="query"
              className="block text-sm font-medium text-gray-800"
            >
              Query or Change in Name <span className="text-red-500">*</span>
            </label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleInputChange}
              placeholder="Query or name change request"
              className="mt-1 w-full resize-none rounded-md border border-gray-300 bg-gray-50 p-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
              rows={3}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 py-2 font-medium text-white transition-transform duration-200 hover:scale-105 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
