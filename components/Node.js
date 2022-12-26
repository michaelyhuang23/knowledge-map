import styles from '../styles/Node.module.css'

const Node = ({node}) => {
    const position = node.position;
    return (
        <g>
            <rect className={styles.rectangle} rx="3" ry="3" x={position.x - position.width/2} y={position.y - position.height/2} width={position.width} height={position.height} fill="none" stroke="black" />
            <text className={styles.text} x={position.x} y={position.y}>{node.title}</text>
        </g>
    )
}

export default Node