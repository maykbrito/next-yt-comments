import styles from '../styles/Loader.module.css';

export default function Loader({ loading }) {
    const showComponent = loading === true ? { 
        display: "flex",
        flexDirection: "column",
        alignItems: "center" 
    } : { display: "none" }

    return (
        <div style={ showComponent }>
        <div className={styles.loading} >
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
        </div>
        <p>Fetching... it may take a while</p>
        </div>
    )
}