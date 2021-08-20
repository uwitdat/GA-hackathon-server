import React from 'react'
import { AiOutlineDown } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './LandingPage.css'


const LandingPage = () => {
    return (
        <div className='Signup-container'>
            <div className='immigrow-logo'>
                <img style={{ height: '8rem' }} alt='logo' src='imigrow.png'></img>
            </div>
            <h1 className='Signup-title'>IMMIGROW</h1>
            <p className='can'>Canada</p>
            <div className='Signup-text'>
                <p>Making your transition to Canada easier with mentorship, community events and more.</p>

            </div>
            <p className='lan-select'>Select your language</p>
            <div className='Signup-lan-container'>
                <p>English</p><AiOutlineDown className='arr-down' />
            </div>
            <Link to='/signup'>
                <button className='Signup-btn'>Sign up</button>
            </Link>
            <div className='text-container'>
                <p>Already have an account? <span className='signup'>Sign Up</span></p>
            </div>

        </div>
    )
}

export default LandingPage;