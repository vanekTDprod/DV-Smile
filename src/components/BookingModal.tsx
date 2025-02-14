import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingModal = ({ isOpen, onClose, service, services }) => {
  const [step, setStep] = useState(1); // 1: Calendar, 2: Time, 3: Service, 4: Details
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    console.log('BookingModal - isOpen:', isOpen, 'service:', service, 'step:', step);
  }, [isOpen, service, step]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit - FormData:', formData, 'Service:', selectedService, 'Date:', selectedDate, 'Time:', selectedTime);
    // Simulate sending an email
    alert(`Booking confirmed for ${selectedService?.title} on ${selectedDate?.toLocaleDateString()} at ${selectedTime}!\nConfirmation sent to ${formData.email}.`);
    onClose();
  };

  const officeHours = {
    Monday: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
    Tuesday: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    Wednesday: ['8:30', '9:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30'],
    Thursday: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    Friday: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00'],
    Saturday: ['9:00', '10:00', '11:00'],
    Sunday: [],
  };

  const getAvailableTimes = (date) => {
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    return officeHours[day] || [];
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset selected time when date changes
    setStep(2); // Move to time selection
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setStep(3); // Move to service selection
  };

  const handleServiceSelect = (serviceItem) => {
    setSelectedService(serviceItem);
    setStep(4); // Move to details form
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-primary-white rounded-xl p-8 max-w-md w-full shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Book Appointment</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
            <X size={24} />
          </button>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary mb-2">Select Date</h3>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              minDate={new Date()}
              className="rounded-lg border-none shadow-md"
              tileClassName={({ date, view }) =>
                view === 'month' && getAvailableTimes(date).length > 0
                  ? 'bg-primary-gray/5 hover:bg-primary-gray/10 rounded-lg transition-colors duration-300'
                  : 'rounded-lg'
              }
              activeClassName="bg-primary-gold text-primary"
            />
          </div>
        )}

        {step === 2 && selectedDate && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary mb-2">Select Time for {selectedDate.toLocaleDateString()}</h3>
            <div className="grid grid-cols-3 gap-3">
              {getAvailableTimes(selectedDate).map((time) => (
                <button
                  key={time}
                  className="bg-primary-gold text-primary px-4 py-2 rounded-full hover:bg-primary-teal transition-colors duration-300"
                  onClick={() => handleTimeChange(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && selectedTime && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary mb-2">Select Service for {selectedDate.toLocaleDateString()} at {selectedTime}</h3>
            <ul className="space-y-2">
              {services.map((serviceItem) => (
                <li key={serviceItem.id}>
                  <button
                    className="w-full text-left py-3 px-5 bg-white hover:bg-primary-gray rounded-xl shadow-md transition-colors duration-300"
                    onClick={() => handleServiceSelect(serviceItem)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-primary">{serviceItem.title}</span>
                      <span className="text-primary-gold">{serviceItem.price}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {step === 4 && selectedDate && selectedTime && selectedService && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary mb-2">Enter Your Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="surname" className="block text-gray-700 text-sm font-bold mb-2">Surname:</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-primary-gold text-primary font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline hover:bg-primary-teal transition-colors duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
