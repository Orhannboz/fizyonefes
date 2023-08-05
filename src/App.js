import Main from "./pages/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/About/AboutUs";
import Contact from "./pages/Contact/Contact";
import Orthopedic from "./pages/Cards/Orthopedic/Orthopedic";


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
                    <Route path="/Orthopedic" element={<Orthopedic/>}></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
