import styles from '../styles/SubjectBar.module.css'

const SubjectBar = ({subject, setSubject}) => {
    const subjects = ["Math", "Computer Science", "Physics", "Chemistry", "Biology"]
    return (
        <div className={styles.container}>  
            {subjects.map(item => (
                <button className={styles.item + (item===subject ? "" : " "+styles.selected)} onClick={() => setSubject(item)}>
                    {item}
                </button>
            ))}
        </div>
    )
}

export default SubjectBar