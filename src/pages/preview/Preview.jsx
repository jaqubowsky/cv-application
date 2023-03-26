import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import Section from "../../components/Section";
import Wrapper from "../../components/Wrapper";
import Flex from "../../components/Flex";
import ExperienceInfoPrev from "./ExperienceInfoPrev";
import EducationInfoPrev from "./EducationInfoPrev";

const StyledHeader = styled.div`
  background-color: rgb(20, 62, 114);
  color: white;
  padding: 2rem;
`;

function Preview({ cvData }) {
  const { personalInfo, experienceInfo, educationInfo } = cvData;

  const { firstName, lastName, address, phoneNumber, email, description } =
    personalInfo[0];

  return (
    <Wrapper
      width="45%"
      background={(props) => props.theme.colors.wrapperBg}
      shadow={(props) => props.theme.colors.wrapperShadow}
      position="sticky"
      top="10px"
    >
      {/* HEADER */}
      <StyledHeader>
        <h1>
          {firstName} {lastName}
        </h1>
      </StyledHeader>
      {/* END OF HEADER */}

      <Flex direction="row">
        <Flex width="75%">
          {/* DESCRIPTION */}
          <Section gap=".5em" padding="2em">
            <h3>Description</h3>
            <hr />
            <p>{description}</p>
          </Section>

          {/* EXPERIENCE */}
          <ExperienceInfoPrev experienceInfoData={experienceInfo} />
          {/* EDUCATION */}
          <EducationInfoPrev educationInfoData={educationInfo} />
        </Flex>
        {/* PERSONAL DETAILS */}

        <Flex
          width="25%"
          padding="2em 1em"
          gap=".7em"
          background={(props) => props.theme.colors.mainBg}
        >
          <Section>
            <h3>Personal Details</h3>
            <hr />
          </Section>
          <Section>
            <h4>Address</h4>
            <p>{address}</p>
          </Section>
          <Section>
            <h4>Phone Number</h4>
            <p>{phoneNumber}</p>
          </Section>
          <Section>
            <h4>Email</h4>
            <p>{email}</p>
          </Section>
        </Flex>
        {/* END OF PERSONAL DETAILS */}
      </Flex>
    </Wrapper>
  );
}

Preview.propTypes = {
  cvData: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
  ).isRequired,
};

export default Preview;
