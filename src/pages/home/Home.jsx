import React from "react";
import { PropTypes } from "prop-types";
import PersonalInfo from "./PersonalInfo";
import ExperienceInfo from "./ExperienceInfo";
import EducationInfo from "./EducationInfo";
import Wrapper from "../../components/Wrapper";
import Flex from "../../components/Flex";
import Button from "../../components/Button";

function Home(props) {
  const {
    handleChange,
    handleAddExperience,
    handleAddEducation,
    handleDeleteCategory,
    cvData,
  } = props;                                                    

  const personalInfoItem = cvData.personalInfo.map((personalItem) => (
    <PersonalInfo
      handleChange={handleChange}
      cvData={personalItem}
      id={personalItem.id}
      key={personalItem.id}
    />
  ));

  const experienceInfoItem = cvData.experienceInfo.map((expItem) => (
    <ExperienceInfo
      handleChange={handleChange}
      handleDeleteCategory={handleDeleteCategory}
      cvData={expItem}
      id={expItem.id}
      key={expItem.id}
    />
  ));

  const educationInfoItem = cvData.educationInfo.map((eduItem) => (
    <EducationInfo
      handleChange={handleChange}
      handleDeleteCategory={handleDeleteCategory}
      cvData={eduItem}
      id={eduItem.id}
      key={eduItem.id}
    />
  ));

  return (
    <Wrapper
      padding="2em"
      gap="3em"
      width="45%"
      background={(props) => props.theme.colors.wrapperBg}
      shadow={(props) => props.theme.colors.wrapperShadow}
    >
      <Flex gap="1.2em">
        <h2> Personal Information </h2>
        {personalInfoItem}
      </Flex>
      <Flex gap="1.2em">
        <h2> Experience </h2>
        {experienceInfoItem}
        <Button handleClick={handleAddExperience} text="Add" />
      </Flex>
      <Flex gap="1.2em">
        <h2> Education </h2>
        {educationInfoItem}
        <Button handleClick={handleAddEducation} text="Add" />
      </Flex>
    </Wrapper>
  );
}

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleAddEducation: PropTypes.func.isRequired,
  handleAddExperience: PropTypes.func.isRequired,
  handleDeleteCategory: PropTypes.func.isRequired,
  cvData: PropTypes.shape({
    personalInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
      .isRequired,
    experienceInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
      .isRequired,
    educationInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
      .isRequired,
  }).isRequired,
};

export default Home;
