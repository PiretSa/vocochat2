import React from 'react';
import Card from "../card/Card";



function Chat({messages}) {
    return (
        <div className="chat">
            {messages.map((item) => {
                return(<Card
            message={item.message}
            author={item.username}
            date={item.date}/>)
            })}
        </div>
    );
}

export default Chat;
