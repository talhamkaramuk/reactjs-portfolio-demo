import React from 'react';
import SocialContact from '../../common/social-contact';
import './about.css';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Merhabalar, ben <span className="info-name">Tâlha Mehmet KARAMUK</span>.<br /><br />Web uygulamaları, masaüstü ve mobil uygulamalar geliştiriyorum ve bu alanlarda uzmanlaşmaya çalışıyorum.
                </div>
                <div className="about-photo">
                    <img src="https://svgshare.com/i/aP0.svg" className="pic" />
                </div>
            </div>
            <div>
                <SocialContact />
            </div>
        </div>
    )
}

export default About;
