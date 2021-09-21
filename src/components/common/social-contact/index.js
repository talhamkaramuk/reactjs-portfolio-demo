import React from 'react';
import './social-contact.css';
import { SocialData } from '../../data/social';

function SocialContact() {

    const data = SocialData;

    return (
        <div className="social-contact">
            {data.map((icon) => {
                return (
                    <a href={icon.link}>
                        <div className="social-icon-div">
                            <img src={icon.icon} className="social-icon" />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact;
