import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
  background: ${(props) => props.theme.colors.header};
  color: ${(props) => props.color};
  padding: 0.6em 0.4em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

function Button(props) {
  const { type, handleClick, color, text } = props;

  return (
    <StyledButton
      type={type}
      color={color}
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {text}
    </StyledButton>
  );
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
