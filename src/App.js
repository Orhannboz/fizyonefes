import Main from "./pages/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/About/AboutUs";
import Contact from "./pages/Contact/Contact";
import Orthopedic from "./pages/Cards/Orthopedic/Orthopedic";
import Pulmoner from "./pages/Cards/Pulmoner/Pulmoner";
import Manuel from "./pages/Cards/Manuel/Manuel";
import Preventive from "./pages/Cards/Preventive/Preventive";
import Geriatrik from "./pages/Cards/Geriatrik/Geriatrik";
import InHomeTherapy from "./pages/Cards/InHomeTherapy/InHomeTherapy";
import GTherapy from "./pages/Cards/GTherapy/GTherapy";
import Clinical from "./pages/Cards/Clinical/Clinical";
import WhatsAppIcon from "./components/whatsappicon/WhatsAppIcon";
import PhoneIcon from "./components/phoneicon/PhoneIcon";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/About" element={<AboutUs/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="*" element={<Main/>}/>
                    <Route path="/Orthopedic" element={<Orthopedic/>}/>
                    <Route path="/Pulmoner" element={<Pulmoner/>}/>
                    <Route path="/ManuelTherapy" element={<Manuel/>}/>
                    <Route path="/Preventive" element={<Preventive/>}/>
                    <Route path="/Geriatrik" element={<Geriatrik/>}/>
                    <Route path="/InHomeTherapy" element={<InHomeTherapy/>}/>
                    <Route path="/GTherapy" element={<GTherapy/>}/>
                    <Route path="/ClinicalTherapy" element={<Clinical/>}/>
                </Routes>
                <Footer></Footer>
                    <WhatsAppIcon phoneNumber="05010143434"/>
                    <PhoneIcon phoneNumber="05010143434"/>
            </BrowserRouter>
        </div>
    );
}

export default App;
