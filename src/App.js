import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="app">
      
      <Routes>
      
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
        

    </div>
  );
}

export default App;
