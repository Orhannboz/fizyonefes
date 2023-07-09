import React from 'react';
import Logo from './fizyonefes_logo.png'
import { useNavigate } from 'react-router-dom';

import './navbar.css';


function Navbar() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/")
    }

    return (
        <div className={"navigation"}>
            <div className={"head-navbar"}>
                <div className="logo" onClick={handleClick}><img src={Logo} width="250"/></div>
                <div className={"navbar"}>
                    {field("Anasayfa", "/")}
                    {field("Ekibimiz", "/About")}
                    {field("İletişim", "/Contact")}
                    {field("Randevu Al", "https://www.doktortakvimi.com/ersin-buyunlu-2/fizyoterapi-ve-rehabilitasyon/istanbul")}
                </div>
            </div>
        </div>
    )
}

const field = (fieldName, route) => {
    return <div className={"navbar-field"}>
        <a href={route}>{fieldName}</a>
    </div>
}



export default Navbar;