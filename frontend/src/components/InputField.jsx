export default function InputField({ type = "text", placeholder, value, onChange, required, error, className = "", ...rest }) {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full p-2 sm:p-2.5 border rounded focus:ring-2 focus:ring-primary transition outline-none ${className}`}
        value={value}
        onChange={onChange}
        required={required}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm mt-1 break-words">{error}</p>}
    </div>
  );
}
