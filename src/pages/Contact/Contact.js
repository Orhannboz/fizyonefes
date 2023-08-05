import React from 'react';
import './Contact.css'; // Make sure to create the ContactInfo.css file for styling

const Contact = () => {
    return (
        <div className={"main-section contact"}>
            <div className={"contact-info-header"}>
                <h2> İletişim</h2>
            </div>
            <div className="contact-info-container">
                <div className="contact-info-item">
                    <div className="contact-icon">
                        <i className="fa fa-map-marker"></i>
                    </div>
                    <div className={"contact-info-body"}>
                        Merkez, Reşit Paşa Cd. no:52 kat:3 daire:7, 34000 Avcılar/İstanbul
                    </div>
                </div>
                <div className="contact-info-item">
                    <div className="contact-icon">
                        <i className="fa fa-phone"></i>
                    </div>
                    <div className={"contact-info-body"}>
                        <div className={"contact-info-body"}> 0501 014 34 34</div>
                    </div>
                </div>

                <div className="contact-info-item">
                    <div className="contact-icon">
                        <i className="fa fa-envelope"></i>
                    </div>
                    <div className={"contact-info-body"}>
                        <div className={"contact-info-body"}> fizyonefes34@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className={"info-map"}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.93252362884!2d28.72026665893055!3d40.98073153472173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa1964682df7d%3A0x2eec2b9e676d34bc!2sFizyoNefes%20G%20Terapi%20Merkezi!5e0!3m2!1sen!2str!4v1690621106199!5m2!1sen!2str"
                width="800" height="450"  allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"></iframe> </div>
        </div>
    );
};

export default Contact;