import type { JSX } from 'react/jsx-runtime';
import styles from './Card.module.css';
import Button from '@/components/Button/Button';
import Title from '@/components/Title/Title';
import Text from '@/components/Text/Text';
import TagList from '../TagList/TagList';
import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import type { ComponentProps } from 'react';
import classNames from 'classnames';
import LikeButton from '../LikeButton/LikeButton';

export interface CardProps extends ComponentProps<'div'> {
    title: string
    image: string | StaticImport
    imageAlt: string
    text: string
    duration?: string
    tags?: string[]
    likes?: number
    liked?: boolean
    onClick?: () => void
}

const Card = ({
    title,
    text,
    image,
    imageAlt,
    duration,
    tags = [],
    onClick,
    likes,
    liked,
    className,
    ...rest
}: CardProps): JSX.Element => {
    const cardTags = tags.length < 3 ? tags : [...tags.slice(0, 2), `+${tags.length - 2}`]

    return (
        <div className={classNames(styles.card, className)} {...rest}>
            <Image src={image} alt={imageAlt} loading='eager' className={styles.image} />
            <div className={styles.body}>
                <div className={styles.header}>
                    <TagList values={cardTags} />
                    <LikeButton pressed={liked} current={likes} />
                </div>
                <Title text={title} />
                <Text size='m' text={text} />
            </div>
            <div className={styles.footer}>
                {duration && <Text text={duration} />}
                <Button type='button' className={styles.button} onClick={onClick}>Читать</Button>
            </div>
        </div>
    );
};

export default Card;
