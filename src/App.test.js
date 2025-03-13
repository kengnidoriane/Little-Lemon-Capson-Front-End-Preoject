
import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm.js"
import { initializeTimes } from './pages/BookingPage.js';
import { timesReducer } from './pages/BookingPage.js;'; // Ajustez le chemin d'importation

// Test pour s'assurer que le texte statique est rendu
test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Table Reservation"); // Ajustez ceci selon votre en-tête réel
    expect(headingElement).toBeInTheDocument();
});

// Test pour vérifier que initializeTimes renvoie les heures initiales correctes
test('initializeTimes returns the correct initial times', () => {
    const expectedTimes = [
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
        "9:00 PM"
    ];
    expect(initializeTimes()).toEqual(expectedTimes);
});

// Test pour vérifier que updateTimes renvoie les mêmes heures disponibles
test('updateTimes returns the same available times', () => {
    const initialState = initializeTimes();
    const action = { type: 'UPDATE_TIMES', date: '2025-03-13' }; // Exemple de date
    const newState = timesReducer(initialState, action);
    expect(newState).toEqual(initialState); // Puisqu'il renvoie les mêmes heures pour l'instant
});
