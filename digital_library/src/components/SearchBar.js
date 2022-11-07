import { useRef } from 'react'
import './SearchBar.css'

const SearchBar = (props) =>{
    const search = useRef()
    return (
        <div className="searchBar" >
           <div className='search' >
                <ion-icon 
                style={{fontSize:'18px',position:'absolute',left:'15px'}}  
                name="search-outline"></ion-icon> 
                <input 
                type="text" 
                placeholder='Find your books'
                ref={search}
                onChange={()=>props.update(search.current.value)}
                />
           </div>
        </div>
    )
}

export default SearchBar