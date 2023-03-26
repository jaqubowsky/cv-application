import React from "react";
import { PropTypes } from "prop-types";
import Input from "../../components/Input";
import Flex from "../../components/Flex";

function PersonalInfo({ handleChange, cvData, id }) {
  // Didn't have clue how to handle this otherwise and I wanted to use map function...
  const placeholders = [
    "First Name",
    "Last Name",
    "Address",
    "Number",
    "Email",
    "Description",
  ];

  const CATEGORY = "personalInfo";

  const inputElement = Object.keys(cvData).map((data, idx) => {
    if (data === "id") return null;
    return (
      <Input
        type={data === "phoneNumber" ? "number" : "text"}
        name={data}
        placeholder={placeholders[idx]}
        value={[cvData[data]]}
        key={data}
        handleChange={(e) => handleChange(e, CATEGORY, id)}
      />
    );
  });

  return <Flex gap="1.2em">{inputElement}</Flex>;
}

PersonalInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  cvData: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default PersonalInfo;
