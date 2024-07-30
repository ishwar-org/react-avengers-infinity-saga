import styles from './index.module.css';

export type ColorProps = {
    colors: string[];
}

const ColorPlatte = ({ colors }: ColorProps) => {
    return (
        <div className={styles.colorContainer}>
            {colors.map((color: string) => (
                <div className={styles.colorBox} style={{ backgroundColor: color }}>
                    {color}
                </div>
            ))}
        </div>
    );
};

export default ColorPlatte;