import React from 'react';
import Atoms from 'components/Atoms';
import Lottie from 'lottie-react';
import {logo} from 'assets/lotties';

function HeaderLogo() {
    return (
        <Atoms.Div display="flex" gap="10px" justifyContent='center' alignItems='center'>
            <Atoms.Div display='flex' justifyContent='center' alignItems='center' width="50px" height="50px">
                <Lottie animationData={logo}/>
            </Atoms.Div>
            <Atoms.Span fontFamily='Montserrat' fontWeight="700" fontSize="24px">CALCULATOR APP</Atoms.Span>
        </Atoms.Div>
    )
}

export default HeaderLogo;