import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: (name: string) => void// need to fix any
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {

  const [name, setName] = useState< string >(''); // need to fix any
  const [error, setError] = useState< string | null >(''); // need to fix any

  const setNameCallback = ( e: ChangeEvent<HTMLInputElement> ) => { // need to fix any
    setName( e.currentTarget.value );
    setError('');// need to fix
  };

  const addUser = (  ) => {
    if ( name.trim() !== '' ){
      addUserCallback( name.trim() );
      setName('');
    } else {
      setError('ошибка ввода имени');
    };
  };

  const totalUsers = users.length ; // need to fix

  return (
    <Greeting
      name={ name }
      setNameCallback={ setNameCallback }
      addUser={ addUser }
      error={ error }
      totalUsers={ totalUsers }
    />
  );
}

export default GreetingContainer;
