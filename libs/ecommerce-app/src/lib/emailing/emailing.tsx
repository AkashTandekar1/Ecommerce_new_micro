import styled from 'styled-components';
import emailjs, { send } from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';
import { useAccordionButton } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

export interface EmailingProps {}

const StyledEmailing = styled.div``;

export function Emailing(props: EmailingProps) {
  const [data, setData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: 'Akash',
    email: 'tandekarakash6@gmail.com',
    message: 'Hello Akash ',
  });

  const sendEmail = () => {
    emailjs
      .send('service_vl86f3q', 'template_20oc7bu', data, 'tLBGSuno4d_1ZDUoW')
      .then(
        (result) => {
          console.log('Email sent successfully');
          toast('Payment done Successfully!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    return sendEmail;
  }, []);

  console.log('email testing getting called');

  return (
    <StyledEmailing>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </StyledEmailing>
  );
}

export default Emailing;
