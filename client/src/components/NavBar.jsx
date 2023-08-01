import { Link } from "react-router-dom"

const NavBar = () => {

  return(
  
    <header className="nav">
      <nav>
        <div className="navitemholder">
          <h1>Libratica</h1>
          <div className="navitemholder2">
            <h3 className="navitem"><Link to="/" >Home</Link></h3>
            <h3 className="navitem"><Link to="/addbook" >Add Story</Link></h3>
            <h3 className="navitem"><Link to="/" >About</Link></h3>
          </div>
        </div>
      </nav>
    </header>
  
  )
}

export default NavBar