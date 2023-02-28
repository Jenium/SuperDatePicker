import { FC } from 'react';

import { Week } from '../Week';

interface IBodyDatePicker {
    month: Array<Array<Date>>;
    currentDate: Date;
    dateSelect: string;
    now: Date;
    onSelect: (year: number, month: number, date: number) => void;
}

export const BodyDatePicker: FC<IBodyDatePicker> = ({ 
    month, 
    currentDate, 
    dateSelect, 
    now, 
    onSelect 
}) => {
    return (
        <div>
            {month.map((week, idx) => (
                <Week
                    key={idx}
                    week={week}
                    currentDate={currentDate}
                    dateSelect={dateSelect}
                    now={now}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
}