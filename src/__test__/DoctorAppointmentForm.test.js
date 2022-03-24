import { render, screen, fireEvent} from '@testing-library/react';
import DoctorAppointmentForm from '../components/DoctorAppointmentForm';

describe("Doctor page tests", () => {
  test('can input text into date field in doctor form', () => {
    // Given
    window.history.pushState({}, "", "doctor/1");
    render(
        <DoctorAppointmentForm patientList={[]}/>
    )
    const inputDateField = screen.getByTestId(/doctor-input-date/i);
    // When
    fireEvent.change(inputDateField, { target: { value: "22/10/2022"}})
    // Then
    expect(inputDateField.value).toBe("22/10/2022");
  })
  test('can input text into time field in doctor form', () => {
    // Given
    window.history.pushState({}, "", "doctor/1");
    render(
        <DoctorAppointmentForm patientList={[]}/>
    )
    const inputDateField = screen.getByTestId(/doctor-input-time/i);
    // When
    fireEvent.change(inputDateField, { target: { value: "14:00:00"}})
    // Then
    expect(inputDateField.value).toBe("14:00:00");
  })
})