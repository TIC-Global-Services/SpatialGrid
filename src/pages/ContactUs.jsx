import React, { useState } from 'react';
import LayoutOther from '../components/layout/LayoutOther';
import { contactUsData } from '../utils/constant';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch(
        process.env.REACT_APP_BASE_URL + 'email/contact-us',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Something went wrong. Please try later.');
    }
  };

  return (
    <LayoutOther
      heading="Contact Us"
      subtext="Reach out to explore partnerships, demos, media opportunities, or support — we’re here to connect, collaborate, and create."
    >
      <div className="transform scale-100 md:scale-100 transition-all duration-300 px-4 max-w-screen-xl mx-auto py-12 space-y-12 text-white">
        {/* Info Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[22px] md:text-[28px] font-jakarta">
            Let’s Shape the Future of Spatial Intelligence — Together
          </h1>
          <p className="max-w-[1000px] text-sm md:text-base mt-2">
            Whether you’re an enterprise looking to deploy immersive solutions,
            a partner exploring collaboration, or just curious about what’s
            possible with Spatial Grid — we’d love to hear from you.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          {contactUsData.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <h1 className="text-[18px] font-semibold">{item.heading}</h1>
              <p className="text-[14px]">{item.paragrafh}</p>
              {item.email && <p className="text-[14px]">Email: {item.email}</p>}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full flex justify-center px-4">
          <div className="bg-[#1E1F22] rounded-lg w-full max-w-7xl flex flex-col lg:flex-row overflow-hidden mx-auto">
            {/* Form Section */}
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
              <h1 className="text-[28px] md:text-[32px] font-jakarta mb-6 text-white">
                Get in Touch
              </h1>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm mb-1 text-[#CCC6C6]">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-[50px] px-3 bg-[#212121] border border-[#424141] rounded-[5px] outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1 text-[#CCC6C6]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-[50px] px-3 bg-[#212121] border border-[#424141] rounded-[5px] outline-none"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-1 text-[#CCC6C6]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[80px] px-3 py-3 bg-[#212121] border border-[#424141] rounded-[5px] outline-none"
                    placeholder="Type your query here..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#EE2B2A] p-2 rounded-[10px] max-w-[250px] text-white"
                >
                  Send my message
                </button>
                {status && (
                  <p className="text-sm mt-2 text-[#CCC6C6]">{status}</p>
                )}
              </form>
            </div>

            {/* Google Map */}
            <div className="flex-1 w-full h-[300px] md:h-[450px] lg:h-auto">
              <iframe
                title="Spatial Grid Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.109344882899!2d78.3815655!3d17.454479799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9d663e73923a2ff%3A0x2e1e6b5265ff3a13!2sSpatial%20Grid!5e0!3m2!1sen!2sin!4v1744888158383!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </LayoutOther>
  );
};

export default ContactUs;
