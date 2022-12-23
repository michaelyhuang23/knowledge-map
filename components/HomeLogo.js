import styles from '../styles/HomeLogo.module.css'

const HomeLogo = ({title}) => {
    return (
        <div className={styles.container}>  
            <img className={styles.logo} src="/homelogo.png"/>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}

export default HomeLogo