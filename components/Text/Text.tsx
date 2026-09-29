import type { JSX } from 'react/jsx-runtime';
import styles from './Text.module.css'
import type { ComponentProps } from 'react';
import classNames from 'classnames';

export interface TextProps extends ComponentProps<'p'> {
    text: string
    size?: 's' | 'm' | 'l'
}

const Text = ({
    text,
    size = 's',
    className,
    ...rest
}: TextProps): JSX.Element => {
    return (
        <p className={classNames(styles.text, styles[size], className)} {...rest}>
            {text}
        </p>
    )
}

export default Text;
