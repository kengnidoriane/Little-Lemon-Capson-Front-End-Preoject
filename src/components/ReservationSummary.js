import React from 'react';

const ReservationSummary = ({ data, onBack, onConfirm }) => {
    return (
        <div className="reservation-summary">
            <h2>Reservation Summary</h2>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Occasion:</strong> {data.occasion}</p>
            <p><strong>Date:</strong> {data.date}</p>
            <p><strong>Time:</strong> {data.time}</p>
            <p><strong>Guests:</strong> {data.guests}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <button onClick={onBack}>Back</button>
            <button onClick={onConfirm}>Confirm Reservation</button>
        </div>
    );
};

export default ReservationSummary;
