import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./UserTable.css";
import Modal from "../modal/Modal";
import apiHandler from "../../middleware/apiHandler";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [editUser, setEditUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const userData = await apiHandler.getUsers();
      setUsers(userData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const toggleModal = (mode, user = null) => {
    setModalMode(mode);
    setEditUser(user);
    setShowModal(!showModal);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await apiHandler.deleteUser(id);
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
        toast.warning("User deleted successfully!");
      } catch (error) {
        console.error("Error deleting user:", error);
        toast.error(
          "An error occurred while deleting the user. Please try again later."
        );
      }
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (modalMode === "create") {
        const newUser = await apiHandler.createUser(formData);
        setUsers([...users, newUser]);
        toast.success("User created successfully!");
      } else if (modalMode === "edit") {
        const updatedUser = await apiHandler.updateUser(editUser.id, formData);
        const updatedUsers = users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
        setUsers(updatedUsers);
        fetchUsers();
        toast.success("User updated successfully!");
      }
      toggleModal(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response.data.err.errors[0].message);
    }
  };

  return (
    <div>
      <div className="header">
        <button className="create-button" onClick={() => toggleModal("create")}>
          <i className="fa fa-plus"></i> Create
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>DOB</th>
              <th>Actions</th>
            </tr>
          </thead>
          {users.length === 0 ? (
            <p className="no-entry">No entries available.</p>
          ) : (
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{startIndex + index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.dob}</td>
                  <td>
                    <button
                      className="action-button edit-button"
                      onClick={() => toggleModal("edit", user)}
                    >
                      <i className="fa fa-edit"></i> Edit
                    </button>
                    <button
                      className="action-button delete-button"
                      onClick={() => handleDelete(user.id)}
                    >
                      <i className="fa fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <ReactPaginate
        pageCount={Math.ceil(users.length / itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
      />
      {showModal && (
        <Modal
          title={modalMode === "create" ? "Create User" : "Edit User"}
          onClose={() => toggleModal(null)}
          initialValues={editUser || {}}
          onSubmit={handleSubmit}
          onUpdate={fetchUsers}
        />
      )}
    </div>
  );
};

export default UserTable;
