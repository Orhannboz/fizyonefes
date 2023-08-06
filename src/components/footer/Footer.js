import React from 'react';
import './footer.css';


function Footer() {

    return (<div>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>FizyoNefes</h4>
                        <ul>
                            <li><a href="/About">Hakkımızda</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Hizmetlerimiz</h4>
                        <ul>
                            <li><a href="/Orthopedic">Ortopedik Rehabilitasyon</a></li>
                            <li><a href="/Pulmoner">Pulmoner Rehabilitasyon</a></li>
                            <li><a href="/ManuelTherapy">Manuel Terapi</a></li>
                            <li><a href="/Preventive">Koruyucu Fizyoterapi</a></li>
                            <li><a href="/Geriatrik">Geriatrik Rehabilitasyon</a></li>
                            <li><a href="/InHomeTherapy">Evde Fizik Tedavi</a></li>
                            <li><a href="/GTherapy">G Therapy</a></li>
                            <li><a href="/ClinicalTherapy">Klinik Masaj</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Ekibimiz</h4>
                        <ul>
                            <li><a
                                href="https://www.doktortakvimi.com/ersin-buyunlu-2/fizyoterapi-ve-rehabilitasyon/istanbul">Fzt.
                                Ersin Büyünlü</a></li>
                            <li><a href="#">Fzt. İrem Büyünlü</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/FizyoNefes"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.youtube.com/@FizyoNefesGTerapiMerkezi"><i
                                className="fab fa-youtube"></i></a>
                            <a href="https://www.instagram.com/fizyonefess/"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>)
}


export default Footer;