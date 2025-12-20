// Regular expressions for validating different input fields
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
export const mobileRegex = /^[0-9]{10}$/; // Ensures exactly 10 digits for mobile numbers
export const pincodeRegex = /^[0-9]{6}$/; // Ensures exactly 6 digits for pin codes (modify for other formats if needed)
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
// Ensures password is 8-15 characters long and contains at least:
// - One uppercase letter
// - One lowercase letter
// - One number
// - One special character

/**
 * Function to validate form data based on the specified fields.
 * @param {Object} data - The object containing field values.
 * @param {Array} fields - The list of fields to validate.
 * @returns {Object} - An object containing error messages for invalid fields.
 */
export const validateFunction = (data, fields) => {
  console.log('Validating fields:', fields, data);

  const errors = {}; // Object to store validation errors

  fields.forEach((field) => {
    const value = data[field];

    // Check if the value is empty or undefined
    if (value === undefined || value === null || String(value).trim() === '') {
      errors[`${field}_err`] = `${field.replace('_', ' ')} is required`;
    } else {
      switch (field) {
        case 'email':
          if (!emailRegex.test(value)) {
            errors[`${field}_err`] = 'Invalid email address';
          }
          break;
        case 'mobile':
          if (!mobileRegex.test(value)) {
            errors[`${field}_err`] =
              'Invalid mobile number (must be 10 digits)';
          }
          break;
        case 'pincode':
          if (!pincodeRegex.test(value)) {
            errors[`${field}_err`] = 'Invalid pincode (must be 6 digits)';
          }
          break;
        case 'password':
          if (!passwordRegex.test(value)) {
            errors[`${field}_err`] =
              'Password must be 8-15 characters long, with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character.';
          }
          break;
        default:
          break; // No validation required for unlisted fields
      }
    }
  });

  console.log('Validation errors:', errors);
  return errors; // Return the object containing error messages
};

/**
 * Function to handle unauthorized access responses.
 * @param {Object} response - The API response object.
 */
export const UnauthorizedFunction = (response) => {
  if (response.message == 'Unauthorized') {
    localStorage.clear(); // Clear stored session data
    alert('Unauthorized access detected. Please log in again.');
    window.location.href = '/'; // Redirect to login page
    window.reload(); // Reload the page to enforce logout
  }
};
