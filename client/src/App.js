import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
