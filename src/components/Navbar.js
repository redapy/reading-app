import React, {useContext} from 'react';
import { BooksContext } from '../contexts/BooksContext';

const Navbar = () => {
    const {books} = useContext(BooksContext)
    return ( 
        <div className="nav-bar">
            <h1>Reading List</h1>
            <p>You have {books.length} books to read...</p>
        </div>
     );
}
 
export default Navbar;
