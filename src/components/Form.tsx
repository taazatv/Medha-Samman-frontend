import React, { FormEvent, useState } from 'react';

interface FormData {
  name: string;
  schoolName: string;
  city: string;
  class: string;
  phoneNo: string;
  query: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    schoolName: '',
    city: '',
    class: '',
    phoneNo: '',
    query: '',
  });
  const [phoneError, setPhoneError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phoneNo') {
      const digitsOnly = value.replace(/[^0-9]/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      setPhoneError(digitsOnly.length !== 10 ? 'Phone number must be 10 digits' : '');
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.phoneNo.length !== 10) {
      setPhoneError('Phone number must be 10 digits');
      return;
    }
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-5 w-full max-w-sm transform transition-all hover:scale-105">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
          Medha Samman Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full name"
              className="mt-1 block w-full rounded-md border border-gray-200 bg-gray-50 p-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="schoolName" className="block text-xs font-medium text-gray-700">
              School Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleInputChange}
              placeholder="School name"
              className="mt-1 block w-full rounded-md border border-gray-200 bg-gray-50 p-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-xs font-medium text-gray-700">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="mt-1 block w-full rounded-md border border-gray-200 bg-gray-50 p-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="class" className="block text-xs font-medium text-gray-700">
              Class <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="class"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              placeholder="Class (e.g., 10th)"
              className="mt-1 block w-full rounded-md border border-gray-200 bg-gray-50 p-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNo" className="block text-xs font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleInputChange}
              placeholder="10-digit phone number"
              className={`mt-1 block w-full rounded-md border ${phoneError ? 'border-red-500' : 'border-gray-200'} bg-gray-50 p-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition-colors`}
              required
            />
            {phoneError && (
              <p className="mt-1 text-xs text-red-500">{phoneError}</p>
            )}
          </div>
          <div>
            <label htmlFor="query" className="block text-xs font-medium text-gray-700">
              Query or Change in Name <span className="text-red-500">*</span>
            </label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleInputChange}
              placeholder="Query or name change request"
              className="mt-1 block w-full rounded-md border border-gray-200 bg-gray-50 p-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition-colors resize-none"
              rows={3}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-700 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
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