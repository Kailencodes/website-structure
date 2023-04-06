
import React from "react";
import { Route, Routes } from 'react-router-dom';
import './webpage.css';
import Home from './Home';
import Login from './Login';
import UserProfile from './Profile';


const NotFound = () => {
    <h1>404</h1>
}


const Routing = () => {
    return(
        <div>
            <div>
                
            </div>
            <Routes>
                <Route path='/Profile' element={<UserProfile />} />
                <Route path='/Login' element={<Login />}/>
                <Route path='/Home' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}
export default Routing;


