import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.css'


export type AffairsPropsType = { // need to fix any
  data: Array<AffairType>
  setFilter: ( priority: FilterType ) => void
  deleteAffairCallback: ( id: number ) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={ a }
      deleteAffairCallback={ props.deleteAffairCallback  }
    />
  ))

  const setAll = () => {  props.setFilter('all') }; // need to fix
  const setHigh = () => { props.setFilter('high') };
  const setMiddle = () => { props.setFilter('middle') };
  const setLow = () => { props.setFilter('low') };

  return (
    <div className={s.overlayHW2}>
      <div className={s.overlayAffairs}>
        {mappedAffairs}
      </div>
      <div className={s.overlayButton}>
        <button onClick={ setAll }><span>All</span></button>
        <button onClick={ setHigh }><span>High</span></button>
        <button onClick={ setMiddle }><span>Middle</span></button>
        <button onClick={ setLow }><span>Low</span></button>
      </div>
    </div>
  );
}

export default Affairs;