// src/apiHandler.js
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

const apiHandler = {
  getUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  createUser: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/user`, userData);
      return response.data.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },

  updateUser: async (userId, userData) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/user/${userId}`,
        userData
      );
      return response.data.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  },

  deleteUser: async (userId) => {
    try {
      await axios.delete(`${API_BASE_URL}/user/${userId}`);
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  },
};

export default apiHandler;
