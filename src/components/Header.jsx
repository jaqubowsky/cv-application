import React, { PureComponent } from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";

const StyledHeader = styled.header`
  background: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.fontWhite};
  padding: 1.5em 0;
  font-size: 1.3rem;
`;

class Header extends PureComponent {
  render() {
    return (
      <StyledHeader>
        <Wrapper width="90%">
          <h1>CV CREATOR</h1>
        </Wrapper>
      </StyledHeader>
    );
  }
}

export default Header;
