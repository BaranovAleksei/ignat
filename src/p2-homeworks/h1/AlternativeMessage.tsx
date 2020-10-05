import React from "react";
import s from './AlternativeMessage.module.css';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props:MessageType) {
    return (
        <div className={s.message}>

            <div className={s.bodyMes}>
                <h5>{props.name}</h5>
                <p>{props.message}</p>
                <span>{props.time}</span>
            </div>
            <img src={props.avatar} alt=""/>
        </div>
    );
}

export default AlternativeMessage;
