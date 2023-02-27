import { FC } from 'react';

import { DAYS_WEEK } from '../constant';

export const DayNames: FC = () => {
    return (
        <div className='mt-2 flex justify-between gap-2'>
            {DAYS_WEEK.map((day) => (
                <div
                    key={day}
                    className='w-8 h-8 text-xs flex items-center justify-center'
                >
                    {day.slice(0, 3)}
                </div>
            ))}
        </div>
    );
}