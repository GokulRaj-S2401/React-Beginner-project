import { useEffect, useState } from "react"
// import img from '
const Report = (props) =>{

    const [data,setData] = useState(null)

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.latlog.lat}&lon=${props.latlog.lon}&units=metric&appid=1de1a9c2c67bc0b9dedaba79bb762793`)
        .then((res)=>res.json())
        .then((data)=>{
                setData(data)
        })
    },[props.latlog])

    if(data !=null){
        return(
            <div className="cardContainer" >
                <div className="header" >
                    <h1> {data.name} - {data.sys.country} </h1>
                </div>
                <div className="content" >
                    <div className="left">
                        <div>
                            <img  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather" />
                            <p>{data.main.temp}<sup><sup>o</sup>C</sup> </p>
                        </div>
                        <div>
                            <p>{data.weather[0].description}</p>
                        </div>
                    </div>
                    <div className="right" >
                        <p>latitude    -  {data.coord.lat.toFixed(4)}   </p>
                        <p>longitude   -  {data.coord.lon.toFixed(4)}   </p>
                        <p className="hwind" >Wind</p>
                        <p>  speed - {(data.wind.speed *3.61).toFixed(4)} km/h  </p>
                        <p>  gust -  {(data.wind.gust* 3.61).toFixed(4)} km/h  </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Report