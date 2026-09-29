import type { JSX } from 'react/jsx-runtime';
import styles from './Title.module.css'
import type { ComponentProps } from 'react';
import classNames from 'classnames';

export interface TitleProps extends ComponentProps<'h1'> {
    text: string
}

const Title = ({
    text,
    className,
    ...rest
}: TitleProps): JSX.Element => {
    return (
        <h1 className={classNames(styles.title, className)} {...rest}>
            {text}
        </h1>
    )
}

export default Title;
