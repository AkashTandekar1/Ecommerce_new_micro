import styled from 'styled-components';
import React from 'react';
// @ts-ignore
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import { theme,StyledChatbot, StyledChatbotTheme } from './chatbot.syles'; 



export function Chatbot() {
  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our shop',
      trigger: 'Done',
    },
    {
      id: 'Done',
      message: 'Please enter your name!',
      trigger: 'waiting1',
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, Please select your issue',
      trigger: 'issues',
    },
    {
      id: 'issues',
      options: [
        {
          value: 'Product Information',
          label: 'Product Information',
          trigger: 'Product Information',
        },
        {
          value: 'Order related queries',
          label: 'Order related queries',
          trigger: 'Order related queries',
        },
      ],
    },
    {
      id: 'Product Information',
      message:
        'Thanks for letting your issue regarding Product, Our team will resolve your issue ASAP',
      end: true,
    },
    {
      id: 'Order related queries',
      message:
        'Thanks for letting your issue regarding Order, Our team will resolve your issue ASAP',
      end: true,
    },
  ];


  const config = {
    floating: true,
  };

  return (
    <StyledChatbot>
      <StyledChatbotTheme>
        <ThemeProvider theme={theme}>
          <ChatBot headerTitle="Ask Eva!" steps={steps} {...config} />
        </ThemeProvider>
      </StyledChatbotTheme>
    </StyledChatbot>
  );
}

export default Chatbot;
