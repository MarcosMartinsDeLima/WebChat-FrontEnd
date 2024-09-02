import { useState } from "react"
import { Form,Button, Col, Row } from "react-bootstrap";

const SalaDeEspera = ({joinChatRoom}) =>{
    const [userName,setUserName] = useState();
    const[chatRoom,setChatRoom] = useState();
    

    return <Form onSubmit={e=>{
        e.preventDefault()
        joinChatRoom(userName,chatRoom)
    }}>
        <Row className="px-5 py-5">
            <Col sm={12}>
                <Form.Group>
                    <Form.Control placeholder='UserName' onChange={e => setUserName(e.target.value)} />
                    <Form.Control placeholder='ChatRoom' onChange={e => setChatRoom(e.target.value)} />
                </Form.Group>
            </Col>
            <Col sm={12}>
                <hr />
                <Button variant="success" type="submit">Entrar</Button>
            </Col>
        </Row>
    </Form>
}

export  default SalaDeEspera