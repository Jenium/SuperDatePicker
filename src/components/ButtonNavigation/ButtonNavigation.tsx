import './styles.css';

import clsx from 'clsx';
import { FC } from 'react';

interface IButtonNavigation {
  value: string;
  action: (action: string) => void;
  className?: string;
}

export const ButtonNavigation: FC<IButtonNavigation> = ({ action, className, value }) => {
  return (
    <button
      className={clsx('DatePicker_buttonNavigation', className)}
      onClick={() => action(value)}
    ></button>
  );
};
