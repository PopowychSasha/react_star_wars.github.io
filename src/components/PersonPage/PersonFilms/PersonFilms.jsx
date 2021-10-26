
import styles from  './PersonFilms.module.css';
import { makeConcurrentRequest } from '../../../utils/network';
import { useEffect, useState } from 'react';

const PersonFilms = ({personFilms})=>{
  const[filmsName,setFilmsName] = useState([]);

  useEffect(()=>{
    (async()=>{
        const response = await makeConcurrentRequest(personFilms);
        setFilmsName(response);
    })()
  },[])
  return(
    <>
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {
                    filmsName.sort((a,z)=>Number(a.episode_id)-Number(z.episode_id))
                    .map(({title,episode_id})=>{
                        return <li className={styles.list__item} key={episode_id}>
                                    <span className={styles.item__episode}>Episode {episode_id}</span>
                                    <span className={styles.item__colon}>:</span>
                                    <span className={styles.item__title}>{title}</span>
                               </li>
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default PersonFilms;