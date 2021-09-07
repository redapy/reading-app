import React, {createContext, useEffect, useReducer} from 'react';
import bookReducer from '../reducers/bookReducer';


export const BooksContext = createContext();

const BooksContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer,[], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    },[books])

    return ( 
        <BooksContext.Provider value= {{books, dispatch}}>
            {props.children}
        </BooksContext.Provider>
     );
}
 
export default BooksContextProvider;
