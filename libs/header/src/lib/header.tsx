import styled from 'styled-components';
import UiHeader from './ui-header/ui-header';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  color: pink;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <h1>Welcome to Header!</h1>
      <UiHeader/>
    </StyledHeader>
  );
}

export default Header;
