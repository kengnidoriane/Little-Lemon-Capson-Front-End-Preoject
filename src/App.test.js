import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { fetchAPI } from "./services/api";

describe("BookingForm Component", () => {
    // Configuration initiale pour chaque test
    const mockOnSubmit = jest.fn();
    const mockUpdateTimes = jest.fn();
    const defaultAvailableTimes = ["17:00", "18:00", "19:00"];

    // Configuration de base du composant
    const setupComponent = (props = {}) => {
        const defaultProps = {
            availableTimes: defaultAvailableTimes,
            updateTimes: mockUpdateTimes,
            onSubmit: mockOnSubmit,
        };
        return render(<BookingForm {...defaultProps} {...props} />);
    };

    // Réinitialisation avant chaque test
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("Rendering Tests", () => {
        test("should render all form fields correctly", () => {
            setupComponent();

            expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
            expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
        });

        test("should render all available time slots", () => {
            setupComponent();

            const timeSelect = screen.getByLabelText(/time/i);
            defaultAvailableTimes.forEach(time => {
                expect(screen.getByText(time)).toBeInTheDocument();
            });
        });
    });

    describe("Form Validation Tests", () => {
        test("should show validation errors for empty required fields", async () => {
            setupComponent();

            fireEvent.click(screen.getByRole("button", { name: /submit/i }));

            await waitFor(() => {
                expect(screen.getByText(/name is required/i)).toBeInTheDocument();
            });
        });

        test("should validate number of guests range", async () => {
            setupComponent();

            const guestsInput = screen.getByLabelText(/number of guests/i);

            // Test avec une valeur invalide
            fireEvent.change(guestsInput, { target: { value: "0" } });
            fireEvent.blur(guestsInput);

            await waitFor(() => {
                expect(screen.getByText(/minimum 1 guest required/i)).toBeInTheDocument();
            });

            // Test avec une valeur valide
            fireEvent.change(guestsInput, { target: { value: "4" } });
            fireEvent.blur(guestsInput);

            await waitFor(() => {
                expect(screen.queryByText(/minimum 1 guest required/i)).not.toBeInTheDocument();
            });
        });
    });

    describe("Date and Time Selection Tests", () => {
        test("should update available times when date changes", () => {
            setupComponent();

            const dateInput = screen.getByLabelText(/date/i);
            const newDate = "2024-03-14";

            fireEvent.change(dateInput, { target: { value: newDate } });

            expect(mockUpdateTimes).toHaveBeenCalledWith(newDate);
        });

        test("should not allow past dates", () => {
            setupComponent();

            const dateInput = screen.getByLabelText(/date/i);
            const today = new Date().toISOString().split('T')[0];
            expect(dateInput.min).toBe(today);
        });
    });

    describe("Form Submission Tests", () => {
        test("should submit form with valid data", async () => {
            setupComponent();
            fireEvent.change(screen.getByLabelText(/name/i), {
                target: { value: "John Doe" }
            });
            fireEvent.change(screen.getByLabelText(/date/i), {
                target: { value: "2024-03-14" }
            });
            fireEvent.change(screen.getByLabelText(/time/i), {
                target: { value: "18:00" }
            });
            fireEvent.change(screen.getByLabelText(/number of guests/i), {
                target: { value: "4" }
            });
            fireEvent.change(screen.getByLabelText(/occasion/i), {
                target: { value: "Birthday" }
            });

            // Soumettre le formulaire
            fireEvent.click(screen.getByRole("button", { name: /submit/i }));

            // Vérifier que onSubmit a été appelé avec les bonnes données
            await waitFor(() => {
                expect(mockOnSubmit).toHaveBeenCalledWith({
                    name: "John Doe",
                    date: "2024-03-14",
                    time: "18:00",
                    guests: "4",
                    occasion: "Birthday"
                });
            });
        });
    });

    describe("API Integration Tests", () => {
        test("fetchAPI should return valid time slots", () => {
            const date = "2024-03-14";
            const times = fetchAPI(new Date(date));
            expect(Array.isArray(times)).toBe(true);
            times.forEach(time => {
                expect(time).toMatch(/^([0-9]|1[0-9]|2[0-3]):[0-3]0$/);
            });
        });

        test("fetchAPI should handle invalid dates", () => {
            const times = fetchAPI(new Date("invalid-date"));
            expect(Array.isArray(times)).toBe(true);
            expect(times.length).toBe(0);
        });
    });
});
