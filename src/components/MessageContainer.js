const MessageContainer = ({messages}) =>
    {
        console.log("cu ",messages[0])
        return <div>
            {
                messages.map((msg,index)=> (
                        <table striped bordered>
                            <tr key={index}>
                                <td>{msg.msg} - <span style={{color:"#0192E5"}}>{msg.username}</span></td>
                            </tr>
                        </table>
                    )
                )
            }
        </div>
    }

export default MessageContainer