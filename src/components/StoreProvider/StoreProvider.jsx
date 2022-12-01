import React, { createContext } from 'react';

export const StoreContext = createContext({});

const StoreProvider = ({store, children}) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;