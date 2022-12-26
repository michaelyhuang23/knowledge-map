import styles from '../styles/Map.module.css'
import Nodes from './Nodes';
import Edges from './Edges';
import { useState } from 'react';

const Map = ({x,setX,y,setY,width,height,zoom,setZoom}) => {

    const elements = [
        {
            title : "1D Kinematics", // title must be unique
            description : "Study of the motion of an object in 1 dimension",
            resources : [],
            parents : [],
            dependents : ["2D Kinematics", "1D Newton's 3rd Law"],
            position : {
                x : 0,
                y : 0,
                width : 100,
                height : 20
            }
        },
        {
            title : "2D Kinematics", 
            description : "Study of the motion of an object in 2 dimension",
            resources : [],
            parents : [],
            dependents : ["3D Kinematics", "Circular Motion"],
            position : {
                x : 150,
                y : 0,
                width : 100,
                height : 20
            }
        },
        {
            title : "3D Kinematics", 
            description : "Study of the motion of an object in 3 dimension",
            resources : [],
            parents : [],
            dependents : ["Newton's 3rd Law"],
            position : {
                x : 300,
                y : 0,
                width : 100,
                height : 20
            }
        },
        {
            title : "Circular Motion", 
            description : "Motion of rotation and the centripetal force",
            resources : [],
            parents : [],
            dependents : [],
            position : {
                x : 450,
                y : 0,
                width : 100,
                height : 20
            }
        },
        {
            title : "1D Newton's 3rd Law", 
            description : "F=ma in 1 dimension",
            resources : [],
            parents : [],
            dependents : ["Newton's 3rd Law"],
            position : {
                x : 150,
                y : 70,
                width : 100,
                height : 20
            }
        },
        {
            title : "Newton's 3rd Law", 
            description : "F=ma in 3 dimensions",
            resources : [],
            parents : [],
            dependents : [],
            position : {
                x : 300,
                y : 70,
                width : 100,
                height : 20
            }
        }
    ];

    let zwidth = width / zoom;
    let zheight = height / zoom;
    const [dragging, setDragging] = useState(false);
    const [dragX, setDragX] = useState(0);
    const [dragY, setDragY] = useState(0);
    const mouseDown = (e) => {
        setDragging(true);
        setDragX(e.clientX);
        setDragY(e.clientY);
    }
    const mouseMove = (e) => {
        if(!dragging) return;
        const dx = e.clientX - dragX;
        const dy = e.clientY - dragY;
        setX(x - dx / zoom);
        setY(y - dy / zoom);
    }
    const mouseUp = () => {
        setDragging(false);
        setDragX(0);
        setDragY(0);
    }
    const mouseScroll = (e) => {
        e.preventDefault();
        if(dragging) return;
        const delta = e.deltaY * -0.01;
        setZoom(zoom + delta);
    }
    return (
        <svg viewBox={`${x} ${y} ${zwidth} ${zheight}`}
            onMouseDown={(e) => mouseDown(e)}
            onMouseMove={(e) => mouseMove(e)}
            onMouseUp={() => mouseUp()}
            onWheel={(e) => mouseScroll(e)}>
                <Edges nodeList={elements} />
                <Nodes nodeList={elements} /> 
        </svg>
    )
}

export default Map