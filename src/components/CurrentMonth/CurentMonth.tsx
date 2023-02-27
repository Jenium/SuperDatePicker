import { FC } from 'react';

import { MONTHS } from '../constant';

interface ICurrentMonth {
    month: number;
    year: number
}

export const CurrentMonth: FC<ICurrentMonth> = ({month, year}) => {
    return (
        <h1>{MONTHS[month]} {year}</h1>
    )
}