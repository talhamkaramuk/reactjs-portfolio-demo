import React from 'react';
import './web.css';
import { FcBriefcase, FcCommandLine, FcPhone, FcTemplate } from 'react-icons/fc';

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                    <FcTemplate className="option-icon" />Projeler
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                    <FcCommandLine className="option-icon" />Yetenekler
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                    <FcBriefcase className="option-icon" />Deneyim
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                    <FcPhone className="option-icon" />İletişim
                </a>
            </div>
        </div >
    )
}

export default Web;
