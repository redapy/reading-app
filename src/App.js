import BooksList from "./components/BooksList";
import Navbar from "./components/Navbar";
import NewBook from "./components/NewBook";
import BooksContextProvider from "./contexts/BooksContext";


function App() {
  return (
    <div className="App">
    <BooksContextProvider>
      <Navbar />
      <BooksList />
      <NewBook />
    </BooksContextProvider>
    </div>
  );
}

export default App;
