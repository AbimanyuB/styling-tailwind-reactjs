export default function Input({ label, invalid, ...props }) {
  let labelClass = "block mb-2 font-semibold";
  let inputClass = "w-full p-2 outline-none rounded";

  if (invalid) {
    labelClass += "text-red-600";
    inputClass += "bg-red-200";
  } else {
    inputClass += "bg-stone-300";
    labelClass += " text-white ";
  }

  return (
    <p className="mb-4">
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...props} />
    </p>
  );
}
