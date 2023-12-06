import React from 'react';

import stat from '../assets/stat.svg';

const Statistic = () => {
    return (
        <div className='app-stat'>
            <h2>Показатели прогресса</h2>
            <img src={stat} />
        </div>
    );
}

export default Statistic;
