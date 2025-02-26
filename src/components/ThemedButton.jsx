import PropTypes from "prop-types";

const ThemedButton = ({ label, onClick, variant = "primary", disabled = false }) => {
  const baseStyles = "px-4 py-2 rounded text-white font-semibold focus:outline-none focus:ring-2 transition";

  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-300",
    secondary: "bg-gray-500 hover:bg-gray-600 focus:ring-gray-300",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-100 focus:ring-gray-300",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {label}
    </button>
  );
};

ThemedButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  disabled: PropTypes.bool,
};

export default ThemedButton;