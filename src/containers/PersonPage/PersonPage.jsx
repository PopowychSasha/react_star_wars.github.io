
import styles from  './PersonPage.module.css';
import { API_PERSON } from '../../constants/api';
import React, { useEffect, useState } from 'react';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResource } from '../../utils/network';
import { getPeopleImage } from '../../services/getPeopleData';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';
import UILoading from '../../components/UILoading/UILoading';
import { Suspense } from 'react';
const PersonFilms = React.lazy(()=>import('../../components/PersonPage/PersonFilms/PersonFilms'));

const PersonPage = ({match,setErrorApi})=>{
   const[personId,setPersonId] = useState();
   const[personInfo,setPersonInfo]=useState(null);
   const[personName,setPersonName]=useState('');
   const[personPhoto,setPersonPhoto]=useState(null);
   const[personFilms,setPersonFilms] = useState();

  
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async()=>{
    const id = match.params.id;
    const res = await getApiResource(API_PERSON+'/'+id);

    setPersonId(id);

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
        
        res.films.length && setPersonFilms(res.films);

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
                    <PersonPhoto personPhoto={personPhoto} personName={personName} personId={personId}/>
                {personInfo && (
                    <PersonInfo personInfo={personInfo}/>
                )}
                {personFilms && (
                    <Suspense fallback={<UILoading/>}>
                        <PersonFilms personFilms={personFilms}/>
                    </Suspense>
                )}
            </div>
        </div>
    </>
  )
}

export default withErrorApi(PersonPage);