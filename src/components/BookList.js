import React, { useState } from "react";
import BookForm from "./BookForm";
import Modal from "react-modal";

const BookList = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    apc_num:"",
    isbn_num:"",
  })

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h2>Book List</h2>
      <hr />
      <button className="add-button" onClick={openModal}>
        Add Book
      </button>
      <hr />
      <Modal 
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      >
        <BookForm 
        isEditing={isEditing} 
        formData={formData}
        closeModal={closeModal}
        />
      </Modal>
    </div>
  );
};

export default BookList;
