import React from 'react';
import Logo from '../../images/icons/fizyonefes_logo.png'
import Youtube from '../../images/icons/youtube.png'
import Instagram from '../../images/icons/instagram.png'
import Facebook from '../../images/icons/facebook.png'
import './main.css';
import FizikRehab from '../../images/cards/fizik_rehab.jpg'


function Main() {
    const card = (cardName) => {
        return <div className={'card ' + cardName}>< /div>
    }

    return <div className="main-page">
        <div className="main-attribute">
            <div className="main-logo"><img src={Logo}/></div>
            <div className="main-explanation">
                <div className="explanation">
                    <p>Fizyoterapi ve spora bütüncül bakan merkezimiz ağrısız bir şekilde
                        yaşama devam
                        etmek isteyen vücudunun fonksiyonelliğini korumayı ve arttırmayı
                        hedefleyen her
                        yaştan bireylere ve her türlü spor branşındaki sporculara hizmet
                        vermektedir. </p>
                </div>

            </div>
            <div className="main-social-media">
                <div className="social"><a href={"https://www.youtube.com/@FizyoNefesGTerapiMerkezi"}> <img
                    src={Youtube} width="48"/> </a></div>
                <div className="social"><a href={"https://www.instagram.com/fizyonefess/"}> <img src={Instagram}
                                                                                                 width="48"/> </a></div>
                <div className="social"><a href={"https://www.facebook.com/FizyoNefes"}> <img src={Facebook}
                                                                                              width="48"/> </a></div>
            </div>
        </div>
        <div className="services"><h1>Hizmetlerimiz;</h1></div>
        <div className={"main-cards"}>
            <div className={'card ortopedik'}> <span className={"card-exp"}>Ortopedik Rehabilitasyon </span></div>
            <div className={'card sports-rehab'}> <span className={"card-exp"}>Sportif Rehabilitasyon </span> </div>
            <div className={'card manuel-therapy'}> <span className={"card-exp"}>Manuel Terapi </span> </div>
            <div className={'card preventive'}> <span className={"card-exp"}>Koruyucu Fizyoterapi </span> </div>
            <div className={'card geriatrik'}> <span className={"card-exp"}>Geriatrik Rehabilitasyon </span></div>
            <div className={'card in-home'}> <span className={"card-exp"}>Evde Fizik Tedavi </span></div>
            <div className={'card g-therapy'}> <span className={"card-exp"}>G Therapy </span></div>
            <div className={'card clinical-therapy'}> <span className={"card-exp"}>Klinik Masaj </span></div>
        </div>
    </div>
}

export default Main;