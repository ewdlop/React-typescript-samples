import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

interface Props {
    position: number[]
}

const Box: React.FC<Props> = ({ position }) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<THREE.Mesh>(null)

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(
        () => {
            if(mesh && mesh.current)
            {
                mesh.current.rotation.x += 0.01;
                mesh.current.rotation.y += 0.01;
            }
        }
    );

    return (
        
        <mesh
            {...position}
            ref={mesh}
            scale={active ? [2, 2, 2] : [1, 1, 1]}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default Box;