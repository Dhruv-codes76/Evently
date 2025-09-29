import Spinner from "./Spinner";

const variantClasses = {
  primary: "bg-primary hover:bg-accent text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-textPrimary",
  danger: "bg-red-600 hover:bg-red-700 text-white",
};

export default function Button({
  type = "button",
  children,
  onClick,
  loading = false,
  disabled = false,
  className = "",
  variant = "primary",
  ...rest
}) {
  const variantClass = variantClasses[variant] || variantClasses.primary;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
  className={`flex justify-center items-center px-4 sm:px-6 py-2 rounded disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-150 whitespace-normal ${variantClass} ${className}`}
      {...rest}
    >
      {loading && <Spinner />}
      {loading ? (children || "Loading...") : children}
    </button>
  );
}
