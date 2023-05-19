import styled from 'styled-components';
import Header from './header/header';


/* eslint-disable-next-line */
export interface EcommerceAppProps {}

const StyledEcommerceApp = styled.div`

`;

export function EcommerceApp(props: EcommerceAppProps) {
  return (
    <StyledEcommerceApp>
         <Header data-testid="headercomponent"/>
    </StyledEcommerceApp>
  );
}

export default EcommerceApp;
