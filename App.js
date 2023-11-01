import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/Login.js';
import SignupPage from './Components/Signup.js';
import TypingPage from './Components/TypePage.js';
import StatsPage from './Components/Statistics.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={SignupPage} />
        <Route path="/typing" component={TypingPage} />
        <Route path="/results" component={StatsPage} />
      </Routes>
    </Router>
  );
}

export default App;