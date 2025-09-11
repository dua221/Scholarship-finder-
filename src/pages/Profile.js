import { useSelector } from "react-redux";

export default function Profile() {
  // Get data from Redux
  const savedScholarships = useSelector((state) => state.saved?.items ?? []);
  const applications = useSelector((state) => state.applications?.items ?? []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 pt-24">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-xl md:max-w-2xl text-center relative">
        <div className="h-32 w-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-t-2xl absolute top-0 left-0"></div>

        <div className="relative -mt-16">
          <img
            src="/images/pp.jpg"
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">Dua Anjum</h2>
        <p className="text-gray-600">dua@ideofuzion.com</p>
        <p className="text-gray-500 text-sm mt-1">Scholarship Enthusiast 🎓</p>
        <div className="mt-8 flex justify-center">
          <div className="bg-teal-50 p-6 rounded-xl shadow hover:shadow-md transition w-64 text-center">
            <h3 className="text-3xl font-bold text-teal-600">{savedScholarships.length}</h3>
            <p className="text-gray-700">Saved Scholarships</p>
          </div>
        </div>

        <div className="mt-10 text-left">
          <h3 className="text-xl font-semibold text-teal-600 mb-2">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            A motivated student passionate about exploring scholarship opportunities
            worldwide. My goal is to achieve academic excellence while minimizing financial
            burdens through the right scholarship programs.
          </p>
        </div>

          <button
            onClick={() => {
              localStorage.removeItem("isAuthenticated");
              window.location.href = "/";
            }}
            className="bg-red-500 text-Black px-6 py-2 rounded-lg shadow hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

  );
}
