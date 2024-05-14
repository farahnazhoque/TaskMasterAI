import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import GeneralQuestion from './pages/GeneralQuestion.jsx';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/general-question" element={< GeneralQuestion/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);