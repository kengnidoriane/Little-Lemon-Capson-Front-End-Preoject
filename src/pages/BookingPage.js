import React, { useState, useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import ReservationSummary from '../components/ReservationSummary';
import ConfirmedBooking from '../components/ConfirmedBooking';
import { fetchAPI } from '../services/api';

// Reducer function to manage available times
const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload; // Mettre à jour avec les heures récupérées
        default:
            return state;
    }
};

const BookingPage = () => {

    // Initial state for available times
    const initializeTimes = () => {
        const today = new Date().toISOString().split('T')[0];
        return fetchAPI(today);
    };

    const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());

     // Mettre à jour les heures disponibles en fonction de la date sélectionnée
     const updateTimes = (selectedDate) => {
        const times = fetchAPI(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', payload: times });
    };
    const [step, setStep] = useState(1);
    const [reservationData, setReservationData] = useState({});

    const handleContinue = (data) => {
        setReservationData(data);
        setStep(2);
    };

    const handleBack = () => {
        setStep(1); // Revenir à l'étape 1
    };

    const handleConfirm = () => {
        setStep(3); // Passer à l'étape de confirmation
    };

   

    return (
        <div className="app-container">
            {step === 1 && (
                <BookingForm 
                    onContinue={handleContinue} 
                    availableTimes={availableTimes} 
                    updateTimes={updateTimes} 
                    initialData={reservationData} // Passer les données initiales
                />
            )}
            {step === 2 && (
                <ReservationSummary
                    data={reservationData}
                    onBack={handleBack}
                    onConfirm={handleConfirm}
                />
            )}
            {step === 3 && <ConfirmedBooking />}
        </div>
    );
};

export default BookingPage;
