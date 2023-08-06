import Book from "./Book"
import { useEffect, useState } from "react"
import axios from "axios"

const Bookholder = () => {

  const [bookCollection, setBookCollection] = useState([])

  const getBooks = async () => {
    const props = await axios.get('https://libratica-backend.onrender.com/api/')
    console.log(props)
    setBookCollection(props.data.books)
  }

  useEffect(()=> {
    getBooks()
  }, [])

  return(
    <div className="bookholder">
      {bookCollection.map((book) => (
        <div key={book._id}> 
          <Book book={book}/>
        </div>
      ))}
    </div>
  )
}

export default Bookholder