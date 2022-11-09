import './Card.css'
const Card = (props) =>{
   try{
    return(
        <div className="card" >
            <div className="head" > 
                <a className='absbtn' target={1} href={props.item.volumeInfo.previewLink} > Read </a>
                <img src={`${props.item.volumeInfo.imageLinks.thumbnail}`} alt="book"  />
            </div> 
            <div className='content' >
                <h3> {props.item.volumeInfo.title}</h3>
            </div>
        </div>
    )
   }
   catch{}
}

export default Card