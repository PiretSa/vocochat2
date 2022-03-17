import React from "react";
import './App.css';
import Chat from "./components/chat/Chat";



function App() {
  return (
    <div className="background">
        <div className="voco">
            VOCO Chat
        </div>
      <div className="chat"><Chat/>

      </div>
    </div>
  );
}


export default App;
