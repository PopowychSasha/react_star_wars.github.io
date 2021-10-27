
import { useCallback, useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_SEARCH } from '../../constants/api';
import SearchPageList from '../../components/SearchPage/SearchPageList/SearchPageList';
import { debounce } from 'lodash';
import { getPeopleId } from '../../services/getPeopleData';
const SearchPage = ()=>{
  const [inputSearchValue,setInputSearchValue] = useState('');
  const [people,setPeople] = useState(null);

  const getResponce = async (param)=>{
        const res = await getApiResource(param);
        console.log(res);
        
        if(res){
            const peopleList = res.results.map(({name,url})=>{
                const id = getPeopleId(url);
                return{
                    id,name,url
                }
            })
            setPeople(peopleList);
        }
        console.log(people);
  }

  const deboncedGetResponce = useCallback(debounce(value=>getResponce(value),600),[])

  const handleInputChange = (event)=>{
        const value = event.target.value;
        setInputSearchValue(event.target.value);
        deboncedGetResponce(value);
  }

  useEffect(()=>{
    deboncedGetResponce(API_SEARCH+inputSearchValue);
  },[inputSearchValue])
  return(
    <>
        <h1 className="header__text">SearchPage</h1>
        <input 
            className="form-control form-control-lg" styles={{}}
            type="text"
            value={inputSearchValue}
            onChange={handleInputChange}
            placeholder="Input Character's name..."
        />
        <SearchPageList people={people}/>
    </>
  )
}

export default SearchPage;