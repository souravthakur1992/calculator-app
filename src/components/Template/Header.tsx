import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';

function Header() {

    return (
        <Atoms.Div display="flex" justifyContent='space-between' alignItems='center' width="calc(100% - 24px)"
                   padding="0 12px" height="76px" borderBottom="1px solid #e7e7e7">
            <Molecules.HeaderLogo/>
        </Atoms.Div>
    )
}

export default Header;