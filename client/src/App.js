import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import AddBookPage from "./pages/AddBookPage";
import AddChapterPage from "./pages/AddChapterPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [chapterNumber, setChapterNumber] = useState([]);

  return (
    <div className="App">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/book/:id"
            element={
              <BookPage
                chapterNumber={chapterNumber}
                setChapterNumber={setChapterNumber}
              />
            }
          />
          <Route path="/addbook" element={<AddBookPage />} />
          <Route path="/addchapter/:id" element={<AddChapterPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
