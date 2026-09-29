import type { JSX } from 'react/jsx-runtime';
import styles from './Button.module.css';
import type { ComponentProps } from 'react';
import classNames from 'classnames';

export interface ButtonProps extends ComponentProps<'button'> {
    color?: 'accent'
}

const Button = ({ color = 'accent', children, className, ...rest }: ButtonProps): JSX.Element => {
    return (
        <button className={classNames(className, styles.button, color === 'accent' && styles.color_primary)}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button;
