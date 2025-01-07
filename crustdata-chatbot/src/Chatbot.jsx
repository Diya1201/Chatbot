import React, { useState } from 'react';
import './Chatbot.css';
import { FiSend } from 'react-icons/fi'; // Import the arrow icon
import responses from './responses';
import EmojiPicker from 'emoji-picker-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me about Crustdata’s APIs.' },
  ]);
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      const botMessage = {
        sender: 'bot',
        text: responses[input.toLowerCase()] || responses.default,
      };
      setMessages([...messages, userMessage, botMessage]);
      setInput('');
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setInput((prev) => prev + emojiObject.emoji);
  };

  return (
    <div className="chatbot">
      {/* Main Heading */}
      <h1 className="chatbot-heading">Check out the chatbot</h1>

      <div className={`chat-window ${isOpen ? 'open' : 'closed'}`}>
        <div className="chat-header">
          <h3>CrustyBot</h3>
          <button onClick={toggleChat} className="close-btn">
            &times;
          </button>
        </div>
        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <button
            className="emoji-btn"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            😀
          </button>
          {showEmojiPicker && (
            <div className="emoji-picker">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button className="send-btn" onClick={handleSend}>
            <FiSend size={20} />
          </button>
        </div>
      </div>
      <div className="chatbot-logo" onClick={toggleChat}>
        <img src="/chatbot-logo.png" alt="Chatbot Logo" />
      </div>
    </div>
  );
};

export default Chatbot;
