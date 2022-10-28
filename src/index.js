import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "../Components/Detail";
import { Home } from "../Components/Home";

const root = document.getElementById('root')
const app = createRoot(root)

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path=':id' element={<Detail />} />

        </Routes>
    </BrowserRouter>
    )
}



app.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)