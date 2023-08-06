import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PrevPage from "../components/PrevPage";
var parse = require("html-react-parser");

const BookPage = () => {
  let { id } = useParams();

  const [chapter, setChapter] = useState([]);
  let [chapterNumber, setChapterNumber] = useState([]);
  const [chapterContent, setChapterContent] = useState([]);
  const [book, setBook] = useState([]);

  const startFunction = () => {
    setChapterNumber(1);
    handleBook();
  };

  const handleBook = async () => {
    const bookName = await axios.get(
      `https://libratica-backend.onrender.com/api/books/${id}`
    );
    setBook(bookName.data.book);
    handleChapter(bookName.data.book.storage_title);
  };

  const handleChapter = async (title) => {
    const chapter = await axios.get(
      `https://libratica-backend.onrender.com/api/chapter/${title}/${chapterNumber}`
    );

    // setChapter(chapter.data);
    const preprocessedText = chapter.data.chapter[0].text;
    let processedText = preprocessedText.replaceAll("\\", "");
    setChapterContent(processedText);
  };

  const nextChapter = () => {
    setChapterNumber(chapterNumber++);
    console.log(chapterNumber);
    handleBook();
  };

  const previousChapter = () => {
    setChapterNumber(chapterNumber - 1);
    console.log(chapterNumber);
    handleBook();
  };

  useEffect(() => {
    startFunction();
  }, []);

  return (
    <div>
      <div
        className="bookContent"
        dangerouslySetInnerHTML={{ __html: chapterContent }}
      ></div>

      <div className="whitetext" onClick={nextChapter}>
        Next Chapter
      </div>
      <div className="whitetext" onClick={previousChapter}>
        Previous Chapter
      </div>
      <div>
        <Link to={`/addchapter/${id}`}>Add Chapter</Link>
      </div>
    </div>
  );
};

export default BookPage;
