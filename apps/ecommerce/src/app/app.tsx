import styled from 'styled-components';
import EcommerceApp from 'libs/ecommerce-app/src/lib/ecommerce-app';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';

import CardDetails from 'libs/ecommerce-app/src/lib/card-details/card-details';
import Cards from 'libs/ecommerce-app/src/lib/cards/cards';
import Chatbot from 'libs/ecommerce-app/src/lib/chatbot/chatbot';
import Invoice from 'libs/ecommerce-app/src/lib/invoice/invoice';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <EcommerceApp />

      <Chatbot />
      <Routes>
        <Route path="/" element={<Cards id={0} rname={''} imgdata={''} address={''} delimg={''} somedata={''} price={0} rating={''} arrimg={''} qnty={0} />}></Route>
        <Route path="/cartdetails/:id" element={<CardDetails id={0} rname={''} imgdata={''} address={''} delimg={''} somedata={''} price={0} rating={''} arrimg={''} qnty={0} />}></Route>
        <Route path="/invoice" element={<Invoice />}></Route>
      </Routes>
    </StyledApp>
  );  
  
}

export default App;
