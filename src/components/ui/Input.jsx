import React from 'react';

const Input = React.memo(
  ({
    type,
    placeholder,
    value,
    onChange,
    label,
    block,
    className,
    error,
    disabled,
    area = false,
    rows = 3,
    rightIcon,
    leftIcon,
    Inputclass,
    ref,
  }) => {
    return (
      <div className="">
        {label && <label>{label}</label>}
        {area ? (
          <textarea
            disabled={disabled}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows} // Optional: Default rows for textarea
          />
        ) : (
          <div className={`relative ${Inputclass}`}>
            {leftIcon}
            <input
              ref={ref}
              disabled={disabled}
              className={className}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
            {rightIcon}
          </div>
        )}

        {error && <span className="text-red-400 max-w-[200px]">{error}</span>}
      </div>
    );
  }
);

export default Input;
