"use client";

import { useEffect, useState } from 'react';
import './ForgetPassword.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router=useRouter();
  const { data:session,status: sessionStatus } = useSession();
  useEffect(()=>{
    if(sessionStatus === "authenticated") {
        router.push("/dashboard");
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
        const res = await fetch('/api/auth/forgot-password', {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: { 'Content-Type': 'application/json' }
        });
      
        const data = await res.json().catch(() => null); // prevent crash on non-JSON
      
        if (res.status === 400) {
          setError("User with this email is not registered")
        }
        if(res.status === 200){
            setError("");
            router.push("/login");
        }
      
        console.log(data.message);
      } catch (error) {
        setError("error, try again")
        console.log(error);
      }
      
  };

  return (
   sessionStatus !== "authenticated" && (
    <div className="forgot-password-container">
    <h2>Forgot Password</h2>
    <form onSubmit={handleSubmit} className="forgot-password-form">
      <input
        type="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
      <Link href="/login">Login Here</Link>
    </form>
    {message && <p className="success-message">{message}</p>}
    {error && <p className="error-message">{error}</p>}
  </div>
   )
  );
};

export default ForgetPassword;
