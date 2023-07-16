import React from 'react';
import {useNavigate} from 'react-router-dom';
import Logo from '../../images/icons/fizyonefes_logo.png'
import Location from '../../images/icons/location.png'
import Phone from '../../images/icons/phone.png'
import Mail from '../../images/icons/mail.png'
import './footer.css';


function Footer() {

    return (<div>

        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>FizyoNefes</h4>
                        <ul>
                            <li><a href="#">Hakkımızda</a></li>
                            <li><a href="#">Sizden Gelen Yorumlar</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Hizmetlerimiz</h4>
                        <ul>
                            <li><a href="#">Ortopedik Rehabilitasyon</a></li>
                            <li><a href="#">Sportif Rehabilitasyon</a></li>
                            <li><a href="#">Manuel Terapi</a></li>
                            <li><a href="#">Koruyucu Fizyoterapi</a></li>
                            <li><a href="#">Geriatrik Rehabilitasyon</a></li>
                            <li><a href="#">Evde Fizik Tedavi</a></li>
                            <li><a href="#">G Therapy</a></li>
                            <li><a href="#">Klinik Masaj</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Ekibimiz</h4>
                        <ul>
                            <li><a href="https://www.doktortakvimi.com/ersin-buyunlu-2/fizyoterapi-ve-rehabilitasyon/istanbul">Fzt. Ersin Büyünlü</a></li>
                            <li><a href="#">Fzt. İrem Büyünlü</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/FizyoNefes"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.youtube.com/@FizyoNefesGTerapiMerkezi"><i className="fab fa-youtube"></i></a>
                            <a href="https://www.instagram.com/fizyonefess/"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    </div>)
}

const field = (fieldName, route) => {
    return <div className={"footer-field"}>
        <a href={route}>{fieldName}</a>
    </div>
}


export default Footer;