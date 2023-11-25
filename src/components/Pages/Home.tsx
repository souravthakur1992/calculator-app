import React from 'react';
import Atoms from 'components/Atoms';
import Template from 'components/Template';
import Organisms from 'components/Organisms';

function Home(){
    return(
        <Atoms.Div display='flex' flexDirection='column'>
            <Template.Header />
            <Atoms.Div display='flex' padding="32px" justifyContent='center' alignItems='center'>
                <Organisms.Home />
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default Home;