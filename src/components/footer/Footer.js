import React from 'react';
import {useNavigate} from 'react-router-dom';
import Logo from '../../images/icons/fizyonefes_logo.png'
import Location from '../../images/icons/location.png'
import Phone from '../../images/icons/phone.png'
import Mail from '../../images/icons/mail.png'
import './footer.css';


function Footer() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/")
    }

    return (
        <footer>
            <div className={"footer"}>
                <div className={"head-footer"}>
                    <div className={"footer-container"}>
                        <div className={"logo-footer"}>
                            <img src={Logo}/>
                        </div>
                        <div className={"footer-middle"}>
                            <div className={"footer-services"}> Hizmetler</div>
                            <div className={"footer-links"}>
                                {field("Ortopedik Rehabilitasyon", "/")}
                                {field("Sportif Rehabilitasyon", "/About")}
                                {field("Manuel Terapi", "/Contact")}
                                {field("Koruyucu Fizyoterapi", "https://www.doktortakvimi.com/ersin-buyunlu-2/fizyoterapi-ve-rehabilitasyon/istanbul")}
                                {field("Geriatrik Rehabilitasyon", "/")}
                                {field("Evde Fizik Tedavi", "/About")}
                                {field("G Therapy", "/Contact")}
                                {field("Klinik Masaj", "https://www.doktortakvimi.com/ersin-buyunlu-2/fizyoterapi-ve-rehabilitasyon/istanbul")}
                            </div>
                        </div>
                        <div className={"footer-information"}>
                            <div className={"footer-svg"}>
                                <div className={"footer-icon"}><img src={Location}/></div>
                                <p className={"footer-location-info"}> Mimar Sinan Mahallesi, Şair Eşref Bulvarı Güneş
                                    Apartmanı no:80 Kat:2 Daire:5
                                    Alsancak/Konak/İZMİR</p>
                            </div>
                            <div className={"footer-svg"}>
                                <div className={"footer-icon"}><img src={Phone}/></div>
                                <p>+90 546 896 28 60</p>
                            </div>
                            <div className={"footer-svg footer-mail"}>
                                <div className={"footer-icon"}><img src={Mail}/></div>
                                <p> info@fizandsports.com</p>
                            </div>
                        </div>
                    </div>
                    <div className={"all-rights"}>© Tüm Hakları Saklıdır 2023 FizyoNefes</div>
                </div>
            </div>

        </footer>
    )
}

const field = (fieldName, route) => {
    return <div className={"footer-field"}>
        <a href={route}>{fieldName}</a>
    </div>
}


export default Footer;