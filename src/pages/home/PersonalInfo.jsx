import React, { PureComponent } from "react";
import styled from "styled-components";
import Input from "../../components/Input";

const StyledPersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

class PersonalInfo extends PureComponent {
  render() {
    return (
      <StyledPersonalInfo>
        <h2>Personal Information</h2>
        <Input type="text" name="firstName" placeholder="First Name" />
        <Input type="text" name="lastName" placeholder="Last Name" />
        <Input type="text" name="address" placeholder="Address" />
        <Input type="number" name="phoneNumber" placeholder="Number" />
        <Input type="text" name="email" placeholder="Email" />
        <Input type="text" name="description" placeholder="Description" />
      </StyledPersonalInfo>
    );
  }
}

export default PersonalInfo;
