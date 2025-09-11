import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords do not match!");
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setError("");
    navigate("/"); 
  };

  return (
    <div className="relative min-h-screen w-full grid grid-cols-1 md:grid-cols-2">
      <div
        className="absolute inset-0"
        style={{
          background:
          "linear-gradient(180deg,rgb(70, 130, 180) 0%, rgba(19, 134, 184, 0.65) 35%, rgba(255,255,255,0.85) 100%)"
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12">
        <div className="flex items-center space-x-3 mb-8">
          <img src="/images/logoscholar.png" alt="Logo" className="h-10 w-10 rounded object-contain" />
          <h1 className="text-4xl md:text-5xl font-bold text-Black drop-shadow">Scholarship Finder</h1>
        </div>
        <div className="p-8 rounded-2xl shadow-2xl ring-1 ring-black/10 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-lightblue-600 text-black py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/" className="text-teal-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
      </div>
      <div className="relative hidden md:flex items-center justify-center p-6 overflow-hidden">
        <img
          src="/images/popup.png"
          alt="Scholarship Illustration"
          className="w-64 md:w-80 animate-slideUpCenter"
        />
      </div>
    </div>
  );
}
