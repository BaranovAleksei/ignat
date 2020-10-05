import React from "react";
import Message from './Message';
import AlternativeMessage from './AlternativeMessage';

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "npm start нажимал?",
    time: "22:00",
};

const messageDataMy = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "Да !!!!",
    time: "22:00",
};


function HW1() {
    return (
        <div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <AlternativeMessage
                avatar={messageDataMy.avatar}
                name={messageDataMy.name}
                message={messageDataMy.message}
                time={messageDataMy.time}
            />
        </div>
    );
}

export default HW1;
