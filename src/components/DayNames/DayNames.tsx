import './styles.css';

import { FC } from 'react';

import { DAYS_WEEK } from '../constant';

export const DayNames: FC = () => {
  return (
    <div className="DatePicker_daysWeek">
      {DAYS_WEEK.map((day) => (
        <div key={day} className="DatePicker_dayName">
          {day.slice(0, 3)}
        </div>
      ))}
    </div>
  );
};
