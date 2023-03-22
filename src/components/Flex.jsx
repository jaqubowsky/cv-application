import styled from "styled-components";
import React from "react";
import { PropTypes } from "prop-types";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;

function Flex({ children, gap }) {
  return <StyledFlex gap={gap}>{children}</StyledFlex>;
}

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.string,
};

Flex.defaultProps = {
  gap: "",
};

export default Flex;
