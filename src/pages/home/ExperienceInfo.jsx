import React, { PureComponent } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

class ExperienceInfo extends PureComponent {
  logIdiot = () => {
    this.idiot = "idiot";

    console.log(this.idiot);
  };

  render() {
    return (
      <StyledExperience>
        <h2>Experience</h2>
        <Input type="text" name="position" placeholder="Position" />
        <Input type="text" name="company" placeholder="Company" />
        <Input type="text" name="city" placeholder="City" />
        <Input type="number" name="employedFrom" placeholder="From" />
        <Input type="text" name="employedTo" placeholder="To" />
        <Button handleClick={this.logIdiot} text="Add" />
      </StyledExperience>
    );
  }
}

export default ExperienceInfo;
