import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}
// Craete Context
export const GlobalContext =createContext(initialState);

//Provider Component
export const GlobalProvider =({ Children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {Children}
        </GlobalContext.Provider>);
}

