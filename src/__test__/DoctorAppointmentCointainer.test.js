import { render, screen, fireEvent} from '@testing-library/react';
import DoctorAppointmentsContainer from '../containers/DoctorAppointmentsContainer';

let doctorAppointmentsList = [];
const mockDeleteAppointment = async (e) => {
    const appointmentId = e.currentTarget.id

    doctorAppointmentsList = doctorAppointmentsList
        .filter(appointment => appointment.appointmentId !== appointmentId);

  }

describe("Doctor appointment container tests", () => {
    beforeAll(() => {
        doctorAppointmentsList.push({
            appointmentDate: "1997-10-09",
            appointmentId: 6,
            appointmentTime: "11:23:00",
            doctorName: "Dr Darwin",
            patientName: "Smola",
            roomName: "Room 1"
        })
        doctorAppointmentsList.push({
            appointmentDate: "1997-10-09",
            appointmentId: 2,
            appointmentTime: "11:23:00",
            doctorName: "Dr Darwin",
            patientName: "Nasir",
            roomName: "Room 1"
        })
    })
    test('can display appointments', () => {
        // Given
        window.history.pushState({}, "", "doctor/1");
        render(
            <DoctorAppointmentsContainer 
            doctorAppointmentsList={doctorAppointmentsList}
            handleDeleteAppointment={() => {}}
            updateAppointment={() => {}}
            />
        )
        const appointmentElements = screen.getAllByText(/Patient:/i);
        // When
        const numAppointments = appointmentElements.length;
        // Then
        expect(numAppointments).toBe(2);
  })
  test('can delete appointment', () => {
    // Given
    window.history.pushState({}, "", "doctor/1");
    render(
        <DoctorAppointmentsContainer 
        doctorAppointmentsList={doctorAppointmentsList}
        handleDeleteAppointment={() => {}}
        updateAppointment={() => {}}
        />
    )
    const appointmentElements = screen.getAllByText(/Patient:/i);
    // When
    const numAppointments = appointmentElements.length;
    // Then
    expect(numAppointments).toBe(2);
})
})