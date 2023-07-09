import React from 'react';
import Logo from '../../components/fizyonefes_logo.png'
import Youtube from '../../components/youtube.png'
import Instagram from '../../components/instagram.png'
import Facebook from '../../components/facebook.png'
import './main.css';


function Main() {
    return <div className="main-page">
        <div className="main-attribute">
            <div className="main-logo"><img src={Logo} width="500"/></div>
            <div className="main-explanation">
                <div className="explanation #1"> Fizyoterapi ve spora bütüncül bakan merkezimiz ağrısız bir şekilde yaşama devam </div>
                <div className="explanation #2">etmek isteyen vücudunun fonksiyonelliğini korumayı ve arttırmayı hedefleyen her</div>
                <div className="explanation #3">yaştan bireylere ve her türlü spor branşındaki sporculara hizmet vermektedir.</div>
            </div>
                <div className="main-social-media">
                    <div className="social"> <a href={"https://www.youtube.com/@FizyoNefesGTerapiMerkezi"}> <img src={Youtube} width="48"/>  </a></div>
                    <div className="social"> <a href={"https://www.instagram.com/fizyonefess/"}> <img src={Instagram} width="48"/> </a></div>
                    <div className="social"> <a href={"https://www.facebook.com/FizyoNefes"}> <img src={Facebook} width="48"/> </a></div>
                </div>
            </div>
        </div>
        }

        export default Main;