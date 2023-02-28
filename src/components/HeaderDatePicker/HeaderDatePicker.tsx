import './styles.css';

import { FC } from 'react';
import { ButtonNavigation } from '../ButtonNavigation';

import { CurrentMonth } from '../CurrentMonth';
import { DayNames } from '../DayNames';

interface IHeaderDatePicker {
  month: number;
  year: number;
  action: (action: string) => void;
}

export const HeaderDatePicker: FC<IHeaderDatePicker> = ({ month, year, action }) => {
  return (
    <header className="DatePicker_header">
      <CurrentMonth month={month} year={year} />

      <ButtonNavigation
        className="DatePicker_buttonNavigation__left"
        action={action}
        value="prev"
      />

      <ButtonNavigation
        className="DatePicker_buttonNavigation__right"
        action={action}
        value="next"
      />

      <DayNames />
    </header>
  );
};
