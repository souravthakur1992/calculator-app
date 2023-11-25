import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, NotFound} from 'components/Pages';

function Router() {

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Router