import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AddChapterPage = () => {
  let { id } = useParams();

  const [chaptersData, setNewChaptersData] = useState([]);

  const [newChapter, setNewChapter] = useState({
    text: ``,
    chapter_number: ``,
    book_name: ``,
  });

  // let chapterName = "";

  // const handleBook = async () => {
  //   const bookName = await axios.get(`http://localhost:3001/api/books/${id}`);

  //   handleChapterName(bookName.data.book.storage_title);
  // };

  // const handleChapterName = (title) => {
  //   console.log(title);
  //   const imLiterallyCrying = title;

  //   setTimeout(() => {
  //     setNewChapter((prevState) => ({
  //       ...prevState,
  //       book_name: imLiterallyCrying,
  //     }));
  //     console.log(newChapter);
  //   }, 1000);
  //   // countChapters(title);
  // };

  // const countChapters = async (title) => {
  //   const chapters = await axios.get(
  //     `http://localhost:3001/api/chapterget/${title}`
  //   );
  //   numberChapters(chapters);
  //   // setNewChaptersData(chapters.data.chapters.length);
  // };

  // const numberChapters = (chapters) => {
  //   let chapterNumberee = chapters.data.chapters;

  //   setNewChaptersData(chapterNumberee.length + 1);

  //   setNewChapter((prevState) => ({
  //     ...prevState,
  //     chapter_number: chaptersData,
  //   }));
  //   console.log(newChapter);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewChapter((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://libratica-backend.onrender.com/api/chapter", newChapter)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {
  //   handleBook();
  // }, []);

  return (
    <div>
      <div className="whitetext">
        <p>New Chapter</p>
        <form onSubmit={handleSubmit} class="form">
          <input
            type="text"
            value={newChapter.book_name}
            onChange={handleChange}
            name="book_name"
            placeholder="BookName"
          ></input>
          <input
            type="integer"
            value={newChapter.chapter_number}
            onChange={handleChange}
            name="chapter_number"
            placeholder="Chapter Number"
          ></input>
          <input
            type="text"
            value={newChapter.text}
            onChange={handleChange}
            name="text"
            placeholder="Chapter Text"
          ></input>
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddChapterPage;
