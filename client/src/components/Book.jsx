import Bookholder from "./Bookholder"
import { Link } from 'react-router-dom'

const Book = (props) => {

  let book = props.book

  return(
      <Link to={`/book/${book._id}`} >
        <div className="book">
          <p>{book.title}</p>
          <img src={book.image} alt={book.title}></img>
          <p>{book.author}</p>
        </div>
      </Link>
    
  )
}

export default Book