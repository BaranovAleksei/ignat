import React from "react";
import s from './Message.module.css';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessageType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt=""/>
            <div className={s.bodyMes}>
                <h5>{props.name}</h5>
                <p>{props.message}</p>
                <span>{props.time}</span>
            </div>
        </div>
    );
}

export default Message;
