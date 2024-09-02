import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

export const SendMessageForm = ({sendMessage}) => {
    const [msg,setMessage] = useState("")
  return (
    <Form onSubmit={e =>{
        e.preventDefault();
        sendMessage(msg);
        setMessage("");
    }}>
        <InputGroup className='mb-3'>
            <InputGroup.Text>Chat</InputGroup.Text>
            <Form.Control onChange={e=>setMessage(e.target.value)} value={msg} placeholder='Digite uma mensagem'></Form.Control>
            <Button variant='primary' type='submit' disabled={!msg}>Enviar</Button>
        </InputGroup>
    </Form>
  )
}
export default SendMessageForm;