import React from 'react';
import Card from "../card/Card";
import data from '../../data.json';



function Chat() {
    return (
        <div className="chat">
            {data.map((item)=> {
                return(<Card
            message={item.message}
            author={item.username}
            date={item.date}/>)
            })}
        </div>
    );
}

export default Chat;
