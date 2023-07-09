import Main from "./pages/main/Main";
import About from "./pages/About/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";


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
            </BrowserRouter>
        </div>
    );
}

export default App;
