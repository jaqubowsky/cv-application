import { PropTypes } from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap};
  background: ${(props) => props.background};
  box-shadow: ${(props) => props.shadow};
  border-radius: 15px;
  margin: 0 auto;
`;

function Wrapper({
  children,
  width,
  justifyContent,
  padding,
  gap,
  background,
  flexDirection,
  shadow,
}) {
  return (
    <StyledWrapper
      width={width}
      padding={padding}
      gap={gap}
      background={background}
      shadow={shadow}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
    >
      {children}
    </StyledWrapper>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  padding: PropTypes.string,
  gap: PropTypes.string,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  shadow: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Wrapper.defaultProps = {
  width: "100%",
  padding: "0",
  gap: "0",
  background: "",
  shadow: "0",
  justifyContent: "",
  flexDirection: "column",
};

export default Wrapper;
