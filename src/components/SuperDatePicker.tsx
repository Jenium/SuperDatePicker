import './styles.css';

import { FC, useEffect, useState } from 'react';
import { clsx } from 'clsx';

import { getCurrentMonth, getZero } from '../utils';
import { DatePicker } from './DatePicker';
import { InputDate } from './InputDate';

export const SuperDatePicker: FC = () => {
    const now = new Date();

    const [currentYear, setCurrentYaer] = useState(now.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(now.getMonth());
    const [currentDate, setCurrentDate] = useState(now.getDate());

    const [isVisible, setIsVisible] = useState(false);

    const date = new Date(currentYear, currentMonth, currentDate);
    const dateValue = `${getZero(currentDate)}/${getZero(currentMonth + 1)}/${currentYear}`;
    const [dateSelect, setDataSelect] = useState(dateValue);
    const weeksMonth = getCurrentMonth(date);

    const handleChange = (value: string) => {
        const [date, month, year] = value.split('/').map(item => Number(item));

        console.log(date, month, year);

        if (getZero(date).length !== 2 || getZero(month).length !== 2 || String(year).length !== 4) {
            setDataSelect(value);
            return;
        }

        setDataSelect(`${getZero(date)}/${getZero(month)}/${year}`);

        setCurrentYaer(year);
        setCurrentMonth(month);
        setCurrentDate(date);
    }

    const handleAction = (action: string) => {
        action === 'next'
            ? setCurrentMonth(currentMonth + 1)
            : setCurrentMonth(currentMonth - 1);
    }

    const handleSelect = (year: number, month: number, date: number) => {
        setCurrentYaer(year);
        setCurrentMonth(month);
        setCurrentDate(date);
        setDataSelect(`${getZero(date)}/${getZero(month + 1)}/${year}`)
    }

    useEffect(() => {
        const hanleClickDocument = (e) => {
            e.target.querySelector('.SuperDatePicker')
                ? setIsVisible(false)
                : null
        }

        document.addEventListener('click', hanleClickDocument);
        return () => { document.removeEventListener('click', hanleClickDocument) };
    }, []);

    return (
        <div className="SuperDatePicker">
            <InputDate
                name="date"
                type="text"
                value={dateSelect}
                onChange={(e) => handleChange(e.target.value)}
                onFocus={() => setIsVisible(true)}
            />

            <DatePicker
                className={clsx({ 'DatePicker__visible': isVisible })}
                now={now}
                date={date}
                weeksMonth={weeksMonth}
                handleAction={handleAction}
                handleSelect={handleSelect}
            />
        </div>
    );
}