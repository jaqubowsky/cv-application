import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.header};
  color: ${(props) => props.color};
`;

class Button extends PureComponent {
  render() {
    const { type, handleClick, color, text } = this.props;

    return (
      <StyledButton type={type} color={color} onClick={handleClick}>
        {text}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: "button",
  color: "#FFFFFF",
};

export default Button;
