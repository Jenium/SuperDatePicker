import './styles.css';

import { FC, useState } from 'react';
import { clsx } from 'clsx'; 

import { getCurrentMonth, getZero } from '../utils';
import { DatePicker } from './DatePicker';
import { InputDate } from './InputDate';

export const SuperDatePicker: FC = () => {
    const now = new Date();

    const [currentYear, setCurrentYaer] = useState(now.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(now.getMonth());
    const [currentDate, setCurrentDate] = useState(now.getDate());

    const [isFocused, setIsFocused] = useState(false);
    
    const date = new Date(currentYear, currentMonth, currentDate);
    const dateValue = `${getZero(currentDate)}/${getZero(currentMonth + 1)}/${currentYear}`;
    const [dateSelect, setDataSelect] = useState(dateValue);
    const weeksMonth = getCurrentMonth(date);

    const handleChange = (value: string) => {
        const [date = currentDate, month = currentMonth, year = currentYear] = value.split('/').map(item => Number(item));
        setDataSelect(`${getZero(date)}/${getZero(month + 1)}/${year}`);
        if (String(year).length === 4) {
            setCurrentYaer(year);
        }
        if (String(month).length === 2 || String(month).length === 1) {
            setCurrentMonth(month);
        }
        if (String(date).length === 2 || String(date).length === 1) {
            setCurrentDate(date);
        }
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

    return (
        <div className="SuperDatePicker">
            <InputDate 
                name="date"
                type="text"
                value={dateSelect}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200) }
                onFocus={() => setIsFocused(true)}
            />

            <DatePicker
                className={clsx({'DatePicker__visible': isFocused})}
                now={now}
                date={date}
                weeksMonth={weeksMonth}
                handleAction={handleAction}
                handleSelect={handleSelect}
            />
        </div>
    );
}