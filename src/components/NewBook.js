import React, { useState, useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const NewBook = () => {
    const {dispatch} = useContext(BooksContext);
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            'type': 'ADD_BOOK',
            'book': {
                title,
                author
            }
        });
        setTitle('');
        setAuthor('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="Title..."
             onChange={e => setTitle(e.target.value)} required/>
            <input type="text" value={author} placeholder="Author..."
             onChange={e => setAuthor(e.target.value)} required/>
            <input type="submit" value="add book" />
        </form>
     );
}
 
export default NewBook;

