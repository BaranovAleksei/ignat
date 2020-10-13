import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
  addUser: () => void // need to fix any
  error: string | null // need to fix any
  totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers}) => {

  const inputClass = error === null ? s.error : '';// need to fix with (?:)

  return (
    <div className={s.overlayGreeting}>
      <input
        value={name}
        onChange={setNameCallback}
        className={inputClass}
      />

      <button
              onClick={addUser}> add
      </button>
      <span className={s.ErrorNameInput}> {error} </span>
      <div>
        <p className={ totalUsers === 0 ? s.opacity : '' }>В списке: {totalUsers} друзей! </p>
      </div>
    </div>
  );
}

export default Greeting;
