import './styles.css';

import { clsx } from 'clsx';
import { FC } from 'react';

import { BodyDatePicker } from '../BodyDatePicker';
import { HeaderDatePicker } from '../HeaderDatePicker';

interface IDatePicker {
  now: Date;
  date: Date;
  dateSelect: string;
  weeksMonth: Array<Array<Date>>;
  handleAction: (action: string) => void;
  handleSelect: (year: number, month: number, date: number) => void;
  className?: string;
}

export const DatePicker: FC<IDatePicker> = ({
  now,
  date,
  dateSelect,
  weeksMonth,
  handleAction,
  handleSelect,
  className,
}) => {
  return (
    <div className={clsx('DatePicker', className)}>
      <HeaderDatePicker month={date.getMonth()} year={date.getFullYear()} action={handleAction} />

      <BodyDatePicker
        month={weeksMonth}
        currentDate={date}
        dateSelect={dateSelect}
        now={now}
        onSelect={handleSelect}
      />
    </div>
  );
};
