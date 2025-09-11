import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveScholarship } from "../store/savedSlice";

export default function Scholarships() {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => {
        setScholarships(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-gray-500">Loading scholarships...</p>;

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 pt-24">
      {scholarships.map((sch) => (
        <div
          key={sch.id}
          className="bg-white shadow-lg rounded-xl p-4 border hover:shadow-xl transition"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-2">
            {sch.title.slice(0, 20)}...
          </h3>
          <p className="text-gray-600">{sch.body.slice(0, 80)}...</p>

          <div className="flex gap-2 mt-4">
            {/* Apply button */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Apply Now
            </button>

            {/* Save button */}
            <button
              onClick={() => dispatch(saveScholarship(sch))}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Save
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
