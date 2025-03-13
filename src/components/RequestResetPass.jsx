import React from "react";
import { useState } from "react";
import axios from "axios";

const RequestResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/request-password-reset",
        {
          email: email,
        }
      );

      // Simpan pesan dari response JSON
      setMessage(response.data.message);
      setIsError(false);
    } catch (error) {
      setMessage(error.response.data.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center">Reset Password</h2>
        <p className="text-gray-500 text-center mb-6 text-sm mt-2">
          Enter your email address and we will send you a link to reset your
          password.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 text-white font-semibold py-2 rounded-lg hover:bg-gray-500 transition"
          >
            {isLoading ? (
              <>
                <div className="flex justify-center items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full"
                    viewBox="0 0 24 24"
                  ></svg>
                </div>
              </>
            ) : (
              "Kirim Link Reset"
            )}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

        <div className="text-center mt-4 text-sm">
          <p>
            Remember your password?
            <a href="/login" className="text-blue-500 font-medium">
              {" "}
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestResetPassword;
