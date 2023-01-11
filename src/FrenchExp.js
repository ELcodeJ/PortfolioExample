import { Html } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';

export default function FrenchExp() {

    const portfolioRef = useRef();
    return <>
    {/* French html component to be referenced in the main experience file*/}
    <Html 
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1.17}
        position={ [ 0, 1.5, -1.4]}
        rotation-x={ -0.256}
        > 
        <iframe ref={ portfolioRef } src={ './portfolio-fr.html' } />
    </Html>
    </>
}