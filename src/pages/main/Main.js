import React from 'react';
import Logo from '../../images/icons/logo-new.png'
import './main.css';
import Comment from "./Comment";


function Main() {
    const card = (cardName) => {
        return <div className={'card ' + cardName}>< /div>
    }

    return <div className="main-page">
        <div className="main-attribute">
            <div className="main-logo"><img src={Logo}/></div>
            <div className="main-explanation">
                <div className="explanation">
                    <p>AĞRI ÇÖZÜM MERKEZİ KOMİK DEĞİL </p>
                </div>
            </div>
            <div className="main-social-media">
                <div className="social"><a href="https://www.facebook.com/FizyoNefes"><i
                    className="fab fa-facebook-f"></i></a>
                </div>
                <div className="social"><a href="https://www.youtube.com/@FizyoNefesGTerapiMerkezi"><i
                    className="fab fa-youtube"></i></a></div>
                <div className="social"><a href="https://www.instagram.com/fizyonefess/"><i
                    className="fab fa-instagram"></i></a></div>
            </div>
        </div>
        <div className={"main-cards"}>

            <a href={"/Orthopedic"}>
                <div className={'card ortopedik'}><span className={"card-exp"}>Ortopedik Rehabilitasyon </span></div>
            </a>

            <a href={"/Pulmoner"}>
                <div className={'card pulmoner-rehab'}><span className={"card-exp"}>Pulmoner Rehabilitasyon </span></div>
            </a>

            <a href={"/ManuelTherapy"}>
                <div className={'card manuel-therapy'}><span className={"card-exp"}>Manuel Terapi </span></div>
            </a>

            <a href={"/Preventive"}>
                <div className={'card preventive'}><span className={"card-exp"}>Koruyucu Fizyoterapi </span></div>
            </a>

            <a href={"/Geriatrik"}>
                <div className={'card geriatrik'}><span className={"card-exp"}>Geriatrik Rehabilitasyon </span></div>
            </a>

            <a href={"/InHomeTherapy"}>
                <div className={'card in-home'}><span className={"card-exp"}>Evde Fizik Tedavi </span></div>
            </a>

            <a href={"GTherapy"}>
                <div className={'card g-therapy'}><span className={"card-exp"}>G Therapy </span></div>
            </a>

            <a href={"ClinicalTherapy"}>
                <div className={'card clinical-therapy'}><span className={"card-exp"}>Klinik Masaj </span></div>
            </a>

        </div>
        <Comment/>
    </div>
}

export default Main;