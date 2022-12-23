import styles from '../styles/Nodes.module.css'

const Nodes = ({nodeList}) => {
    return (
        <div className={styles.container}>
            {
                nodeList.map(node => (
                    <Node node={node}/>
                ))
            }
        </div>
    )
}

export default Nodes