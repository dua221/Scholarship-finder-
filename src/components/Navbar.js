import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/";
  };
  return (
    
    <nav className="fixed top-0 left-0 w-full z-50  py-4 px-8 text-white" style={{ backgroundColor: "#4682B4	", zIndex: 9999 }}>
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/images/logoscholar.png" alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded object-contain" />
          <h1 className="font-bold text-2xl md:text-3xl text-white">Scholarship Finder</h1>
        </div>
        <div className="space-x-6 text-lg md:text-xl font-semibold ml-auto flex items-center">
          <Link to="/" className="text-white hover:underline hover:text-blue-200 transition">
            Home
          </Link>
          <Link to="/scholarships" className="text-white hover:underline hover:text-blue-200 transition">
            Scholarships
          </Link>
          <Link to="/applications" className="text-white hover:underline hover:text-blue-200 transition">
            Applications
          </Link>
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-white hover:underline hover:text-blue-200 transition"
              aria-haspopup="menu"
              aria-expanded={open}
            >
              Profile
            </button>
            {open && (
              <div
                className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg ring-1 ring-black/10 py-1"
                role="menu"
              >
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                  role="menuitem"
                >
                  View Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>

  );
}
