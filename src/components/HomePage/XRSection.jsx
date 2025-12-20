import React, { useState, useMemo, useEffect } from 'react';
import { MediumButton } from '../ui/buttons';
import { iconsPath, imagePath } from '../../utils/imagePath';
import PlugXRDemoBooking from './DemoInfo';
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CalendarDaysIcon,
  ArrowLeftIcon,
  LoaderIcon,
  CalendarPlusIcon,
  UserPlusIcon,
  XIcon,
} from 'lucide-react';
import useClickOutside from '../UseClickOutside';

// Reusable components
// Fixed InputField component - the issue was in the CSS classes
const InputField = ({
  label,
  id,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
  error,
  placeholder = '',
  options = [],
}) => (
  <div className="w-full !mt-0">
    <label
      className="block text-white text-[12px] font-normal mb-2"
      htmlFor={id}
    >
      {label} {required && <span className="text-[#D9232A]">*</span>}
    </label>

    {type === 'select' ? (
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-2  bg-[#3B3C40] text-white rounded-[6px] transition focus:outline-none ${error ? 'border border-[#D9232A]' : ''} placeholder:text-[#A6A6A6] placeholder:text-[12px]`}
        required={required}
      >
        <option className="text-[#A6A6A6]  " value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : type === 'textarea' ? (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2 bg-[#3B3C40] text-white rounded-[6px] transition focus:outline-none ${error ? 'border border-[#D9232A]' : ''} placeholder:text-[#A6A6A6] placeholder:text-[12px]`}
        rows="3"
        required={required}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2 bg-[#3B3C40] text-white rounded-[6px] transition focus:outline-none ${error ? 'border border-[#D9232A]' : ''} placeholder:text-[#A6A6A6] placeholder:text-[12px]`}
        required={required}
      />
    )}

    {error && <p className="text-[#D9232A] text-xs mt-1">{error}</p>}
  </div>
);

const TimeSlot = ({ time, available, selected, onClick }) => (
  <button
    className={`  text-[12px]  lg:text-[12px] py-4 px-4 rounded-[8px]  transition-all duration-200 flex items-center justify-center 
      ${selected ? 'bg-[#D9232A] text-white  ' : ''}
      ${!selected && available ? 'border border-[#ffffff] border-opacity-40 text-white' : ''}
      ${!available ? 'bg-gray-900 text-gray-500 cursor-not-allowed' : ''}
    `}
    onClick={() => available && onClick(time)}
    disabled={!available}
  >
    {/* <ClockIcon size={16} className="mr-2" /> */}
    {time}
    {!available && <span className="block text-xs mt-1">(Unavailable)</span>}
  </button>
);

// Calendar Day component
const CalendarDay = ({ date, isToday, isSelected, isAvailable, onClick }) => (
  <div
    className={`aspect-square p-1 text-center rounded-[10px] transition-all duration-200  h-8 w-8 lg:h-8 lg:w-8 text-[13px]
      ${isAvailable ? 'cursor-pointer' : ' cursor-not-allowed'}
      ${isSelected ? 'bg-[#D9232A]' : ''}
      ${isToday ? 'border border-[#ffffff] rounded-[10px] ' : ''}
    `}
    onClick={() => isAvailable && onClick(date)}
  >
    <div
      className={`
      h-full flex items-center justify-center rounded-full 
      ${isAvailable && !isSelected ? '' : ''}
      ${!isAvailable ? 'text-[#ffffff] text-opacity-60' : 'text-white'}
      ${isToday ? 'font-normal' : ''}
      ${isSelected ? '' : ''}
    `}
    >
      {date.getDate()}
    </div>
  </div>
);

// Calendar scheduling component
const CalendlyScheduler = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1); // 1: Date/Time selection, 2: Confirmation
  const [showForm, setShowForm] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    designation: '',
    businessName: '',
    industry: '',
    contactNumber: '',
    email: '',
    guestEmails: [],
    notes: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
    meetingType: 'Product Demo',
  });
  const [datesAvailable, setDatesAvailable] = useState([]);
  const [timesAvailable, setTimesAvailable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formattedSelectedDate, setFormattedSelectedDate] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [guestEmail, setGuestEmail] = useState('');

  // List of industry options

  const scheduleRef = React.useRef(null);

  useClickOutside(scheduleRef, () => {
    onClose();
  });

  const isFormValid = () => {
    return (
      userDetails.name &&
      userDetails.designation &&
      userDetails.businessName &&
      userDetails.industry &&
      userDetails.contactNumber &&
      userDetails.email &&
      !validationErrors.name &&
      !validationErrors.designation &&
      !validationErrors.businessName &&
      !validationErrors.industry &&
      !validationErrors.contactNumber &&
      !validationErrors.email &&
      !validationErrors.guestEmail
    );
  };
  const industryOptions = [
    'Healthcare',
    'Education',
    'Manufacturing',
    'Retail',
    'Technology',
    'Finance',
    'Entertainment',
    'Real Estate',
    'Construction',
    'Transportation',
    'Energy',
    'Other',
  ];
  useEffect(() => {
    const fetchAvailableSlots = async () => {
      if (!selectedDate?.date) return;

      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}demo/get-available-time-slots`
        );
        const data = await response.json();

        const dateStr = selectedDate.date.toISOString().split('T')[0];
        const slotObj = data.availableSlots.find(
          (slot) => slot.date === dateStr
        );

        const timeSlots = (slotObj?.slots || []).map((s) => ({
          time: new Date(s.iso)
            .toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })
            .toUpperCase(),
          available: true,
        }));

        setTimesAvailable(timeSlots);
      } catch (err) {
        console.error('Error fetching available slots:', err);
        setTimesAvailable([]);
      } finally {
        setIsLoading(false);
        setFormattedSelectedDate(selectedDate?.formatted);
      }
    };

    fetchAvailableSlots();
  }, [selectedDate]);

  // Function to get timezone display name
  const getTimezoneDisplay = (timezone) => {
    try {
      const now = new Date();
      const tzString = now.toLocaleString('en-US', {
        timeZone: timezone,
        timeZoneName: 'short',
      });
      const tzAbbr = tzString.split(' ').pop();
      return `${timezone.replace('_', ' ').replace(/\//g, ' - ')} (${tzAbbr})`;
    } catch (e) {
      return timezone;
    }
  };

  // Generate dates for the current month view
  useEffect(() => {
    generateDatesForMonth(currentMonth);
  }, [currentMonth]);

  const generateDatesForMonth = async (month) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}demo/get-available-time-slots`
      );
      const data = await response.json();

      const today = new Date();
      today.setHours(0, 0, 0, 0); // 🔧 This line fixes the issue

      const validDates = data.availableSlots.map((slot) => new Date(slot.date));

      const filtered = validDates
        .filter((date) => {
          return (
            date.getMonth() === month.getMonth() &&
            date.getFullYear() === month.getFullYear() &&
            date >= today
          );
        })
        .map((date) => ({
          date,
          formatted: date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
          isPast: false,
          isToday:
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear(),
        }));

      setDatesAvailable(filtered);
    } catch (err) {
      console.error('Error fetching dates:', err);
      setDatesAvailable([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Navigate to previous month
  const goToPreviousMonth = () => {
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentMonth(prevMonth);
  };

  // Navigate to next month
  const goToNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleScheduleClick = () => {
    if (selectedDate && selectedTime) {
      setShowForm(true);
    }
  };


  const validateField = (name, value) => {
  switch (name) {
    case 'name':
      if (!value.trim()) {
        return 'Name is required';
      } else if (value.length > 60) {
        return 'Name cannot exceed 60 characters';
      }
      return null;
    
    case 'designation':
      if (!value.trim()) {
        return 'Designation is required';
      }else if (value.length > 60) {
        return 'Designation cannot exceed 60 characters';
      }
      return null;
    
    case 'businessName':
      if (!value.trim()) {
        return 'Business name is required';
      }else if (value.length > 100) {
        return 'Business Name cannot exceed 100 characters';
      }
      return null;
    
    case 'industry':
      if (!value.trim()) {
        return 'Please select an industry';
      }
      return null;
    
    case 'contactNumber':
      if (!value.trim()) {
        return 'Contact number is required';
      } else if (!/^\+?[0-9]{10,15}$/.test(value.replace(/[\s-]/g, ''))) {
        return 'Please enter a valid phone number';
      }
      return null;
    
    case 'email':
      if (!value.trim()) {
        return 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Please enter a valid email address';
      }
      return null;
    
    default:
      return null;
  }
};

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  
  setUserDetails((prev) => ({
    ...prev,
    [name]: value,
  }));

  // Validate field in real-time
  const fieldError = validateField(name, value);
  
  setValidationErrors((prev) => ({
    ...prev,
    [name]: fieldError,
  }));
};

  const handleAddGuestEmail = () => {
    if (
      guestEmail &&
      guestEmail.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guestEmail)
    ) {
      if (!userDetails.guestEmails.includes(guestEmail)) {
        setUserDetails((prev) => ({
          ...prev,
          guestEmails: [...prev.guestEmails, guestEmail],
        }));
        setGuestEmail('');
      }
    } else {
      setValidationErrors((prev) => ({
        ...prev,
        guestEmail: 'Please enter a valid email address',
      }));
    }
  };

  const handleRemoveGuestEmail = (email) => {
    setUserDetails((prev) => ({
      ...prev,
      guestEmails: prev.guestEmails.filter((e) => e !== email),
    }));
  };

const validateForm = () => {
  const errors = {};

  // Validate all fields
  Object.keys(userDetails).forEach(key => {
    if (['name', 'designation', 'businessName', 'industry', 'contactNumber', 'email'].includes(key)) {
      const error = validateField(key, userDetails[key]);
      if (error) {
        errors[key] = error;
      }
    }
  });

  setValidationErrors(errors);
  return Object.keys(errors).length === 0;
};

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setApiError(null);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}demo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userDetails.name,
          designation: userDetails.designation,
          businessName: userDetails.businessName,
          industry: userDetails.industry,
          contactNumber: userDetails.contactNumber,
          email: userDetails.email,
          guestEmails: userDetails.guestEmails,
          notes: userDetails.notes,
          timezone: userDetails.timezone,
          meetingType: userDetails.meetingType,
          selectedDate: formattedSelectedDate,
          selectedTime: selectedTime,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to schedule demo');
      }

      // Generate a confirmation code using API response or generate one if not provided
      const confirmationCode =
        data.confirmationCode ||
        Math.random().toString(36).substring(2, 10).toUpperCase();

      setUserDetails((prev) => ({
        ...prev,
        confirmationCode,
      }));

      setIsLoading(false);
      setIsSubmitted(true);
      onClose(); // Close the scheduler after submission
      // setStep(2);
    } catch (error) {
      console.error('Error scheduling demo:', error);
      setApiError(
        error.message ||
          'An error occurred while scheduling your demo. Please try again.'
      );
      setIsLoading(false);
    }
  };

  const addToCalendar = (type) => {
    // Parse the date string to create a proper date object
    const dateParts = formattedSelectedDate.split(' ');
    const day = parseInt(dateParts[2].replace(',', ''));
    const month = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ].indexOf(dateParts[1]);
    const year = parseInt(dateParts[3]);

    // Convert 12-hour time format to 24-hour
    let [time, modifier] = selectedTime.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    // Create start and end times (assume 30 minutes)
    const startTime = new Date(
      year,
      month,
      day,
      parseInt(hours),
      parseInt(minutes)
    );
    const endTime = new Date(startTime.getTime() + 30 * 60000);

    // Format for different calendar types
    const eventTitle = `XR Demo with ${userDetails.name}`;
    const eventDescription = `Demo session with ${userDetails.name} from ${userDetails.businessName}.\n\nAdditional Notes: ${userDetails.notes || 'None'}`;
    const eventLocation = 'Online Meeting';

    if (type === 'google') {
      // Google Calendar link format
      const url = new URL('https://calendar.google.com/calendar/render');
      url.searchParams.append('action', 'TEMPLATE');
      url.searchParams.append('text', eventTitle);
      url.searchParams.append(
        'dates',
        `${startTime.toISOString().replace(/-|:|\.\d+/g, '')}/` +
          `${endTime.toISOString().replace(/-|:|\.\d+/g, '')}`
      );
      url.searchParams.append('details', eventDescription);
      url.searchParams.append('location', eventLocation);
      window.open(url.toString(), '_blank');
    } else if (type === 'outlook') {
      // Outlook Web link format
      const url = new URL(
        'https://outlook.live.com/calendar/0/deeplink/compose'
      );
      url.searchParams.append('subject', eventTitle);
      url.searchParams.append('startdt', startTime.toISOString());
      url.searchParams.append('enddt', endTime.toISOString());
      url.searchParams.append('body', eventDescription);
      url.searchParams.append('location', eventLocation);
      window.open(url.toString(), '_blank');
    } else if (type === 'ical') {
      // Create iCal file format
      const icalContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        `DTSTART:${startTime.toISOString().replace(/-|:|\.\d+/g, '')}`,
        `DTEND:${endTime.toISOString().replace(/-|:|\.\d+/g, '')}`,
        `SUMMARY:${eventTitle}`,
        `DESCRIPTION:${eventDescription.replace(/\n/g, '\\n')}`,
        `LOCATION:${eventLocation}`,
        'END:VEVENT',
        'END:VCALENDAR',
      ].join('\r\n');

      // Create a downloadable link
      const blob = new Blob([icalContent], {
        type: 'text/calendar;charset=utf-8',
      });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'xr-demo.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const resetScheduler = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setStep(1);
    setUserDetails({
      name: '',
      designation: '',
      businessName: '',
      industry: '',
      contactNumber: '',
      email: '',
      guestEmails: [],
      notes: '',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
      meetingType: 'Product Demo',
    });
    setGuestEmail('');
    setIsSubmitted(false);
    setValidationErrors({});
    setApiError(null);
  };

  // Function to detect device type for responsive design
  const isMobile = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  }, []);

  // Render different steps of the scheduling process
  const renderStep = () => {
    switch (step) {
      case 1: // Date selection
        return (
          <div
            className={`grid gap-8 ${showForm ? 'lg:grid-cols-[1fr_2fr] lg:gap-6 flex-2' : 'md:grid-cols-1 lg:grid-cols-3 flex-1 '} grid-cols-1`}
          >
            <PlugXRDemoBooking
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              showForm={showForm}
              handleScheduleClick={handleScheduleClick}
            />

            {!showForm && (
              <>
                <div className="w-full flex-1 max-h-[360px] max-w-[300px]  scrollbar animate-fadeIn bg-[#242424] p-5 rounded-[20px]">
                  <div className="flex gap-3 items-center  mb-4">
                    <span className="border-2 border-[#ffffff] border-opacity-10  rounded-full h-6 w-6 flex items-center justify-center text-[#F5EFEF] text-[12px]">
                      1
                    </span>
                    <h2 className="text-[14px] font-semibold text-white">
                      Select a Date & Time
                    </h2>
                  </div>

                  {/* Month navigation */}
                  <div className="flex justify-between  mb-4">
                    <button
                      onClick={goToPreviousMonth}
                      className="p-1  text-white rounded transition-all duration-200 flex items-center"
                    >
                      <ChevronLeftIcon size={18} className="mr-1" />
                    </button>
                    <h3 className="text-lg font-medium text-white">
                      {currentMonth.toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </h3>
                    <button
                      onClick={goToNextMonth}
                      className="p-2  text-white rounded transition-all duration-200 flex items-center"
                    >
                      <ChevronRightIcon size={18} className="ml-1" />
                    </button>
                  </div>

                  {/* Calendar view */}
                  <div className="grid grid-cols-7 gap-2  mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-[#959595] text-[12px] font-medium p-1"
                        >
                          {day}
                        </div>
                      )
                    )}

                    {/* Generate empty cells for days before the first of month */}
                    {Array.from({
                      length: new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth(),
                        1
                      ).getDay(),
                    }).map((_, idx) => (
                      <div key={`empty-${idx}`} className="aspect-square"></div>
                    ))}

                    {/* Calendar days */}
                    {Array.from({
                      length: new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth() + 1,
                        0
                      ).getDate(),
                    }).map((_, idx) => {
                      const date = new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth(),
                        idx + 1
                      );
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);

                      const isAvailable =
                        date >= today &&
                        date.getDay() !== 0 &&
                        date.getDay() !== 7;
                      const isCurrentMonth =
                        date.getMonth() === currentMonth.getMonth();
                      const isToday =
                        date.getDate() === today.getDate() &&
                        date.getMonth() === today.getMonth() &&
                        date.getFullYear() === today.getFullYear();

                      const dateObj = datesAvailable.find(
                        (d) =>
                          d.date.getDate() === date.getDate() &&
                          d.date.getMonth() === date.getMonth() &&
                          d.date.getFullYear() === date.getFullYear()
                      );

                      const isSelected =
                        selectedDate &&
                        selectedDate.date.getDate() === date.getDate() &&
                        selectedDate.date.getMonth() === date.getMonth() &&
                        selectedDate.date.getFullYear() === date.getFullYear();

                      if (!isCurrentMonth)
                        return (
                          <div
                            key={`day-${idx}`}
                            className="aspect-square"
                          ></div>
                        );

                      return (
                        <CalendarDay
                          key={`day-${idx}`}
                          date={date}
                          isToday={isToday}
                          isSelected={isSelected}
                          isAvailable={isAvailable && dateObj}
                          onClick={() =>
                            isAvailable && dateObj && handleDateSelect(dateObj)
                          }
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="w-full flex-[0.7] h-[360px] max-w-[300px] lg:max-w-[250px] overflow-auto scrollbar animate-fadeIn bg-[#242424] p-4 rounded-[20px]">
                  <div className="flex gap-4 items-center mb-4">
                    <span className="border-2 border-white border-opacity-10 h-6 w-6 rounded-full  flex items-center justify-center text-[12px] text-[#ffffff]">
                      2
                    </span>
                    <h2 className="text-[14px] font-semibold text-white">
                      {selectedDate ? 'Available Times' : 'Available Times'}
                    </h2>
                  </div>

                  {isLoading ? (
                    <div className="flex justify-center items-center p-6">
                      <LoaderIcon
                        size={24}
                        className="animate-spin text-[#D9232A]"
                      />
                    </div>
                  ) : (
                    <>
                      {/* <div className="text-gray-400 mb-4">
                        Times are shown in{' '}
                        {getTimezoneDisplay(userDetails.timezone)}
                      </div> */}

                      {!selectedDate && (
                        <div className="border-[0.5px] border-[#ffffff] p-10 rounded-[8px] text-center h-[250px]">
                          {/* Icon with animated border */}
                          <div className="relative inline-block mb-4 h-14 w-14">
                            {/* Animated border around icon */}
                            {/* <div className="absolute inset-0 rounded-full border-2 border-[#6B353B] animate-pulse"></div> */}

                            {/* Center the icon inside the border */}
                            <div className="relative z-10 flex items-center justify-center h-full w-full">
                              <img
                                className="h-[25px] w-[25px]"
                                src={iconsPath?.timer}
                                alt="Clock Icon"
                              />
                            </div>
                          </div>

                          {/* Text on exactly two lines */}
                          <p className="text-white text-[10px] text-opacity-60  ">
                            Please select a date to view available times
                          </p>
                        </div>
                      )}

                      {selectedDate && (
                        <div className="  mb-4 rounded">
                          <p className="text-white flex items-center">
                            {/* <CalendarIcon
                              size={16}
                              className="mr-2 text-blue-400"
                            /> */}
                            {/* <span>{formattedSelectedDate}</span> */}
                          </p>
                          {/* <span className="text-[#9B9696] text-[10px]">
                            Times are shown in Asia - Calcutta (GMT+5:30)
                          </span> */}
                        </div>
                      )}

                      <div className="grid grid-cols-3 max-h-[400px] overflow-auto scrollbar md:grid-cols-3 gap-[14px]">
                        {selectedDate &&
                          timesAvailable.map((slot, idx) => (
                            <TimeSlot
                              key={idx}
                              time={slot.time}
                              available={slot.available}
                              selected={selectedTime === slot.time}
                              onClick={handleTimeSelect}
                            />
                          ))}
                      </div>

                      {selectedDate && timesAvailable.length === 0 && (
                        <div className="text-center p-3  rounded mt-4">
                          <p className="text-white">
                            No available time slots for this date.
                          </p>
                          <button
                            onClick={() => setSelectedDate(null)}
                            className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 text-[10px] rounded transition-all duration-200 flex items-center mx-auto"
                          >
                            <ArrowLeftIcon size={16} className="mr-2" />
                            Choose Another Date
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </>
            )}

            {showForm && (
              <div className="flex-[1.3]  h-[380px]  bg-[#242424] px-7 py-4 rounded-[20px] overflow-auto scrollbar animate-fadeIn ">
                <div className="flex items-center mb-4">
                  <button
                    className="mr-3 text-blue-400 hover:text-blue-300 flex items-center"
                    onClick={() => {
                      setShowForm(false);
                    }}
                  >
                    <ArrowLeftIcon size={16} className="mr-1 text-white" />
                  </button>
                  <h2 className="text-[14px] font-normal text-white">
                    Change Booking Details
                  </h2>
                </div>

                <div className="  flex flex-col gap-1 rounded">
                  <h1 className="font-bold text-white mb-3 text-[20px]">Booking Details</h1>
                  <p className="text-white flex items-center mb-2">
                    {/* <CalendarIcon size={16} className="mr-2 text-blue-400" /> */}
                    <img
                      className="mr-2 h-4 w-4"
                      src={iconsPath?.calender}
                      alt=""
                    />
                    <span className="font-normal mr-2 text-[15px]">Date:</span>{' '}
                    {formattedSelectedDate}
                  </p>
                  <p className="text-white flex items-center">
                    {/* <ClockIcon size={16} className="mr-2 text-blue-400" /> */}
                    <img
                      className="mr-2 h-4 w-4"
                      src={iconsPath?.timer}
                      alt=""
                    />
                    <span className="font-normal mr-2 text-[15px]">Time:</span>{' '}
                    {selectedTime} ({getTimezoneDisplay(userDetails.timezone)})
                  </p>
                  <p className="text-[#ffffff] text-[15px] mt-2 flex items-center">
                    {/* <CalendarDaysIcon size={14} className="mr-2" /> */}
                    <img
                      className="mr-2 h-4 w-4"
                      src={iconsPath?.duration}
                      alt=""
                    />
                    Duration: 30 minutes
                  </p>
                </div>

                {apiError && (
                  <div className="bg-red-800 text-white p-3 mb-4 rounded">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {apiError}
                    </p>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="my-[18px] grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  
                  <InputField
                    label="Name"
                    id="name"
                    name="name"
                    placeholder=" Your name"
                    value={userDetails.name}
                    onChange={handleInputChange}
                    required={true}
                    error={validationErrors.name}
                    
                  />
                 
                  <InputField
                    label="Designation"
                    id="designation"
                    name="designation"
                    placeholder=" Your job title"
                    value={userDetails.designation}
                    onChange={handleInputChange}
                    required={true}
                    error={validationErrors.designation}
                  />
                  <InputField
                    label="Business Name"
                    id="businessName"
                    name="businessName"
                    placeholder=" Your company"
                    value={userDetails.businessName}
                    onChange={handleInputChange}
                    required={true}
                    error={validationErrors.businessName}
                  />

                  <InputField
                    label="Industry"
                    id="industry"
                    name="industry"
                    value={userDetails.industry}
                    onChange={handleInputChange}
                    type="select"
                    options={industryOptions}
                    required={true}
                    error={validationErrors.industry}
                  />

                  <InputField
                    label="Contact Number"
                    id="contactNumber"
                    name="contactNumber"
                    type='number'
                    value={userDetails.contactNumber}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    required={true}
                    error={validationErrors.contactNumber}
                  />

                  <InputField
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="your@gmail.com"
                    type="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    required={true}
                    error={validationErrors.email}
                  />

                  {/* Guest Emails */}
                  <div className="md:col-span-2">
                    <label
                      className="block text-white text-sm font-normal mb-2"
                      htmlFor="guestEmail"
                    >
                      Guest Emails
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="email"
                        id="guestEmail"
                        name="guestEmail"
                        value={guestEmail}
                        onChange={(e) => {
                          setGuestEmail(e.target.value);
                          if (validationErrors.guestEmail) {
                            setValidationErrors((prev) => ({
                              ...prev,
                              guestEmail: null,
                            }));
                          }
                        }}
                        placeholder="Guest@email.com"
                        className={`w-full p-2 bg-[#3B3C40] text-white rounded transition  focus:outline-none placeholder:text-[#A6A6A6] placeholder:text-[12px] ${validationErrors.guestEmail ? 'border border-[#D9232A]' : ''}`}
                      />
                      {/* <button
                        type="button"
                        onClick={handleAddGuestEmail}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                      >
                        Add
                      </button> */}
                    </div>
                    {validationErrors.guestEmail && (
                      <p className="text-[#D9232A] text-xs mt-1">
                        {validationErrors.guestEmail}
                      </p>
                    )}

                    {/* Display added guest emails */}
                    {userDetails.guestEmails.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {userDetails.guestEmails.map((email, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-700 text-white px-3 py-1 rounded-full flex items-center"
                          >
                            <span className="mr-2">{email}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveGuestEmail(email)}
                              className="text-red-400 hover:text-red-300"
                            >
                              <XIcon size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <InputField
                      label="Additional Notes"
                      id="notes"
                      name="notes"
                      value={userDetails.notes}
                      onChange={handleInputChange}
                      type="textarea"
                      placeholder="Any specific topics or questions you’d like to discuss during the demo?"
                    />
                  </div>

                  {/* Terms and Privacy policy checkbox */}
                  <div className="md:col-span-2 flex items-center">
                    <label className="flex items-center text-white text-sm">
                      <input
                        type="checkbox"
                        required
                        className="mr-2 accent-[#3B3C40] bg-transparent"
                      />
                      I agree to the{' '}
                      <a href="" className="text-[#D9232A]  ml-1 mr-1">
                        Terms of Service
                      </a>
                      and{' '}
                      <a href="" className="text-[#D9232A]  ml-1">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className={`w-full font-bold py-2 px-4 rounded-[6px] transition-all duration-200 flex items-center justify-center ${
                        isFormValid()
                          ? 'bg-[#D9232A] text-white '
                          : 'bg-[#36373B] text-[#A6A6A6] cursor-not-allowed'
                      }`}
                      disabled={!isFormValid() || isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center">
                          <LoaderIcon size={18} className="animate-spin mr-2" />
                          Scheduling...
                        </span>
                      ) : (
                        <>Submit Request</>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        );
      case 2: // Confirmation screen
        return (
          <div className="w-full text-center">
            <div className="mb-6 flex justify-center">
              <svg
                className="w-16 h-16 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Demo Scheduled!
            </h2>
            <div className="bg-gray-800 p-4 mb-4 rounded mx-auto max-w-md">
              <p className="text-white mb-2">
                Your {userDetails.meetingType} has been scheduled for:
              </p>
              <p className="text-xl font-bold text-white mb-1">
                {selectedDate?.formatted} at {selectedTime}
              </p>
              <p className="text-white mb-3">
                ({getTimezoneDisplay(userDetails.timezone)})
              </p>
              <p className="text-gray-400 mb-2">Duration: 30 minutes</p>
              <p className="text-gray-400 mb-2">
                Confirmation Code:{' '}
                <span className="font-mono font-bold text-white">
                  {userDetails.confirmationCode || 'XR12345'}
                </span>
              </p>
            </div>

            <p className="text-white mb-4">
              We've sent a confirmation email to{' '}
              <span className="font-bold">{userDetails.email}</span> with all
              the details.
            </p>

            {/* Add to calendar options */}
            <div className="mb-6">
              <p className="text-white mb-2">Add to your calendar:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => addToCalendar('google')}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition flex items-center"
                >
                  <CalendarIcon />
                  Google Calendar
                </button>
                <button
                  onClick={() => addToCalendar('outlook')}
                  className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded transition flex items-center"
                >
                  <CalendarIcon />
                  Outlook
                </button>
                <button
                  onClick={() => addToCalendar('ical')}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM5 5h14v2H5V5z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                  </svg>
                  Download .ics
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center space-x-4">
              <button
                onClick={onClose}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition"
              >
                Close
              </button>
              <button
                onClick={resetScheduler}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
              >
                Schedule Another
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div
        ref={scheduleRef}
        className="bg-[#1C1C1C] max-h-[510px] py-4 md:py-2 overflow-y-auto rounded-lg shadow-lg max-w-[350px] lg:max-w-[930px] w-full mt-12 md:mt-24 lg:mt-20 scrollbar"
      >
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            {step > 1 && (
              <span className="ml-4 text-sm text-gray-400">
                Step {step} of 3
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold relative right-4 top-2"
            aria-label="Close"
          >
            <img className="h-3 w-3" src={iconsPath?.group112Image} alt="" />
          </button>
        </div>
        <div className="p-6">{renderStep()}</div>

        {selectedDate && selectedTime && !showForm && (
          <div
            className="md:flex  lg:hidden justify-center items-center  mx-6   p-[10px] rounded-[10px]"
            style={{ backgroundColor: '#D9232A' }}
          >
            <button
              className="text-[#F5F5F5] text-[18px] w-full"
              onClick={handleScheduleClick}
            >
              Schedule Demo
            </button>
          </div>
        )}

        {(!selectedDate || !selectedTime) && !showForm && (
          <div className="md:flex  lg:hidden justify-center items-center mb-8 bg-[#36373B] mx-6  p-[10px] rounded-[10px]">
            <button className="text-[#F5F5F5] text-[18px]" disabled>
              Schedule Demo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Main XR Section component
const XRSection = React.memo(() => {
  const [showScheduler, setShowScheduler] = useState(false);

  const openScheduler = () => setShowScheduler(true);
  const closeScheduler = () => setShowScheduler(false);

  // Memoized content to prevent unnecessary re-renders
  const sectionContent = useMemo(
    () => (
      <div className="relative flex flex-col items-center justify-center max-w-[100vw] overflow-hidden h-[400px] md:h-[600px] px-4 pt-[100px] md:pt-14">
        {/* Image Section */}
        <div className="relative top-0 md:top-[50px] w-full max-w-[100vw] overflow-hidden md:max-w-[90%] lg:max-w-[80%] flex justify-center">
          <img
            src={imagePath?.XR}
            alt="XR Illustration"
            className="md:max-w-4xl w-full sm:w-[85%] md:h-[430px] object-contain aspect-[16/9]"
          />

          {/* Content Section */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 sm:px-6 md:px-8 gap-3 sm:gap-6 md:gap-10 text-center">
            <h1 className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] font-semibold text-white leading-tight max-w-[90%] sm:max-w-[80%]">
              The Enterprise Suite for all things XR
            </h1>
            <MediumButton
              className="bg-[#EE2B2A] relative bottom-1   hover:bg-[#EE2B1A88] transition duration-300 text-[10px] sm:text-[13px]  md:text-lg"
              title="Schedule a Demo"
              onClick={openScheduler}
            />
          </div>
        </div>

        {/* Floating CTA button for mobile (visible on scroll) */}
        <div className="md:hidden fixed bottom-6 right-6 z-20">
          <button
            onClick={openScheduler}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full shadow-lg flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            Book Demo
          </button>
        </div>

        {/* Calendly-like scheduler modal */}
        {showScheduler && <CalendlyScheduler onClose={closeScheduler} />}
      </div>
    ),
    [showScheduler]
  );

  return sectionContent;
});

export default XRSection;
