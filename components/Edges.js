import styles from '../styles/Edges.module.css'
import Edge from './Edge';

const Edges = ({nodeList}) => {
    const name2idx = new Map();
    nodeList.forEach((node, i) => {
        name2idx.set(node.title, i);
    });
    let edges = [];
    nodeList.forEach((node, i) => {
        node.dependents.forEach((child) => {
            const k = name2idx.get(child);
            edges.push({
                start: i,
                end: k
            })
        });
    });
    return (
        <>
        <defs>
            <marker 
                id='head' 
                orient="auto" 
                markerWidth='3' 
                markerHeight='4' 
                refX='0.1' 
                refY='2'
                >
                <path d='M0,0 V4 L2,2 Z' fill="black" />
            </marker>
        </defs>
        <div className={styles.container}>
            {
                edges.map((edge, i) => (
                    <Edge key={i} startNode={nodeList[edge.start]} endNode={nodeList[edge.end]}/>
                ))
            }
        </div>
        </>
    )
}

export default Edges