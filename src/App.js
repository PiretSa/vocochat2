import React, {useEffect, useState} from "react";
import './App.css';
import Input from "./components/input/Input";
import Chat from "./components/chat/Chat";
import {disconnectSocket, connectToServer, socket} from './Socket-service.js';
import data from "./data.json";



function App() {
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(data);

    useEffect(() => {

        connectToServer();
        return () => {
            disconnectSocket();
        }
    }, []);

    const handleSubmit = () => {
        const chat = {
            message,
            username: author,
        }
        socket.send(JSON.stringify(chat));


        socket.onmessage = (websocketData) => {
            const chatObject = JSON.parse(websocketData.data);
            setMessages([...messages, {
                message: chatObject.message,
                username: chatObject.username,
                date: chatObject.date,
            }]);
        }

        setMessage('');

        localStorage.setItem('chats', JSON.stringify(...messages));
    };

  return (
    <div className="background">
        <div className="voco">
            VOCOommunication
        </div>
      <div className="chat">
          <Chat messages={messages}/>
          <Input placeholder = "autor" onChange={setAuthor}
          value={author}/>
          <Input placeholder = "sonum" onChange={setMessage}
          value={message}/>
          <button className= "buttonSend" onClick={handleSubmit}>Saada</button>

      </div>
    </div>
  );
}


export default App;
