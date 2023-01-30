import React from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';

function Main() {

    const navigate = useNavigate();

    const resume = () => {
        navigate("/resume");
    }

    return (
        <div className='me'>
            <div className="banner d-flex align-items-center">
                <div className="overlay" />
                <div className="name">
                    <h1>Bansi Gadhiya</h1>
                    <p>I'm front end developer.</p>
                    <button type="button" className="btn mt-3" onClick={() => {resume()}}>View Resume <i className="fa-solid fa-arrow-right-long ps-2" /></button>
                </div>
            </div>
        </div>
    )
}

export default Main
