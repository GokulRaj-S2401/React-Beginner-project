import SearchBar from './components/SearchBar'
import './App.css'
import { useEffect, useState } from 'react'

const App = () =>{

  const [searchTerm,setSearchTerm] = useState("")
  const [bookList,setBookList] = useState()

  useEffect(()=>{
      if(searchTerm.length >1){
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then((res)=>{
          return res.json()
        })
        .then((data)=>{
          setBookList(data)
        })
      }
  },[searchTerm])

  const update = (arg) =>{
      setSearchTerm(arg)
  }

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
        <SearchBar update={update} />
      </div>
    </div>
  )
}


export default App