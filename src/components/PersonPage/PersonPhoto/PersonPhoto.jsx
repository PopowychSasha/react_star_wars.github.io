import { useDispatch } from "react-redux";
import styles from "./PersonPhoto.module.css";
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from "../../../store/actions";
import { useState } from "react";
import { useHistory } from "react-router";

const PersonPhoto = ({ personId, personPhoto, personName }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const set = () => {
    dispatch(setPersonToFavorite({
        id:personId,
        name:personName,
        img:personPhoto
      
    }));
    history.push('/favorites')
  };

  const remove = () => {
    dispatch(removePersonFromFavorite(personId));
    history.push('/favorites')
  };
  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
      </div>
      
      <button className="btn btn-success" style={{height:'50px'}} onClick={set}>Добавити</button>
      <button className="btn btn-danger" style={{height:'50px'}} onClick={remove}>Видалити</button>
    </>
  );
};

export default PersonPhoto;
