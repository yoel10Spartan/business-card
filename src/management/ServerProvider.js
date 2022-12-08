import React, { createContext, useState } from 'react'
import ServerConnection from '../utils/ServerConnection';

const ServerContext = createContext();

const lenguage = {
    'ES': 'spanish',
    'EN': 'english'
}

const ServerProvider = ({ children }) => {

    const serverConnection = new ServerConnection();
    const [selectLenguage, setSelectLenguage] = useState('spanish');

    const handleLenguage = (leng) => {
        setSelectLenguage(lenguage[leng])
    }

    return (
        <ServerContext.Provider
            value={{
                serverConnection,
                selectLenguage,
                handleLenguage,
                lenguage
            }}
        >
            { children }
        </ServerContext.Provider>
    )
}

export {
    ServerContext,
    ServerProvider
}