import React from 'react';

const ButtonComponent = React.memo(
  ({
    onClick,
    disabled = false,
    className = '',
    title = '',
    children,
    loading = false,
  }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled || loading} // Disable the button when loading
        className={`${loading || disabled ? 'cursor-not-allowed ' : 'cursor-pointer hover:bg-primary/70'} min-w-32 h-10 md:h-12 bg-primary text-white px-6 py-2 rounded-md  transition focus:outline-none font-jakarta font-semibold ${className}`}
      >
        {/* Show a spinner when loading */}
        {loading ? (
          <div className="spinner-border animate-spin border-t-2 border-white w-5 h-5 rounded-full mx-auto" />
        ) : (
          <>
            {title}
            {children}
          </>
        )}
      </button>
    );
  }
);

export default ButtonComponent;
