import { useSelector, useDispatch } from "react-redux";
import { removeScholarship } from "../store/savedSlice";

export default function Applications() {
  const saved = useSelector((state) => state.saved.items);
  const dispatch = useDispatch();

  if (saved.length === 0) {
    return <p className="text-center text-gray-500 p-6">No saved scholarships yet.</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 pt-24">
      {saved.map((sch) => (
        <div key={sch.id} className="bg-white shadow-lg rounded-xl p-4 border">
          <h3 className="text-xl font-bold text-green-600 mb-2">{sch.title.slice(0, 20)}...</h3>
          <p className="text-gray-600">{sch.body.slice(0, 80)}...</p>
          <button
            onClick={() => dispatch(removeScholarship(sch.id))}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
