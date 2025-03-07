import PropTypes from 'prop-types';

const variantClasses = {
  primary: 'bg-black text-white hover:bg-gray-800',
  secondary: 'bg-black text-white hover:bg-gray-700',
  outline: 'border border-blue-500 text-blue-400 hover:bg-gray-900',
  disabled: 'bg-black text-gray-500 opacity-50 cursor-not-allowed'
};

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg'
};

const ThemedButton = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  size = 'medium',
  ariaLabel,
  extraClasses
}) => {
  const classes = `
    ${variantClasses[variant] || variantClasses.primary}
    ${sizeClasses[size] || sizeClasses.medium}
    rounded
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${extraClasses || ''}
  `;

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      aria-label={ariaLabel || label}
      className={classes}
    >
      {label}
    </button>
  );
};

ThemedButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'disabled']),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ariaLabel: PropTypes.string,
  extraClasses: PropTypes.string
};

export default ThemedButton;
