import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import { notFoundAnimation } from 'assets/lotties';
import Atoms from 'components/Atoms';

function NotFound(){
    const navigate = useNavigate();
    return(
        <Atoms.Div display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Atoms.Div display="flex" justifyContent='center' width="100%">
                <Atoms.Span fontSize="30px" fontWeight="700">404 Error, Not Found</Atoms.Span>
            </Atoms.Div>
            <Atoms.Div width="600px" height="400px" marginTop="30px">
                <Lottie animationData={notFoundAnimation} />
            </Atoms.Div>
            <Atoms.Div display='flex' flexDirection='column' gap="30px" alignItems='center' width="100%">
                <Atoms.Span>The page you requested has disappeared or you have taken the wrong route.</Atoms.Span>
                <Atoms.Button onClick={() => {navigate('/')}} width="200px" height="40px" borderRadius="12px" border="2px solid black">Go To Homepage</Atoms.Button>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default NotFound;