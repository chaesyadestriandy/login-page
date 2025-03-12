import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Handle perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login dengan:", formData);
  };

  // Handle Login dengan Google
  const handleGoogleLogin = () => {
    console.log("Login dengan Google...");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-3xl font-semibold mb-4">Welcome To Finovate</h2>
        <h4 className="text-center text-sm p">Welcome back! Please enter your details</h4>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Masukkan email" className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
          </div>

          {/* Password Input */}
          <div className="mb-3 relative">
            <label className="block text-gray-700 font-medium">Password:</label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
            <button type="button" className="absolute right-3 top-9 text-gray-600" onClick={() => setPasswordVisible(!passwordVisible)} aria-label={passwordVisible ? "Sembunyikan password" : "Tampilkan password"}>
              👁️
            </button>
          </div>

          {/* Lupa Password */}
          <div className="text-right text-blue-600 text-sm cursor-pointer mb-3">Lupa Password?</div>

          {/* Tombol Login */}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>

        {/* Atau */}
        <div className="my-3 text-center text-gray-500">atau</div>

        {/* Tombol Login dengan Google */}
        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center bg-white border py-2 rounded-lg shadow-md hover:bg-gray-100">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.m.wikipedia.org%2Fwiki%2FBerkas%3AGoogle_%2522G%2522_logo.svg&psig=AOvVaw36iTHiFYfjcMe1E6FLRF6I&ust=1741875029711000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICxxaXchIwDFQAAAAAdAAAAABAE"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Login dengan Google
        </button>

        {/* Link ke Register */}
        <div className="text-center mt-3 text-gray-600 text-sm">
          Belum punya akun? <span className="text-blue-600 cursor-pointer">Daftar disini</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
