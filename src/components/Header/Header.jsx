
import { NavLink } from 'react-router-dom';
import styles from  './Header.module.css';
import img from './img/favorite.png';

const Header = ()=>{
  return(
    <div className={styles.container}>
        <ul className={styles.list__container}>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/people/?page=1">People</NavLink></li>
            <li><NavLink to="/not-found" exact>NotFound</NavLink></li>
            <li style={{marginLeft:'700px'}}><NavLink to="/favorites"><img src={img} width="75px"/></NavLink></li>
        </ul>
    </div>
  )
}

export default Header;