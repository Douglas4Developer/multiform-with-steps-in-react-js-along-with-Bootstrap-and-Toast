import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';

import { FormStep1 } from './pages/formstep1';
import { FormStep2 } from './pages/formstep2';
import { FormStep3 } from './pages/formstep3';
import { FormStep4 } from './pages/formstep4';
import { FormStep5 } from './pages/formstep5';



export const Router = () => {
    return(
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<FormStep1/>}/>
                <Route path="/step2" element={<FormStep2/>}/> 
                <Route path="/step3" element={<FormStep3/>}/> 
                <Route path="/step4" element={<FormStep4/>}/>
                <Route path="/step5" element={<FormStep5/>}/>
            </Routes>
        </BrowserRouter>


    );
}