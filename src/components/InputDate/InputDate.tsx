import './styles.css';

import { FC, InputHTMLAttributes } from 'react';

type TInputDate = InputHTMLAttributes<HTMLInputElement>;

export const InputDate: FC<TInputDate> = ({name, value, ...rest}) => {
    return (
        <input
            name={name}
            type="text"
            className="InputDate"
            value={value}
            {...rest}
        />
    );
}