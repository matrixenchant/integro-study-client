import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <NavLink to="/app/cabinet">Мой кабинет</NavLink>
      <NavLink to="/app/shedule">Расписание</NavLink>
      <NavLink to="/app/services">Услуги</NavLink>
      <NavLink to="/app/statistic">Статистика</NavLink>
      <NavLink to="/app/mentor">Ментор</NavLink>
      <NavLink to="/app/help">Справочник</NavLink>
    </div>
  );
};

export default Sidebar;
