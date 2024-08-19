export default function Button({ children, ...props }) {
  return (
    <button className="p-2 bg-amber-600 rounded text-white text-balance align-middle hover:bg-amber-700" {...props}>
      {children}
    </button>
  );
}
