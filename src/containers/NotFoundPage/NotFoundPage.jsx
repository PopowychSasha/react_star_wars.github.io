
import styles from  './NotFoundPage.module.css';
import img from './img/not-found.png';
import { useLocation } from 'react-router';

const NotFoundPage = ()=>{
  let location = useLocation();
  
  return(
    <>
        <img className={styles.img} src={img} alt="Not Found"/>
        <p className={styles.text}>No match for {location.pathname}</p>
    </>
  )
}

export default NotFoundPage;