import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import ChatStyles from '../styles/ChatStyles';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    try {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        userId: auth.currentUser.uid,
        timestamp: new Date()
      });
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  };

  return (
    <div className={ChatStyles.container}>
      <div className={ChatStyles.header}>Chat Room</div>
      <div className={ChatStyles.chatBox}>
        {messages.map((message) => (
          <div key={message.id} className={ChatStyles.messageContainer}>
            <div className={`${ChatStyles.message} ${
              message.userId === auth.currentUser.uid ? ChatStyles.sentMessage : ChatStyles.receivedMessage
            }`}>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={ChatStyles.inputContainer}>
        <form onSubmit={handleSendMessage} className={ChatStyles.form}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className={ChatStyles.input}
            placeholder="Type a message..."
          />
          <button type="submit" className={ChatStyles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;