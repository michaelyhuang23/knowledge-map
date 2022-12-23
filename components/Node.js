import styles from '../styles/Node.module.css'

const Node = ({node}) => {
    return (
        <g>
            <rect className={styles.rectangle} rx="3" ry="3" x={node.x - node.width/2} y={node.y - node.height/2} width={node.width} height={node.height} fill="none" stroke="black" />
        </g>
    )
}

export default Node