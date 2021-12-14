import React, {createContext, useContext, useReducer} from 'react';

// Prepares the data layer. we are creating the context.
export const StateContext = createContext();

// Wraps our app and provide the data layer to every component in the app
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


// To pull information from the data layer
export const useStateValue = () => useContext(StateContext);