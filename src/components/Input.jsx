import React, { PureComponent } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const StyledInput = styled.input`
  width: 100%;
`;

class Input extends PureComponent {
  render() {
    const { type, name, placeholder } = this.props;

    return (
      <StyledInput
        type={type}
        name={name}
        aria-label={placeholder}
        placeholder={placeholder}
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
