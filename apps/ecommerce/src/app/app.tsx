import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import Header from 'libs/header/src/lib/header'

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {/* <NxWelcome title="ecommerce" /> */}
       <Header/>
    </StyledApp>
  );
}

export default App;
