import React from 'react';
import './mobile.css';
import { FcCollapse, FcCommandLine, FcTemplate, FcBriefcase, FcPhone } from 'react-icons/fc';

function Mobile({ isOpen, setIsOpen }) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <FcCollapse />
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#project">
                        <FcTemplate className="option-icon" />Projeler
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skills">
                        <FcCommandLine className="option-icon" />Yetenekler
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                        <FcBriefcase className="option-icon" />Deneyim
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                        <FcPhone className="option-icon" />İletişim
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile;
