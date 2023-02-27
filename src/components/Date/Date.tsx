import './styles.css';

import { FC } from 'react';
import clsx from 'clsx';

interface IDate {
    date: Date;
    currentDate: Date;
    now: Date;
    onSelect: (year: number, month: number, date: number) => void;
}

export const Date: FC<IDate> = ({ date, currentDate, now, onSelect }) => {
    const isCurentMonth = date.getMonth() === currentDate.getMonth();
    const isNow = date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear();
    const isCurrentDay = date.getDate() === currentDate.getDate() &&
        date.getMonth() === currentDate.getMonth();

    return (
        <div
            className={clsx('Date', { 
                currentMonth: !isCurentMonth,
                now: isNow,
                currentDay: isCurrentDay, }
            )}
            onClick={() => onSelect(date.getFullYear(), date.getMonth(), date.getDate())}
        >
            {date.getDate()}
        </div>
    )
}