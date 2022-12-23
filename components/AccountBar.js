import Link from 'next/link'
import styles from '../styles/AccountBar.module.css'

const AccountBar = ({setSubject}) => {
    return (
        <div className={styles.container}>  
           <Link href="/login">Log In</Link> 
           <Link href="/signup">Sign Up</Link> 
        </div>
    )
}

export default AccountBar