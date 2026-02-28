import styles from './PatternBackground.module.css';

export default function PatternBackground({ src, opacity = 0.03, size = 160 }) {
    return (
        <div
            className={styles.pattern}
            style={{
                backgroundImage: `url('${src}')`,
                backgroundSize: `${size}px ${size}px`,
                opacity,
            }}
        />
    );
}
