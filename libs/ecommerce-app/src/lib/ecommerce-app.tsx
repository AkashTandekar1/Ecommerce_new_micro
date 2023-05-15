import styled from 'styled-components';
import Header from './header/header';

/* eslint-disable-next-line */
export interface EcommerceAppProps {}

const StyledEcommerceApp = styled.div`
  color: pink;
`;

export function EcommerceApp(props: EcommerceAppProps) {
  return (
    <StyledEcommerceApp>
     <Header/>
    </StyledEcommerceApp>
  );
}

export default EcommerceApp;
