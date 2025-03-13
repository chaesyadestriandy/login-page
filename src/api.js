import axios from "axios";

export const handleResetPassword = async (email) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/auth/request-password-reset",
      { email }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    alert(error.response?.data?.message || "Failed to send reset link.");
  }
};
