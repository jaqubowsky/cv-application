import React, { PureComponent } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";

const StyledEducation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

class EducationInfo extends PureComponent {
  logIdiot = () => {
    this.idiot = "idiot";

    console.log(this.idiot);
  };

  render() {
    return (
      <StyledEducation>
        <h2>Experience</h2>
        <Input
          type="text"
          name="universityName"
          placeholder="University Name"
        />
        <Input type="text" name="company" placeholder="City" />
        <Input type="text" name="city" placeholder="Degree" />
        <Input type="number" name="subject" placeholder="Subject" />
        <Input type="text" name="educationFrom" placeholder="From" />
        <Input type="text" name="educationTo" placeholder="To" />
        <Button handleClick={this.logIdiot} text="Add" />
      </StyledEducation>
    );
  }
}

export default EducationInfo;
