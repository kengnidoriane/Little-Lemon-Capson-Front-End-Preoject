import React, { useState, useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import ReservationSummary from '../components/ReservationSummary';
import BookingConfirmation from '../components/BookingConfirmation';

// Initial state for available times
const initializeTimes = () => {
    return [
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
        "9:00 PM"
    ];
};

// Reducer function to manage available times
const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // For now, we return the same available times regardless of the date
            return initializeTimes(); // You can modify this logic later
        default:
            return state;
    }
};

const BookingPage = () => {
    const [step, setStep] = useState(1);
    const [reservationData, setReservationData] = useState({});
    const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());

    const handleContinue = (data) => {
        setReservationData(data);
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleConfirm = () => {
        setStep(3); // Move to confirmation step
    };

    const updateTimes = (selectedDate) => {
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    };

    return (
        <div className="app-container">
            {step === 1 && (
                <BookingForm 
                    onContinue={handleContinue} 
                    availableTimes={availableTimes} 
                    updateTimes={updateTimes} 
                />
            )}
            {step === 2 && (
                <ReservationSummary
                    data={reservationData}
                    onBack={handleBack}
                    onConfirm={handleConfirm}
                />
            )}
            {step === 3 && <BookingConfirmation />}
        </div>
    );
};

export default BookingPage;
