import React from 'react';
import './AboutUs.css';
import Ersin from '../../images/profile/ersin.png'

const AboutUs = () => {
    return (
        <div className={"whole-container"}>
                <div className="about-me-container">
                    <div className="profile">
                        <img src={Ersin} alt="Your Name"/>
                        <h1>Ersin Büyünlü</h1>
                        <h2>Fizyoterapist</h2>
                    </div>
                    <div className="bio">
                        <h2>About Me</h2>
                        <p>
                            Write a brief introduction about yourself here. Share your passions, interests, and any
                            other
                            relevant information
                            that you want others to know about you. Keep it engaging and informative.
                        </p>
                    </div>
                    <div className="contact">
                        <h2>Contact</h2>
                        <div className={"contact-link"}> <a href="#s">youremail@example.com</a> </div>
                        <div className="about-social-media">
                            <div className="social"> <a href="https://www.facebook.com/FizyoNefes"><i className="fab fa-facebook-f"></i></a>
                            </div>
                            <div className="social">  <a href="https://www.youtube.com/@FizyoNefesGTerapiMerkezi"><i className="fab fa-youtube"></i></a> </div>
                            <div className="social"><a href="https://www.instagram.com/fizyonefess/"><i className="fab fa-instagram"></i></a> </div>
                        </div>
                    </div>
                </div>

            <div className="about-me-container">
                <div className="profile">
                    <img src={Ersin} alt="Your Name"/>
                    <h1>İrem Büyünlü</h1>
                    <h2>Fizyoterapist</h2>
                </div>
                <div className="bio">
                    <h2>About Me</h2>
                    <p>
                        Write a brief introduction about yourself here. Share your passions, interests, and any other
                        relevant information
                        that you want others to know about you. Keep it engaging and informative.
                    </p>
                </div>
                <div className="contact">
                    <h2>Contact</h2>
                    <div className={"contact-link"}>  <a href="#s">youremail@example.com</a> </div>
                    <div className="about-social-media">
                        <div className="social"> <a href="https://www.facebook.com/FizyoNefes"><i className="fab fa-facebook-f"></i></a>
                        </div>
                        <div className="social">  <a href="https://www.youtube.com/@FizyoNefesGTerapiMerkezi"><i className="fab fa-youtube"></i></a> </div>
                        <div className="social"><a href="https://www.instagram.com/fizyonefess/"><i className="fab fa-instagram"></i></a> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;