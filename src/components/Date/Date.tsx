import './styles.css';

import clsx from 'clsx';
import { FC } from 'react';

interface IDate {
  date: Date;
  currentDate: Date;
  dateSelect: string;
  now: Date;
  onSelect: (year: number, month: number, date: number) => void;
}

export const Date: FC<IDate> = ({ date, currentDate, dateSelect, now, onSelect }) => {
  const selects = dateSelect.split('/');
  const isCurentMonth = date.getMonth() === currentDate.getMonth();
  const isNow =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();
  const isCurrentDay =
    date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth();
  const isSelectedDate =
    date.getDate() === Number(selects[0]) &&
    date.getMonth() === Number(selects[1]) - 1 &&
    date.getFullYear() === Number(selects[2]);

  return (
    <div
      className={clsx('Date', {
        currentMonth: !isCurentMonth,
        now: isNow,
        currentDay: isCurrentDay,
        selectedDate: isSelectedDate,
      })}
      onClick={() => onSelect(date.getFullYear(), date.getMonth(), date.getDate())}
    >
      {date.getDate()}
    </div>
  );
};
