import React, { useContext }  from 'react';
import { AuthContext } from '../contexts/auth_context';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes(){
    const { signed } = useContext(AuthContext)
    return(
        (!signed)?
        (
            <AuthRoutes/>
        ):
        (
            <AppRoutes/>
        )
    );
}