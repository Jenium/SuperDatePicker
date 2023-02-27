import './styles.css';

import { FC } from 'react';
import { clsx } from 'clsx';

import { BodyDatePicker } from '../BodyDatePicker';
import { HeaderDatePicker } from '../HeaderDatePicker';

interface IDatePicker {
    now: Date;
    date: Date;
    weeksMonth: Array<Array<Date>>;
    handleAction: (action: string) => void;
    handleSelect: (year: number, month: number, date: number) => void;
    className?: string;
}

export const DatePicker: FC<IDatePicker> = ({now, date, weeksMonth, handleAction, handleSelect, className}) => {

    return (
        <div className={clsx('DatePicker', className)} >
            <HeaderDatePicker
                month={date.getMonth()}
                year={date.getFullYear()}
                action={handleAction}
            />

            <BodyDatePicker
                month={weeksMonth}
                currentDate={date}
                now={now}
                onSelect={handleSelect}
            />
        </div>
    );
}