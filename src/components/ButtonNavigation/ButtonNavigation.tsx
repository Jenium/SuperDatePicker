import './styles.css';

import { FC } from 'react';
import clsx from 'clsx';

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
        >
        </button>
    );
}