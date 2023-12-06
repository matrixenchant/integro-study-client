import moment from 'moment/moment';
import React from 'react';

const weekDays = [
  { day: 'Понедельник', date: moment().format('DD.MM'), isToday: moment().isoWeekday() === 1 },
  {
    day: 'Вторник',
    date: moment().add(1, 'days').format('DD.MM'),
    isToday: moment().isoWeekday() === 2,
  },
  {
    day: 'Среда',
    date: moment().add(2, 'days').format('DD.MM'),
    isToday: moment().isoWeekday() === 3,
  },
  {
    day: 'Четверг',
    date: moment().add(3, 'days').format('DD.MM'),
    isToday: moment().isoWeekday() === 4,
  },
  {
    day: 'Пятница',
    date: moment().add(4, 'days').format('DD.MM'),
    isToday: moment().isoWeekday() === 5,
  },
  {
    day: 'Суббота',
    date: moment().add(5, 'days').format('DD.MM'),
    isToday: moment().isoWeekday() === 6,
  },
];

const Shedule = () => {
  return (
    <div className="app-shedule">
      <div className="app-shedule-top">
        <div>ВРЕМЯ</div>
        {weekDays.map((x) => (
          <div key={x.date} className={x.isToday ? 'active' : ''}>
            <div>{x.day}</div>
            <div>{x.date}</div>
          </div>
        ))}
      </div>
      <div className="app-shedule-wrap">
        <div className="row">
          <div>10:00</div>
          <div className="active">Задача №n</div>
          <div></div>
          <div></div>
          <div></div>
          <div className="active">Задача №n</div>
          <div></div>
        </div>
        <div className="row">
          <div>11:00</div>
          <div></div>
          <div className="active">Задача №n</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div>12:00</div>
          <div></div>
          <div></div>
          <div className="active">Задача №n</div>
          <div></div>
          <div></div>
          <div className="active">Задача №n</div>
        </div>
        <div className="row">
          <div>13:00</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div>14:00</div>
          <div className="active">Задача №n</div>
          <div></div>
          <div></div>
          <div className="active">Задача №n</div>
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div>15:00</div>
          <div></div>
          <div className="active">Задача №n</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div>16:00</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="active">Задача №n</div>
          <div></div>
        </div>
        <div className="row">
          <div>17:00</div>
          <div></div>
          <div className="active">Задача №n</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div>18:00</div>
          <div></div>
          <div></div>
          <div></div>
          <div className="active">Задача №n</div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Shedule;
