import './App.css'
import Weather from './components/Weather'
const App = () =>{
  return(
    <div>
      <header>
          <a href="/" className='brand' > 
            <ion-icon className="icon" name="sunny-outline"></ion-icon> 
            <span> Vealicham app </span> 
          </a>
          <nav>
            <ul>
              <li> <a href="/home" > Home </a> </li>
              <li> <a href="/contact" > Contact </a> </li>
              <li> <a href="/about" > About </a> </li>
            </ul>
          </nav>
      </header>
      <Weather />
    </div>
  )
}

export default App