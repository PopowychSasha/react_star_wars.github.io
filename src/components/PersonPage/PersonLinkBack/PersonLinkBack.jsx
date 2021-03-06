/* eslint-disable jsx-a11y/anchor-is-valid */

import { useHistory } from 'react-router';
import styles from  './PersonLinkBack.module.css';
import iconBack from './img/back.png';

const PersonLinkBack = ()=>{
    const history = useHistory();

    const handleGoBack = (e)=>{
        e.preventDefault();
        console.log('handleGoBack');

        history.goBack();
    }
    return(
        <>
            <a
                href="#"
                onClick={handleGoBack}
                className={styles.link}
            >
                <img className={styles.link__img} src={iconBack} alt="Go back"/>
                <span>Go Back</span>
            </a>
        </>
    )
}

export default PersonLinkBack;