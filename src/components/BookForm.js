import React from "react";

const BookForm = ({ isEditing, formData, closeModal }) => {
  return (
    <form>
      <div>
        <lable>Book Name:</lable>
        <input />
      </div>
      <div>
        <lable>APC Number:</lable>
        <input />
      </div>
      <div>
        <lable>ISBN Number:</lable>
        <input />
      </div>
      <button>{isEditing ? "Edit" : "Add"}</button>
      <button onClick={closeModal}>Close</button>
    </form>
  );
};

export default BookForm;
