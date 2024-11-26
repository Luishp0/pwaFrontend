import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Index from "./views/index";
import Register from "./views/register";
import Login from "./views/login";
import Gallery from "./views/Gallery";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Index />} />
                <Route path="/sign-up" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/gallery" element={<Gallery/>}/>
            </Routes>
        </Router>
    );
}

export default App;
