
import styles from  './PersonPage.module.css';
import { API_PERSON } from '../../constants/api';
import { useEffect, useState } from 'react';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResource } from '../../utils/network';
import { getPeopleImage } from '../../services/getPeopleData';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';
const PersonPage = ({match,setErrorApi})=>{
   const[personInfo,setPersonInfo]=useState(null);
   const[personName,setPersonName]=useState('');
   const[personPhoto,setPersonPhoto]=useState(null);

  const id = match.params.id;
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async()=>{
      
    const res = await getApiResource(API_PERSON+'/'+id);
    if(res)
    {
        setPersonInfo([
            {title:'Height', data: res.height},
            {title:'Mass', data: res.height},
            {title:'Hair Color', data: res.hair_color},
            {title:'Skin Color', data: res.skin_color},
            {title:'Eye Color', data: res.eye_color},
            {title:'Birth Year', data: res.birth_year},
            {title:'Gender', data: res.gender},
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        //res.films;

        setErrorApi(false);
    }
    else
    {
        setErrorApi(true);
    }
    
  },[])
  return(
    <>
        <PersonLinkBack/>
        <div className={styles.wrapper}>
            <span className={styles.person__name}>{personName}</span>
            <div className={styles.container}>
                <PersonPhoto personPhoto={personPhoto}/>
                {personInfo && (
                    <PersonInfo personInfo={personInfo}/>
                )}
            </div>
        </div>
    </>
  )
}

export default withErrorApi(PersonPage);