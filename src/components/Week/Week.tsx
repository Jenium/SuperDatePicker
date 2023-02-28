import './styles.css';

import { FC } from 'react';

import { Date } from '../Date';

interface IWeek {
  week: Array<Date>;
  currentDate: Date;
  dateSelect: string;
  now: Date;
  onSelect: (year: number, month: number, date: number) => void;
}

export const Week: FC<IWeek> = ({ week, currentDate, dateSelect, now, onSelect }) => {
  return (
    <div className="Week">
      {week.map((day) => (
        <Date
          key={day.getDate()}
          date={day}
          currentDate={currentDate}
          dateSelect={dateSelect}
          now={now}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
