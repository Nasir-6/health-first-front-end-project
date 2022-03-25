import { render, screen } from '@testing-library/react';
import DoctorPage from '../pages/DoctorPage';
import { BrowserRouter as Router, MemoryRouter, Route, Routes } from 'react-router-dom'

describe("Doctor page tests", () => {
  test('displays correct welcome message for doctor', async () => {
    // Sets path to "doctor/1"
    window.history.pushState({}, "", "doctor/1");
    render(
      <Router>
        <Routes>
        <Route exact path="/doctor/:doctorId" element={<DoctorPage currentDoctor={{name: "Darwin", id: 1}}/>} />
        </Routes>
      </Router>
    )
    const welcomeMessage = await screen.findByText("Hi Dr Darwin");
    expect(welcomeMessage).toBeVisible();
  });
})
