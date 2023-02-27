import { FC } from 'react';

import { Week } from '../Week';

interface IBodyDatePicker {
    month: Array<Array<Date>>;
    currentDate: Date;
    now: Date;
    onSelect: (year: number, month: number, date: number) => void;
}

export const BodyDatePicker: FC<IBodyDatePicker> = ({ month, currentDate, now, onSelect }) => {
    return (
        <div>
            {month.map((week, idx) => (
                <Week
                    key={idx}
                    week={week}
                    currentDate={currentDate}
                    now={now}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
}