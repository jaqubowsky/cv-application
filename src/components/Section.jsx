import styled from "styled-components";
import React from "react";
import { PropTypes } from "prop-types";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};

  h3 {
    color: rgb(20, 62, 114);
  }
`;

function Section({ children, gap, padding }) {
  return (
    <StyledSection gap={gap} padding={padding}>
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.string,
  padding: PropTypes.string,
};

Section.defaultProps = {
  gap: "",
  padding: "",
};

export default Section;
