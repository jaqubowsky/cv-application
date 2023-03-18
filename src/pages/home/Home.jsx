import React, { PureComponent } from "react";
import PersonalInfo from "./PersonalInfo";
import ExperienceInfo from "./ExperienceInfo";
import EducationInfo from "./EducationInfo";
import Wrapper from "../../components/Wrapper";

class Home extends PureComponent {
  render() {
    return (
      <Wrapper
        width="85%"
        padding="2em"
        gap="3em"
        background={(props) => props.theme.colors.wrapperBg}
        shadow={(props) => props.theme.colors.wrapperShadow}
      >
        <PersonalInfo />
        <ExperienceInfo />
        <EducationInfo />
      </Wrapper>
    );
  }
}

export default Home;
