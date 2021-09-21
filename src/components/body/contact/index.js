import React from 'react';
import './contact.css';
import Separator from '../../common/separator/index';
import SocialContact from '../../common/social-contact/index';

function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">İletişim</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>İletişim kurmak mı istiyorsun?</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a download href="https://doc-00-b4-docs.googleusercontent.com/docs/securesc/rg75abac4pa64gvhn45atnau6j6tf3e0/om3tr2biorojtpbjqasb5251830fv9ci/1632261900000/07633345865596910911/07633345865596910911/1w1-IpLWT3bIm0A7twPoG6LBxkNqu2SEO?e=download&authuser=0&nonce=orl7tgn8s47m4&user=07633345865596910911&hash=f4lgbnj2u4l8qi9qluin97l3s3cgoejv">
                        Özgeçmişi İndir
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
