import { Col, Row } from "react-bootstrap";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./sendMessageForm";


const ChatRoom = ({messages,chat,sendMessage})=>{
    console.log("krl",messages[0])
    return (
        <div>
            <Row className="px-5 py-5">
                <Col sm={10}>
                    <h2>ChatRoom: {chat}</h2>
                </Col>
                <Col>

                </Col>
            </Row>
            <Row className="px-5 py-5">
                <Col sm={12}>
                    <MessageContainer messages={messages} />
                </Col>
                <Col sm={12} style={{marginTop:20}}>
                    <SendMessageForm sendMessage={sendMessage} />
                </Col>
            </Row>

        </div>
    )
}
export default ChatRoom