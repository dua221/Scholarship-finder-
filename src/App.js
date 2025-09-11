import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/login";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Home"; 
import ScholarshipsPage from "./pages/Scholarships";
import ApplicationsPage from "./pages/Applications";
import Profile from "./pages/Profile";

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <HomePage />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/scholarships"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <ScholarshipsPage />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/applications"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <ApplicationsPage />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <Profile />
              </>
            </PrivateRoute>
          }
        />
       
      </Routes>
    </Router>
  );
}
