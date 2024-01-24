export default function Input({ label, invalid, ...props }) {
  let labelClass = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClass = "w-full px-3 py-2 leading-tight border rounded shadow";

  return (
    <p>
      <label
        className={`${labelClass} ${
          invalid ? "text-red-400" : "text-stone-300"
        }`}
      >
        {label}
      </label>
      <input
        className={`${inputClass} ${
          invalid
            ? "text-red-500 bg-red-100 border-red-300"
            : "text-gray-700 bg-stone-300"
        }`}
        {...props}
      ></input>
    </p>
  );
}
