import { Text, ContactShadows, PresentationControls, Float, useGLTF } from '@react-three/drei'
import { useState } from 'react';
import DefaultExp from './DefaultExp';
import FrenchExp from './FrenchExp';

export default function Experience()
{
    // variable for the current model
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
    // strore react useState for component conditionnal rendering
    const [frToggle, setFrIsToggled] = useState(false);

    return <>
    <color args={ [ '#5b6969' ] } attach="background" />
    
    {/* presentation control in order to manipulate the model */}
        <PresentationControls 
            global
            rotation={ [ 0.13,0.1, 0]}
            polar={ [-0.4,0.2] }
            azimuth={ [-1, 0.75] }
            config={ { mass:2, tension:400 } }
            snap={ { mass:4, tension: 400 } }
        >
            {/* float is the moving effect of the model and text  control the movement amplitude*/}
            <Float rotationIntensity={ 0.4 } >
                {/* controle the screnn light reflexion on the model */}
                <rectAreaLight
                    width={ 3 }
                    height={ 1.25 }
                    intensity={ 45 }
                    color={ '#2b2b65'} 
                    rotation={ [0.1, Math.PI, 0] }
                    position={ [ 0, 0.55, -1.15 ] }
                />
                {/* model loaded */}
                <primitive 
                    object={ computer.scene }
                    position-y={-1.2}
                >
                    {/* conditionnal rendering of the html inside the laptop  */}
                {frToggle ? <FrenchExp /> : <DefaultExp />}
                </primitive>
                {/* the text on screen including the click function */}
                <Text
                    font='./Azonix.otf'
                    fontSize={ 0.15 }
                    position={ [ 2.5, 1.75, 0 ]}
                    rotation-y={ -1.25 }
                    maxWidth={0.5}
                    textAlign= "center"
                    padding={ [0.2, 0.3]}
                    backgroundColor={ '#cdcd89' }
                    onClick={ ()=> setFrIsToggled(!frToggle) }
                    visible={true}
                > 
                   Toggle French
                </Text>
                <Text
                    font='./Azonix.otf'
                    fontSize={ 0.75 }
                    position={ [ 2.5, 0.75, 0 ]}
                    rotation-y={ -1.25 }
                    maxWidth={2}
                    textAlign= "center"
                    color={ '#c1c1c1'}
                > Eloic Lafine
                </Text>
            </Float>
        </PresentationControls>
        
        <ContactShadows 
            position-y={-1.4} 
            opacity={ 0.4}
            scale={ 5 }
            blur={ 2.4 }
        />
  
    </>
}