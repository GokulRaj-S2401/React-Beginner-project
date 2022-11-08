const Card = (props) =>{
   try{
    return(
        <div className="card" >
            <div className="head" >
                {console.log(props)}
                <h1> {props.volumeInfo.imageLinks.thumbnail}</h1>
                <img src={`${props.volumeInfo.imageLinks.thumbnail}`} alt="book image"  />
            </div> 
        </div>
    )
   }
   catch{}
}

export default Card