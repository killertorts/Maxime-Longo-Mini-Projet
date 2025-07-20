
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "JeanK" && password === "123456") {
      onLogin();
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-orange-600">Employee Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          className="w-full mb-3 px-3 py-2 border rounded"
          type="text"
          placeholder="Username"
          value={username}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full mb-3 px-3 py-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
