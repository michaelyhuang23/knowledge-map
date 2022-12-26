import styles from '../styles/Edge.module.css'

const Edge = ({startNode, endNode}) => {
    return (
        <g>
            <line x1={startNode.position.x} y1={startNode.position.y} x2={endNode.position.x} y2={endNode.position.y} stroke="#000" strokeWidth="8" markerEnd="url(#head)" />
        </g>
    )
}

export default Edge