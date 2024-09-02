import 'bootstrap/dist/css/bootstrap.min.css'
import {Col,Row,Container} from 'react-bootstrap'
import './App.css';
import SalaDeEspera from './components/salaDeEspera';
import { useState } from 'react'
import {HubConnectionBuilder, LogLevel} from '@microsoft/signalr'
import ChatRoom from './components/chatRoom';

function App() {
  const [conn,setConnection] = useState();
  const [messages,setMessages] = useState([]);
  const [chat,setChat] = useState();

  const joinChatRoom =  async(username,chatroom) => {
    try {
      // iniciar conexão
      const conn = new HubConnectionBuilder()
        .withUrl("http://localhost:5122/chat")
        .configureLogging(LogLevel.Information)
        .build();
      
      //configurar handler
      conn.on("JoinSpecifChat",(username,msg,chatRoom)=>{
        setMessages(messages =>[...messages,{username,msg}])
        setChat(chatRoom)
      });

      conn.on("ReceiveSpecificMessage",(username,msg)=>{
        setMessages(messages =>[...messages,{username,msg}])
      })

      await conn.start()
      await conn.invoke("JoinSpecifChat",{username,chatroom})

      setConnection(conn)

    } catch (error) {
      console.log(error)
    }
  }

  const sendMessage = async (message)=>{
    try {
      await conn.invoke("SendMessage",message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <main>
        <Container>
          <Row className="px-5 my-5"> 
            <Col sm='12'>
              <h1 className='font-weight-light'>Bem vindo ao <span style={{color:"#00c040"}}>Web</span>Chat</h1>
            </Col>
          </Row>
          {!conn ?
          <SalaDeEspera joinChatRoom={joinChatRoom}></SalaDeEspera>
          : <ChatRoom messages={messages} chat={chat} sendMessage={sendMessage}></ChatRoom>
            
          }
        </Container>
      </main>
    </div>
  );
}

export default App;
