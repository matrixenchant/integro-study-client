import React, { useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import './index.scss';
import Cabinet from './Cabinet';
import Shedule from './Shedule';
import Services from './Services';
import Statistic from './Statistic';
import Mentor from './Mentor';
import Help from './Help';

const Study = () => {
    const [title, setTitle] = useState('личный кабинет');

    return (
        <div className='app'>
            <div className="app-fill"></div>
            <div className="app-fill"></div>
            <div className="app-header">
                <h2 className='manrope'>{title}</h2>
            </div>
            <div className="app-wrapper">
                <Sidebar />
                <div className="app-main">
                <Routes>
                    <Route path='/cabinet' element={<Cabinet setTitle={setTitle} />} />
                    <Route path='/shedule' element={<Shedule setTitle={setTitle} />} />
                    <Route path='/services' element={<Services setTitle={setTitle} />} />
                    <Route path='/statistic' element={<Statistic setTitle={setTitle} />} />
                    <Route path='/mentor' element={<Mentor setTitle={setTitle} />} />
                    <Route path='/help' element={<Help setTitle={setTitle} />} />
                    <Route path='/*' element={<Navigate to={'/app/cabinet'} />} />
                </Routes>
                </div>
            </div>
        </div>
    );
}

export default Study;
