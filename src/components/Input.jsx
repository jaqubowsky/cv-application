import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";

const StyledInput = styled(motion.input)`
  width: 100%;
  outline: hidden;
  border: none;
  border-radius: 7px;
  padding: 0.4em;
`;

function Input(props) {
  const { type, name, placeholder, handleChange, value } = props;

  return (
    <StyledInput
      type={type}
      name={name}
      aria-label={placeholder}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      whileTap={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 100 }}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
};

Input.defaultProps = {
  handleChange: () => {},
  value: "",
};

export default Input;
