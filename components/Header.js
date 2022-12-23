import styles from '../styles/Header.module.css'
import HomeLogo from './HomeLogo'
import SubjectBar from './SubjectBar'
import AccountBar from './AccountBar'

const Header = ({subject, setSubject}) => {
    return (
        <div className={styles.container}>
            <HomeLogo />
            <SubjectBar subject={subject} setSubject={setSubject}/>
            <AccountBar />
        </div>
    )
}

export default Header