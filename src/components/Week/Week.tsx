import './styles.css';

import { FC } from 'react';

import { Date } from '../Date';

interface IWeek {
    week: Array<Date>;
    currentDate: Date;
    now: Date;
    onSelect: (year: number, month: number, date: number) => void;
}

export const Week: FC<IWeek> = ({ week, currentDate, now, onSelect }) => {
    return (
        <div className="Week">
            {week.map((day) => (
                <Date
                    key={day.getDate()}
                    date={day}
                    currentDate={currentDate}
                    now={now}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
}