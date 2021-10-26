
import { Link } from 'react-router-dom';
import styles from  './FavoritePageList.module.css';


const FavoritePageList = ({storeDate})=>{
  
  return(
    <>
        <h1 className="header__text">FavoritesPage</h1>
            <ul className={styles.wrapper}>
                {storeDate && storeDate.map(({id,name,img})=>{
                    return (
                        <Link to={`/people/${id}`}>
                            <li className={styles.favoriteItem}>
                                <p className={styles.favoriteHeader}>{name}</p>
                                <img src={img} width="200px"/>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        
    </>
  )
}

export default FavoritePageList;