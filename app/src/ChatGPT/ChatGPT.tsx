import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import ChatGptForm from './ChatGptForm/ChatGptForm';
import ChatGptReader from './ChatGptReader/ChatGptReader';
import.meta.env.VITE_OPENAI;

export default function ChatGPT() {
  const [message, setMessage] = useState('');
  console.log("meta", import.meta.env.VITE_OPENAI);
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

   
  //   // Make a POST request to the OpenAI ChatGPT API to create a new message
  //   const response = await fetch('https://api.openai.com/v1/chat/gpt/create', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer YOUR_API_KEY`,
  //     },
  //     body: JSON.stringify({
  //       text: message,
  //     }),
  //   });

  //   // If the request was successful, clear the input field
  //   if (response.ok) {
  //     setMessage('');
  //   }
  // };

  return (
    <div>
      <ChatGptForm />
      {/* <ChatGptReader /> */}
    </div>
  );
}
