import styles from '../styles/Nodes.module.css'
import Node from './Node'

const Nodes = ({nodeList}) => {
    return (
        <div className={styles.container}>
            {
                nodeList.map((node,i) => (
                    <Node key={i} node={node}/>
                ))
            }
        </div>
    )
}

export default Nodes