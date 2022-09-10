import React, {useState} from 'react';
import styles from './Card.module.css';

type cardProps = {
    name: string
    nameEng: string
    duration: number
    img: string
}

const Card: React.FC<cardProps> = ({ name, duration, img, nameEng }) => {
    const [isLiked, setIsLiked] = useState(false);

    const durationConverter = (duration: number) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;

        const time = `${hours}ч ${minutes}м`

        return time
    }

    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <p className={styles.movieName}>{name}</p>
                <p className={styles.movieLength}>{durationConverter(duration)}</p>
                <div className={isLiked ? `${styles.like} ${styles.likeActive}` : `${styles.like}`} onClick={() => setIsLiked(!isLiked)}/>
            </div>
            <iframe src={`${img}`}
                    title={nameEng}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen className={styles.image} />
        </div>
    );
};

export default Card;