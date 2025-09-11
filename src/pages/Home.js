import { useEffect } from "react";

export default function Home() {
  const popularImages = [
    "/images/popular 1.png",
    "/images/popular 2.png",
    "/images/popular 3.png"
  ];
  

  return (
    
    <div className="font-sans min-h-screen flex flex-col">

      <main className="flex-1">
      <section
        className="relative h-screen w-full overflow-hidden pt-20 flex items-center justify-center text-center text-white"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgb(70, 130, 180) 0%, rgba(19, 134, 184, 0.65) 35%, rgba(255,255,255,0.85) 100%)"
          }}
        />
        <div className="relative z-10 max-w-2xl px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Scholarship Finder</h1>
          <p className="text-lg md:text-xl mb-6">
            Browse, apply, and track scholarships effortlessly.
          </p>
          <a
            href="/scholarships"
            className="bg-teal-600 hover:bg-teal-700 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Browse Scholarships
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-slideRight">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              We help students discover scholarships that match their profile and interests.
            </p>
            <p className="text-gray-700">
              A user-friendly platform to search, save, and track scholarships efficiently.
            </p>
          </div>
          <div className="md:w-1/2 animate-slideLeft">
            <img
              src="/images/scholar.jpg"
              alt="About"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-teal-50 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-slideRight">
            <img
              src="/images/findscholar.png"
              alt="Feature"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 animate-slideLeft">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">Features</h2>
            <p className="text-gray-700 mb-4">
              Search for scholarships, save favorites, and track applications in one place.
            </p>
            <p className="text-gray-700 mb-6">
              Efficiently manage your scholarship journey and receive notifications.
            </p>
            <a
              href="/scholarships"
              className="bg-teal-600 hover:bg-teal-700 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Popular Scholarships Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-600">Popular Scholarships</h2>
          <p className="text-gray-700 mt-2">Explore the most applied scholarships by students.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularImages.map((img, i) => (
            <div
              key={i}
              className="bg-teal-50 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={img}
                alt={`Scholarship ${i + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-bold text-teal-600 mb-2">Scholarship {i + 1}</h3>
                <p className="text-gray-700 mb-2">Apply now to achieve your academic goals.</p>
                <button className="bg-teal-600 text-black px-4 py-2 rounded-lg hover:bg-teal-700 transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-teal-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-600">What Students Say</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <p className="text-gray-700 mb-4">
                “This platform made finding scholarships so easy! I saved so much time.”
              </p>
              <h3 className="font-bold text-teal-600">Student {i}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-600 text-black py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-lg">Browse scholarships and find the perfect one for you today!</p>

      </section>
      </main>
      {/* Footer */}
      <footer className="bg-black-700 text-black mt-autobg-teal-700 shadow-lg border-b border-teal-800 py-4 px-8 text-white" style={{ backgroundColor: "#4682B4", zIndex: 9999 }}>
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Scholarship Finder</h3>
            <p className="text-teal-100">Discover, save, and track scholarships with ease.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-teal-100">
              <li><a href="/scholarships" className="hover:underline">Browse Scholarships</a></li>
              <li><a href="/applications" className="hover:underline">Applications</a></li>
              <li><a href="/profile" className="hover:underline">Profile</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-teal-100">
              <li>Email: support@scholarshipfinder.app</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="bg-teal-800 text-center text-teal-100 py-4">
          <p>© {new Date().getFullYear()} Scholarship Finder. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
