import type { JSX } from 'react/jsx-runtime'
import styles from './LikeButton.module.css'
import Text from '@/components/Text/Text'
import LikeIcon from './like.svg'
import classNames from 'classnames'
import type { ComponentProps } from 'react'

interface LikeButtonProps extends ComponentProps<'div'> {
    current?: number
    pressed?: boolean
    onClick?: () => void
}

const LikeButton = ({
    current = 0,
    pressed = false,
    onClick
}: LikeButtonProps): JSX.Element => {
    return (
        <div className={styles.container} onClick={onClick}>
            <Text text={current.toString()} />
            <LikeIcon role='img' aria-label='Поставить лайк' className={classNames(styles.image, pressed && styles.pressed)} />
        </div>
    )
}

export default LikeButton
