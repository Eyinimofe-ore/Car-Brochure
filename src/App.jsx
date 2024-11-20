// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import CarDetail from "./next/CarDetail";
import CarList from "./next/CarList";
import LoginSignup from "./components/LoginSignup/LoginSignup";

// Wrapper component to handle initial state for LoginSignup component
function LoginSignupWrapper() {
  const location = useLocation();
  const initialState = location.state?.initialState || 'login';
  return <LoginSignup initialState={initialState} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/:name" element={<CarDetail />} />
        <Route path="/sign" element={<LoginSignupWrapper />} /> {/* Updated route */}
      </Routes>
    </Router>
  );
}

export default App;
