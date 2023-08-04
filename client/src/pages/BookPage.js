import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
var parse = require("html-react-parser");

const BookPage = () => {
  let { id } = useParams();

  let chapterNumber = 1;

  const [chapter, setChapter] = useState([]);
  const [chapterContent, setChapterContent] = useState([]);
  const [book, setBook] = useState([]);

  const handleBook = async () => {
    const bookName = await axios.get(`http://localhost:3001/api/books/${id}`);
    setBook(bookName.data.book);
    handleChapter(bookName.data.book.storage_title);
  };

  const handleChapter = async (title) => {
    const chapter = await axios.get(
      `http://localhost:3001/api/chapter/${title}/${chapterNumber}`
    );
    console.log(chapter.data.chapter[0].book_name);
    setChapter(chapter.data);
    const preprocessedText = chapter.data.chapter[0].text;
    let processedText = preprocessedText.replaceAll("\\", "");
    setChapterContent(processedText);
  };

  useEffect(() => {
    handleBook();
  }, []);
  return (
    <div
      className="bookContent"
      dangerouslySetInnerHTML={{ __html: chapterContent }}
    ></div>
  );
};

export default BookPage;
