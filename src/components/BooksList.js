import React, {useContext} from 'react';
import { BooksContext } from '../contexts/BooksContext';
import BookDetails from './BookDetails';

const BooksList = () => {

    const {books} = useContext(BooksContext);

    return books.length ? ( 
       <div className="book-list">
           <ul>
              {books.map(book => 
                ( <BookDetails  book={book} key={book.id} />)
              )}
           </ul>
       </div>
     ) : (
         <div className="empty">You have no books left, go find more !! </div>
     )
}
 
export default BooksList;