
import { NavLink } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';
import cn from 'classnames';
const PeopleNavigation = ({
    prevPage,setCounterPage,queryPage,counterPage,nextPage}
  )=>{
  
    return(
    <div className={styles.navButtonWrapper}>
        <button
        className="btn btn-light"
        disabled={prevPage == null ? 'disabled' : ''}
        onClick={() => {
          if (prevPage != null) {
            setCounterPage((counterPage) => Number(counterPage) - 1);
          }
        }}
        
      >
        <NavLink
          to={()=>queryPage != 1 ? `?page=${Number(counterPage) - 1}` : `?page=${Number(counterPage)}`}
        >
          previous
        </NavLink>
      </button>
        
      <button
      className="btn btn-light"
        disabled={nextPage == null ? 'disabled' : ''}
        onClick={() => {
          if (nextPage != null) {
            setCounterPage((counterPage) => Number(counterPage) + 1);
          }
        }}
      >
        <NavLink
          to={()=>queryPage != 9 ? `?page=${Number(counterPage) + 1}` : `?page=${Number(counterPage)}`}
        >
          next
        </NavLink>
      </button>

    </div>
  )
}

export default PeopleNavigation;