import React from "react";
import { useState, useEffect, useRef } from "react";
import './FormPage.css'

function FormPage() {
    const [chatBloqueado, setChatBloqueado] = useState(true)

    const [messages, setMessages] = useState([])
    const [step, setStep] = useState(0)

    const chatMessagesRef = useRef(null) // Variável que faz a referência no chat

    const desbloquearChat = () => {
        setChatBloqueado(false)
    }

    const enviadorMsg = () => {
        setMessages([
            ...messages,
            {sender: 'bot', text: 'Olá, seja bem-vindo(a)'},
            {sender: 'bot', text: 'Olá, seja bem-vindo(a)'}
        ])
        setStep(1)
    }

    const enviadorMsgDiferente = () => {
        setMessages([
            ...messages,
            {sender: 'bot', text: 'Estamos em teste'},
            {sender: 'bot', text: 'Enviando uma mensagem diferente para teste'}
        ])
        setStep(2)
    }

    // Será responsável por descer o scroll caso a condicional seja true
    useEffect(() => {
        if(chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
        }
    }, [messages])
    //

    return (
        <>
            <div className="general-div">
                <div className="content-div">

                    <div className="form">

                        <div className="title-chat">
                            <button onClick={desbloquearChat} className="botton-iniciar" style={{cursor: 'pointer', marginRight: '50px'}}>Iniciar</button>
                            <button onClick={enviadorMsg} className="enviadoMsg" style={{cursor: 'pointer', marginRight: '50px'}}>Enviar mensagem</button>
                            <button onClick={enviadorMsgDiferente} style={{cursor: 'pointer'}}>Enviar mensagen diferente</button>
                        </div>

                        <div className="content-chat" style={{opacity : chatBloqueado ? 0.6 : 1}}>
                            {chatBloqueado && <div className="overlay-bloqueado"></div>}

                            {/* A referência para o chat deve estar aqui, em chat-messages */}
                            <div className="chat-messages" ref={chatMessagesRef}> 
                                {messages.map((msg, idx) => (
                                    <div key={idx} className="msg-bot">
                                        <div className="div-mensagem-bot">
                                            <span className="mensagens">{msg.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/*  */}

                        </div>

                        <div className="div-input">
                            <input type="text" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footerLeft">
                    <p>Eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                    <p>Eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                </div>

                <div className="footerCentro">
                    <h1>TESTE</h1>
                </div>

                <div className="footerRight">
                    <p>Eeeeeeeeeee</p>
                    <p>Eeeeeeeeeee</p>
                </div>
            </div>
        </>
    )

}

export default FormPage