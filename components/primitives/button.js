export default function Button({ children }) {
  return (
    <button className="text-white py-2 px-4 rounded bg-gradient-to-r from-indigo-500 to-indigo-700 shadow-lg hover:from-indigo-800 hover:to-indigo-900">
      {children}
    </button>
  );
}
