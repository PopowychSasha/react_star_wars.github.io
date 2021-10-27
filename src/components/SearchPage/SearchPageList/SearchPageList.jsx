
import styles from  './SearchPageList.module.css';
import { getPeopleImage} from '../../../services/getPeopleData';
import { Link } from 'react-router-dom';
const SearchPageList = ({people})=>{
  return(
    <>
        {people&& (
            <ul className={styles.wrapper}>
                {
                    people.map(({id,name,url})=>{
                        return (
                            <Link to={`/people/${id}`}>
                                <li className={styles.searchItem}>
                                    <p style={{color:'white',textAlign:'center',width:'150px'}}>{name}</p>
                                    <img src={`${getPeopleImage(id)}`} width="200px" style={{margin:'auto'}}/>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        )}
    </>
  )
}

export default SearchPageList;