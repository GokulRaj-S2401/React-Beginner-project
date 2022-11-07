import SearchBar from './components/SearchBar'
import './App.css'

const App = () =>{
  return (
    <div>
      <header>
        <a href="/home" className="brand" > DiBo Library </a>
        <nav>
          <ul>
            <li> <a href="home" > Home </a> </li>
            <li> <a href="blog" > Blog </a> </li>
            <li> <a href="books" > Books </a> </li>
            <li> <a href="contact" > Contact </a> </li>
            <li> <a href="about" > About </a> </li>
          </ul>
        </nav>
      </header>
      <div className="container" >
        <SearchBar />
      </div>
    </div>
  )
}


export default App