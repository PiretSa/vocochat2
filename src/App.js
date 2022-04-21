import React, {useEffect} from "react";
import './App.css';
import Input from "./components/input/Input";
import Chat from "./components/chat/Chat";
import { disconnectSocket, connectToServer } from './Socket-service.js';



function App() {
    useEffect(() => {

        connectToServer();
        return () => {
            disconnectSocket();
        }
    }, []);


  return (
    <div className="background">
        <div className="voco">
            VOCOommunication
        </div>
      <div className="chat">
          <Chat/>
          <Input />

      </div>
    </div>
  );
}


export default App;
