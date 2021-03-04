import React, {useState} from "react";
import {homeWorkReducer, ItemType} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export const initialPeople: Array<ItemType> = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
          {p.name} - {p.age} года(лет)
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "SORT", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "SORT", payload: "down"}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: "CHECK", payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8
            <hr/>
            <div style={{display: 'flex', flexDirection: 'column', height: '150px'}}>
              {finalPeople}
            </div>

            <hr/>
            <div style={{display: 'flex', width: '50%', justifyContent: 'space-around'}}>
              <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
              <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
              <div><SuperButton onClick={checkAge}>check age</SuperButton></div>
            </div>


            {/*check 18*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}

        </div>
    )
}
export default HW8;
