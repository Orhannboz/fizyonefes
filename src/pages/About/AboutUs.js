import React from 'react';
import './AboutUs.css';
import Ersin from '../../images/profile/ersin.jpg'
import Irem from '../../images/profile/irem.jpg'

const AboutUs = () => {
    return (
        <div className={"whole-container"}>

            <div className="about-me-container">
                <div className="profile">
                    <img src={Irem} alt="Your Name"/>
                    <h1>İrem Büyünlü</h1>
                    <h2>Fizyoterapist</h2>
                </div>
                <div className="bio">
                    <h2>Hakkımda</h2>
                    <p>
                        Ben Fzt.İrem Büyünlü , 2020 yılında Fizik tedavi ve Rehabilitasyon (lisans) eğitimimi tamamladım. Çeşitli uluslararası kurumlardan pilates eğitimlerimi aldım.
                        Bu süreçte  Manuel Terapi ve Alternatif Tıp teknikleri üzerine eğitimler aldım. Aynı zamanda çeşitli klinik ve hastanelerde staj yaparak deneyimler kazandım.
                        Çalışma hayatıma 2020 yılından sonra İstanbul'da özel bir kurumda devam ettim. 2022 yılından itibaren  kurucusu olduğum  Fizyonefes Sağlıklı Yaşam Merkezi’nde devam etmekteyim.
                    </p>
                </div>
                <div className="contact">
                    <h2>Sertifikalar</h2>
                    <div className={"contact-link"}>
                        Polestar Pilates AKIN SAATÇi / Pilates Eğitmenliği kursu <br/>
                        Pediatrik rehabilitasyon multidisipliner bakış sempozyumu <br/>
                        For successfully completing the
                        Musculoskeletal System for Physiotherapists
                        Radio Anatomy " BASIC SPINE" Education/Msc.Pt.Yaşam Verdi <br/>
                        OSTEOPATİK MANUEL TERAPİ KURSU/Prof.Dr.Ali Cımbız <br/>
                        LUMBOPELVİK RİTİM PATOLOJİLERİ /Üsküdar Üniversitesi <br/>
                        ROBOTİK REHABİLİTASYON KONGRESİ İstanbul/İstanbul Gelişim Üniversitesi<br/>
                    </div>

            </div>

                <div className="about-me-container">
                    <div className="profile">
                        <img src={Ersin} alt="Your Name"/>
                        <h1>Ersin Büyünlü</h1>
                        <h2>Fizyoterapist</h2>
                    </div>
                    <div className="bio">
                        <h2>Hakkımda</h2>
                        <p>
                            İstanbul 1996 doğumluyum. Lise eğitimini İbrahim Turhan Anadolu Lisesinde (2011-2015) yıllarında tamamladım. Sonrasında Ön Lisans eğitimini İstanbul Gelişim Üniversitesi Fizyoterapi bölümünde (2015-2017) yıllarında tamamladım. Devamında, Lisans eğitimini İstanbul Gelişim Üniversitesinde Fizik Tedavi ve Rehabilitasyon bölümünden (2017-2019) yıllarında mezun oldum. Üç yıl süreyle özel bir hastanede görevime devam ettim. Sonrasında 2022 yılında
                            FizyoNefes Sağlıklı Yaşam Merkezinin kurucusu olarak mesleğimi icra etmekteyim.
                        </p>
                    </div>
                    <div className="contact">
                        <h2>Sertifikalar</h2>
                        <div className={"contact-link"}> Dry Needling Teigger Point Kursu Prof.Dr.Ali Cımbız <br/>
                            Osteopatik Manuel Terapi Kursu Prof.Dr.Ali Cımbız <br/>
                            Robotik Rehabilitasyon Kongresi İstanbul Gelişim Üniversitesi <br/>
                            LumboPelvik Ritim Patolojileri İstanbul Üsküdar Üniversitesi  <br/>
                            Noninvaziv Mekanik Ventilasyon Kursu/ Türkiye Solunum Araştırmaları Derneği <br/>
                            Omurga Sağlığı Sempozyumu: İnstabiliteler İstanbul Üsküdar Üniversitesi <br/>

                        </div>
                    </div>

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