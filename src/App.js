import Main from "./pages/main/Main";
import About from "./pages/About/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="*" element={<Main/>}/>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
