import axios from "axios";
import React, { useState } from "react";

const AddStudent = () => {
  const [student, setStudent] = useState({
    Name: "",
    Roll_no: "",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setStudent((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(student);
    try {
      let res = await axios.post("http://localhost:3000/students", student);
      console.log(res);
      alert(`Student added :${student.Name}`);
    } catch (error) {
      console.error("Error adding student:", error.response.data.message);
      alert(error.response.data.message);
      // Optional: show user-facing error message
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md mt-12 ">
      <h2 className="text-2xl font-semibold text-center mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="Name"
            className="block text-sm font-medium text-gray-700"
          >
            Student Name
          </label>
          <input
            onChange={handleInput}
            name="Name"
            value={student.Name}
            type="text"
            id="Name"
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />
        </div>

        <div>
          <label
            htmlFor="Roll_no"
            className="block text-sm font-medium text-gray-700"
          >
            Student Roll No
          </label>
          <input
            onChange={handleInput}
            name="Roll_no"
            value={student.Roll_no}
            type="text"
            id="Roll_no"
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
