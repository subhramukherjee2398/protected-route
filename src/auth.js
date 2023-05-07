
import {createContext, useContext} from  'react'

/**store */
const initialState = {auth : false}

const authContext = createContext(initialState);

/**Auth Provider */
export function AuthProvider({children}){
    return <authContext.Provider value={initialState}>{children}</authContext.Provider>
}

/**Own Auth Consumer Hook */

export default function AuthConsumer(){
    return useContext(authContext)
}