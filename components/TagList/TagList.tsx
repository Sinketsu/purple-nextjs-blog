import type { JSX } from 'react/jsx-runtime'
import styles from './TagList.module.css'
import Text from '../Text/Text'
import type { ComponentProps } from 'react'
import classNames from 'classnames'

interface TagListProps extends ComponentProps<'div'> {
    values: string[] // assume that values are unique
}

const TagList = ({
    values,
    className,
    ...rest
}: TagListProps): JSX.Element => {
    return (
        <div className={classNames(styles.container, className)} {...rest}>
            {values.map(v => (<Text key={v} text={v} />))}
        </div>
    )
}

export default TagList
