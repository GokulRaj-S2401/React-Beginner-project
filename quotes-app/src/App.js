import { useEffect, useRef, useState } from 'react';
import './App.css'
import data from './category.json'

function App(){

  const [category,setCategory] = useState("alone");
  const selectCategory = useRef()
  const [currentQuote,setCurrentQuote] = useState([])

 

  const [color,setColor] = useState()

  

  useEffect(()=>{
    const backgroundColor = ['#99B898','#FECEAB','#FF847C','#E84A5F','#2A363B','#F8B195','#F67280','#C06C84','#6C5B7B','#355C7D']
    const randomColor = () =>{
      const value = Math.floor( Math.random()*backgroundColor.length )
      setColor(backgroundColor[value])
      console.log(value);
    }

    fetch("https://api.api-ninjas.com/v1/quotes?category="+category,{
      method:'GET',
      headers:{
        'X-Api-Key':'Mj1D+Ry6JKUmxsnNjK68qA==LyYoL1rjoxyqehcP'
      },
      contentType:'application/json'
    }).then((res)=>res.json())
    .then((data)=>setCurrentQuote(data))
    .then(()=>randomColor())
  },[category])

  return (
    <div className="container" style={{backgroundColor:color}} >
        <div className='card' >
         <div align="right"  className='header' >
            <div align="center" >
                <p> Quotes Category </p>
              <select ref={selectCategory} onChange={()=>setCategory(selectCategory.current.value)} >
                {
                  data.items.map((val,indx)=><option key={indx} value={val} >{val}</option>)
                }
                </select>
            </div>
         </div>
         <div className='cont' >
           {
            currentQuote.length !==0 ? <><h2 className='quote' >{currentQuote[0].quote}</h2> <p className='author' > - {currentQuote[0].author}</p> </>: <h3>loading</h3>
           }
         </div>
        </div>
    </div>
  )
}

export default App;
