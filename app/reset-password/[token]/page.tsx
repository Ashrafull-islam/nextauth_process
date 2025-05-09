"use client";
import "../resetPassword.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ResetPassword = ({params}:any) => {
  console.log(params)
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const token = window.location.pathname.split("/").pop(); // get token from URL

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, token }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setMessage("Password reset successful");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="reset-container">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleReset} className="reset-form">
        <input
          type="password"
          placeholder="New Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Reset Password</button>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
