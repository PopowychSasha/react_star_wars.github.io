
import { useSelector } from 'react-redux';
import FavoritePageList from '../../components/FavoritePage/FavoritePageList/FavoritePageList';
import styles from  './FavoritesPage.module.css';

const FavoritesPage = ()=>{
  const storeDate = useSelector(state=>state.favoriteReducer);
  

  return(
    <>
        <FavoritePageList storeDate={storeDate}/>
    </>
  )
}

export default FavoritesPage;