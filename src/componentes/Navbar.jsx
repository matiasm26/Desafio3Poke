import { NavLink } from "react-router-dom"  
import pokeIcon from '../assets/imgs/pokeball.png'

export default function NavBar() 

{ 

return (

<nav>
      <span>
          <img src={pokeIcon} alt="pokeball" />
      </span>
      <ul>
        <li>
            <NavLink className={({isActive})=> isActive? 'active' : undefined } to="/"> Home </NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=> isActive? 'active' : undefined } to="/pokemon"> Pokemones </NavLink>
        </li>
      </ul>
    </nav>
    );
  }
