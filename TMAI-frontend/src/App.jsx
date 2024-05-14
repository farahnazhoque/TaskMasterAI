import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className='header'>
        <img className="logo" src="../public/Group 2.png" alt="" />
        </div> {/* header needs to be added as a template for all pages */}
      <h1 className='heading1'>Centralize Your Side Projects</h1>
        <p className='para'>
        Manage all your side projects in one intuitive platform, designed to keep you organized and on track with tasks and deadlines.

        </p>
        <button className="get-started" onClick={() => navigate('/general-question')}>
          Get Started
        </button>
    </>
  )
}

export default App
