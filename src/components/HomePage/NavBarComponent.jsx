import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ButtonComponent from '../ui/ButtonComponent';
import {
  AboutDropdown,
  ProductsDropdown,
  SolutionDropdown,
  ResourcesDropdown,
} from '../ui/NavbarDropDownData';
import { iconsPath } from '../../utils/imagePath';
import PricingPage from '../../pages/PricingPage';

const NavbarComponent = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formError, setFormError] = useState('');
  const [selectedTitle, setSelectedTitle] = useState(null);

  // Form validation states
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    terms_conditions: '',
  });
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    terms_conditions: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    terms_conditions: false,
  });

  const navigate = useNavigate();
  const menuRef = useRef(null);
  const modalRef = useRef(null);
  const successModalRef = useRef(null);

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return 'Full name is required';
    if (name.trim().length < 3) return 'Name must be at least 3 characters';
    if (name.trim().length > 60) return 'Name cannot exceed 60 characters';
    if (!/^[a-zA-Z\s]+$/.test(name.trim()))
      return 'Name can only contain letters and spaces';
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email address is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim()))
      return 'Please enter a valid email address';
    return '';
  };

  const validatePhoneNumber = (phone) => {
    if (!phone.trim()) return 'Phone number is required';

    return '';
  };

  const validateTerms = (accepted) => {
    if (!accepted)
      return 'You must accept the Terms of Service and Privacy Policy';
    return '';
  };

  // Validate individual field
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return validateName(value);
      case 'email':
        return validateEmail(value);
      case 'phoneNumber':
        return validatePhoneNumber(value);
      case 'terms_conditions':
        return validateTerms(value);
      default:
        return '';
    }
  };

  // Validate all fields
  const validateAllFields = () => {
    const errors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phoneNumber: validatePhoneNumber(formData.phoneNumber),
      terms_conditions: validateTerms(formData.terms_conditions),
    };

    setFieldErrors(errors);
    setTouchedFields({
      name: true,
      email: true,
      phoneNumber: true,
      terms_conditions: true,
    });

    return Object.values(errors).every((error) => error === '');
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // setIsMenuOpen(false);
        // setOpenDropdown(null);
        // setIsMobileMenuOpen(true);
      }

      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        showSignupModal
      ) {
        setShowSignupModal(false);
      }

      if (
        successModalRef.current &&
        !successModalRef.current.contains(event.target) &&
        showSuccessMessage
      ) {
        setShowSuccessMessage(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSignupModal, showSuccessMessage]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });

    // Validate field if it has been touched
    if (touchedFields[name]) {
      const error = validateField(name, fieldValue);
      setFieldErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleInputBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    // Mark field as touched
    setTouchedFields((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate the field
    const error = validateField(name, fieldValue);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear any previous error
    setFormError('');

    // Validate all fields
    if (!validateAllFields()) {
      setFormError('Please fix all errors before submitting');
      return;
    }

    console.log('Form submitted:', formData);

    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phoneNumber', formData.phoneNumber);
      submitData.append('terms_conditions', formData.terms_conditions);

      const response = await fetch(
        process.env.REACT_APP_BASE_URL + 'users/register-user',
        {
          method: 'POST',
          body: submitData,
        }
      );
      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful:', data);

        // Reset form and validation states
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          terms_conditions: false,
        });
        setFieldErrors({
          name: '',
          email: '',
          phoneNumber: '',
          terms_conditions: '',
        });
        setTouchedFields({
          name: false,
          email: false,
          phoneNumber: false,
          terms_conditions: false,
        });

        // Close signup modal and show success message
        setShowSignupModal(false);
        setShowSuccessMessage(true);
      } else {
        console.error('Registration failed:', data);
        const errorMessage =
          data.message ||
          data.error ||
          'Registration failed. Please try again.';
        setFormError(errorMessage);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setFormError('An unexpected error occurred. Please try again later.');
    }
  };

  const openSignupModal = () => {
    setShowSignupModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessMessage(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      terms_conditions: false,
    });
    setFieldErrors({
      name: '',
      email: '',
      phoneNumber: '',
      terms_conditions: '',
    });
    setTouchedFields({
      name: false,
      email: false,
      phoneNumber: false,
      terms_conditions: false,
    });
    setFormError('');
  };

  return (
    <>
      <nav className=" px-6 py-4 fixed top-4 md:top-6 left-10 right-10 max-w-7xl z-[9990] mx-auto rounded-3xl">
        <div
          ref={menuRef}
          className="relative flex items-center justify-between"
        >
          {/* Logo */}
          <img
            src={iconsPath?.spatialgridLogo}
            alt="Spatial Grid Logo"
            className="h-8 md:h-12 cursor-pointer"
            onClick={() => navigate('/')}
          />

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setOpenDropdown('');
            }}
            className="lg:hidden text-white"
            aria-label="Toggle Menu"
          >
            <img
              src={iconsPath.menuIcon}
              alt="menu icon"
              className="h-[26px] w-[26px] cursor-pointer"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center flex-1 lg:gap-5 xl:gap-8 justify-center">
            {[
              ['Products', ProductsDropdown],
              ['Resources', ResourcesDropdown],
              ['Solutions', SolutionDropdown],
              ['About', AboutDropdown],
              ['Pricing', 'pricing'], // special case: navigation only
            ].map(([title, Component]) => {
              const hasDropdown = typeof Component !== 'string';

              return (
                <div
                  key={title}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(title)}
                  onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                >
                  {hasDropdown ? (
                    // Button for dropdown items (no navigation)
                    <button
                      className="text-white font-jakarta hover:text-gray-400 transition duration-300 px-2 py-1 bg-transparent border-none cursor-pointer"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === title}
                    >
                      {title}
                    </button>
                  ) : (
                    // Real link only for Pricing
                    <a
                      href="/pricing"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/pricing');
                      }}
                      className="text-white font-jakarta hover:text-gray-400 transition duration-300 px-2 py-1"
                    >
                      {title}
                    </a>
                  )}

                  {/* Render dropdown only if it's a component and open */}
                  {hasDropdown && (
                    <Component
                      closeModal={() => setOpenDropdown(null)}
                      isOpen={openDropdown === title}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <ButtonComponent
              onClick={() => {
                window.location.href = `${process.env.REACT_APP_SPATIAL_PLATFORM_URL}`;
              }}
              title={'Log In'}
            /> */}
            <ButtonComponent title="Get Started" onClick={openSignupModal} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden absolute left-0 top-full w-full   rounded-3xl shadow-md transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 py-4' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-5 py-4 bg-[#35373A] shadow-md mt-3 rounded-3xl">
              <div className="flex flex-col space-y-3 px-6 items-center">
                {[
                  ['Products', ProductsDropdown],
                  ['Resources', ResourcesDropdown],
                  ['Solutions', SolutionDropdown],
                  ['About', AboutDropdown],
                  ['Pricing', 'pricing'],
                ].map(([title, Component]) => (
                  <div
                    key={title}
                    className="w-full"
                    onClick={() => {
                      if (title === 'Pricing') {
                        navigate('/pricing');
                      } else {
                        setSelectedTitle(title);
                        setOpenDropdown(openDropdown === title ? null : title);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    <div className="py-2 text-white text-center cursor-pointer hover:text-gray-400">
                      {title}
                    </div>
                  </div>
                ))}

                <div className="flex  justify-center items-center gap-3 !px-4 !sm:px-[7%]">
                  {/* <ButtonComponent
                    className="text-nowrap !sm:w-[90px] md:w-[100px] lg:w-[110px]"
                    onClick={() => {
                      window.location.href = `${process.env.REACT_APP_SPATIAL_PLATFORM_URL}login`;
                    }}
                    title="Log In"
                  /> */}
                  <ButtonComponent
                    className="text-nowrap w-[116px] sm:w-[126px] md:w-[136px] lg:w-[146px]"
                    onClick={openSignupModal}
                    title="Get Started"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {[
          ['Products', ProductsDropdown],
          ['Resources', ResourcesDropdown],
          ['Solutions', SolutionDropdown],
          ['About', AboutDropdown],
          ['Pricing', PricingPage],
        ].map(([title, Component]) => (
          <React.Fragment key={title}>
            {title === selectedTitle && (
              <Component
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                closeModal={() => {
                  setOpenDropdown('');
                  console.log(setOpenDropdown, 'closeModal');
                }}
                isOpen={openDropdown === selectedTitle}
              />
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Sign Up Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] backdrop-blur-sm">
          <div
            ref={modalRef}
            className="bg-[#121316] rounded-2xl shadow-2xl w-full max-w-md max-h-[95vh] overflow-auto scrollbar mx-4 "
          >
            <div className="px-8 pt-8  relative">
              <button
                onClick={() => {
                  setShowSignupModal(false);
                  resetForm();
                }}
                className="absolute top-4 right-4 bg-gray-800 bg-opacity-80 rounded-full p-1.5 text-gray-300 hover:bg-opacity-100 transition-all shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-[#ffffff] ">
                  Join Spatial Grid
                </h2>
                <p className="text-[#989898]  mt-1">
                  Create your account to get started
                </p>
              </div>

              {formError && (
                <div className="mb-4 p-3 bg-red-900 bg-opacity-30 border border-red-500 rounded-lg text-red-200">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{formError}</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  setShowSignupModal(false);
                  resetForm();
                }}
                className="absolute top-4 right-4 bg-[#3B3C40] bg-opacity-80 rounded-full p-1.5 text-gray-300 hover:bg-opacity-100 transition-all shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-8 pt-0 pb-8 relative">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5">
                  {/* Full Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#ffffff] font-normal mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-2.5 rounded-lg focus:outline-none bg-[#3B3C40] text-gray-200 transition-all placeholder:text-[12px] placeholder:text-[#A6A6A6] ${
                        fieldErrors.name && touchedFields.name
                          ? 'border-2 border-[#EE2B2A] '
                          : 'border-2 border-transparent '
                      }`}
                    />
                    {fieldErrors.name && touchedFields.name && (
                      <p className="mt-1 text-sm text-[#EE2B2A] flex items-center">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#ffffff] font-normal mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-2.5 rounded-lg focus:outline-none bg-[#3B3C40] text-gray-200 transition-all placeholder:text-[12px] placeholder:text-[#A6A6A6] ${
                        fieldErrors.email && touchedFields.email
                          ? 'border-2 border-[#EE2B2A] '
                          : 'border-2 border-transparent '
                      }`}
                    />
                    {fieldErrors.email && touchedFields.email && (
                      <p className="mt-1 text-sm text-[#EE2B2A] flex items-center">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-[#ffffff] font-normal mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      placeholder="Enter your phone number"
                      className={`w-full px-4 py-2.5 rounded-lg focus:outline-none bg-[#3B3C40] text-gray-200 transition-all placeholder:text-[12px] placeholder:text-[#A6A6A6] ${
                        fieldErrors.phoneNumber && touchedFields.phoneNumber
                          ? 'border-2 border-[#EE2B2A] '
                          : 'border-2 border-transparent '
                      }`}
                      required
                    />
                    {fieldErrors.phoneNumber && touchedFields.phoneNumber && (
                      <p className="mt-1 text-sm text-[#EE2B2A] flex items-center">
                        {fieldErrors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Terms and Conditions */}
                  <div className="pt-1">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="terms_conditions"
                        checked={formData.terms_conditions}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        className={`h-5 w-5 mt-0.5 mr-3 text-[#ffffff] border-gray-700 rounded bg-[#3B3C40] ${
                          fieldErrors.terms_conditions &&
                          touchedFields.terms_conditions
                            ? 'border-[#EE2B2A] '
                            : ''
                        }`}
                        required
                      />
                      <span className="text-sm text-[#ffffff]">
                        I agree to the{' '}
                        <a
                          href="#"
                          className="text-[#EE2B2A] font-medium hover:underline"
                        >
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a
                          href="#"
                          className="text-[#EE2B2A] font-medium hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                    {fieldErrors.terms_conditions &&
                      touchedFields.terms_conditions && (
                        <p className="mt-1 text-sm text-[#EE2B2A] flex items-center">
                          {fieldErrors.terms_conditions}
                        </p>
                      )}
                  </div>
                </div>

                <div className="pt-4 flex justify-center">
                  {/* <button
                    type="button"
                    onClick={() => {
                      setShowSignupModal(false);
                      resetForm();
                    }}
                    className="mr-4 px-6 py-2.5 text-gray-400 font-medium hover:text-gray-200 transition-colors"
                  >
                    Cancel
                  </button> */}
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#EE2B2A] text-white rounded-lg hover:bg-[#EE2B2A] transition-colors font-medium shadow-md text-nowrap focus:outline-none w-full"
                  >
                    Create Account
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-[#A6A6A6]">
                    Already have an account?{' '}
                    <a
                      href={`${process.env.REACT_APP_SPATIAL_PLATFORM_URL}login`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#EE2B2A] font-medium hover:underline"
                      title="Log In"
                    >
                      Log in
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Message Modal */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] backdrop-blur-sm">
          <div
            ref={successModalRef}
            className="bg-[#1E1F23] rounded-2xl shadow-2xl w-full max-w-md mx-4 border border-gray-700 p-6"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-200 mb-2">
                Registration Successful!
              </h3>
              <p className="text-gray-400">
                Your request has been received. The Spatial Grid team will set a
                password for your account and send it to you via email. Once you
                receive your password, you'll be able to log in to your account.
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={closeSuccessModal}
                className="px-6 py-2.5 bg-[#EE2B2A] text-white rounded-lg hover:bg-[#EE2B2A] transition-colors font-medium shadow-md focus:outline-none focus:ring-2  focus:ring-offset-2"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default NavbarComponent;
