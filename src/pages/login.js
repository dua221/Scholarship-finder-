import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Static credentials
    const validEmail = "dua@ideofuzion.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home"); 
    } else {
      setError("Invalid email or password!");
    }
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
        <div className=" p-8 rounded-2xl shadow-2xl ring-1 ring-black/10 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-teal-600 text-black py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-teal-600 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
      </div>
      {/* Right animated panel */}
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
