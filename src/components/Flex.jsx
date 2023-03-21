import styled from "styled-components";
import React from "react";
import { PropTypes } from "prop-types";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  background: ${(props) => props.background};
`;

function Flex({ children, gap, padding, direction, width, background }) {
  return (
    <StyledFlex
      gap={gap}
      padding={padding}
      width={width}
      background={background}
      direction={direction}
    >
      {children}
    </StyledFlex>
  );
}

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.string,
  padding: PropTypes.string,
  direction: PropTypes.string,
  width: PropTypes.string,
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Flex.defaultProps = {
  gap: "",
  padding: "",
  direction: "column",
  width: "",
  background: "",
};

export default Flex;
