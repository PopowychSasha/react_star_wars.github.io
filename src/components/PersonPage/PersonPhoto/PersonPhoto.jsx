
import styles from  './PersonPhoto.module.css';

const PersonPhoto = ({personPhoto})=>{
  return(
    <>
        <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt="Person"/>
        </div>
    </>
  )
}

export default PersonPhoto;