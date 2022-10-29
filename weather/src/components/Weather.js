import { useEffect, useRef, useState } from 'react'
import './weather.css'
import Report  from './Report'
const Weather = () =>{

    const [location,setLocation] = useState("")
    const [latlog,setLetlog] = useState(null)

    const search = useRef()

    useEffect(()=>{
        if(location.length !==0){
            fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=1de1a9c2c67bc0b9dedaba79bb762793`)
            .then((res)=>res.json())
            .then((data)=>{
                try{
                    setLetlog({lat:data[0].lat,lon:data[0].lon})
                }
                catch{}
            })
        }
        else{
            setLetlog(null)
        }
    },[location])

    return(
        <div className='container' >
            <div className='search' >
                <ion-icon className="icon" name="search-outline"></ion-icon> 
                <input type="text" ref={search} 
                    onChange={()=>setLocation(search.current.value)} 
                    placeholder='Enter place name here...' 
                />
            </div>
            <div className='card' >
                {
                    latlog !==null ? <Report latlog={latlog} /> :''
                }
            </div>
        </div>
    )
}

export default Weather