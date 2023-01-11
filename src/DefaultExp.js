import { Html } from '@react-three/drei';
import { useRef } from 'react';

export default function DefaultExp() {

    const portfolioRef = useRef();
    return <>
    {/* english html component to be referenced in the main experience file*/}
    <Html 
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1.17}
        position={ [ 0, 1.5, -1.4]}
        rotation-x={ -0.256}
        > 
        <iframe ref={ portfolioRef } src={ './portfolio.html' } />
    </Html>
    </>
}