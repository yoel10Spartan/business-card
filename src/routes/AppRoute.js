import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CardPage from '../pages/CardPage';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route path='' element={<CardPage main />} />
                    <Route path=':email' element={<CardPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute