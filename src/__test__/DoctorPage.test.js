import { render, screen } from '@testing-library/react';
import DoctorPage from '../pages/DoctorPage';
import { BrowserRouter as Router, MemoryRouter, Route, Routes } from 'react-router-dom'

describe("Doctor page tests", () => {
  test('displays correct welcome message for doctor', () => {
    // Sets path to "doctor/1"
    window.history.pushState({}, "", "doctor/1");
    render(
      <Router>
        <Routes>
        <Route exact path="/doctor/:doctorId" element={<DoctorPage/>} />
        </Routes>
      </Router>
    )
    const linkElement = screen.getByText(/Hi Doctor 1/i);
    expect(linkElement).toBeVisible();
  })
})
