import axios from "axios";
import { useState } from "react";

const AddBookPage = () => {
  const [newForm, setNewForm] = useState({
    title: "",
    storage_title: "",
    author: "",
    image: "",
  });

  const [newChapter, setNewChapter] = useState({
    text: ``,
    chapter_number: 1,
    book_name: ``,
  });

  const [storageName, setStorageName] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/book", newForm)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .post("http://localhost:3001/api/chapter", newChapter)
      .then((response) => {
        console.log(response);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "title") {
      console.log("it's recognizing title");
      let storageName = value.replaceAll(" ", "");
      setStorageName(storageName);
      console.log(storageName);
      setNewChapter((prevState) => ({
        ...prevState,
        book_name: storageName,
      }));

      setNewForm((prevState) => ({
        ...prevState,
        [name]: value,
        storage_title: storageName,
      }));
    } else {
      if (name == "text") {
        console.log("IT WORKS");
        let cText1 = value.replaceAll(`“`, `\“`);
        let cText2 = cText1.replaceAll(`”`, `\”`);
        console.log(cText2);
        setNewChapter((prevState) => ({ ...prevState, [name]: cText2 }));
      } else {
        setNewForm((prevState) => ({ ...prevState, [name]: value }));
      }
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} class="form">
          <input
            type="text"
            value={newForm.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
          ></input>
          {/* <input
            type="text"
            value={newForm.storage_title}
            onChange={handleChange}
            name="storage_title"
            placeholder="StorageTitle"
          ></input> */}
          <input
            type="text"
            value={newForm.author}
            onChange={handleChange}
            name="author"
            placeholder="Author"
          ></input>
          <input
            type="text"
            value={newForm.image}
            onChange={handleChange}
            name="image"
            placeholder="Image"
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

export default AddBookPage;
