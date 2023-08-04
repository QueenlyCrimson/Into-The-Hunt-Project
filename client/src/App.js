import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import AddBookPage from "./pages/AddBookPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/addbook" element={<AddBookPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
