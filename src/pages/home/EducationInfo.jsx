import React from "react";
import { PropTypes } from "prop-types";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Flex from "../../components/Flex";

function EducationInfo(props) {
  const { handleChange, handleDeleteCategory, cvData, id } = props;

  // Didn't have clue how to handle this otherwise and I wanted to use map function...
  const placeholders = [
    "University Name",
    "City",
    "Degree",
    "Subject",
    "From",
    "To",
  ];

  const CATEGORY = "educationInfo";

  const inputElement = Object.keys(cvData).map((data, idx) => {
    if (data === "id") return null;

    return (
      <Input
        type={
          data === "educationFrom" || data === "educationTo" ? "number" : "text"
        }
        name={data}
        placeholder={placeholders[idx]}
        value={[cvData[data]]}
        key={data}
        handleChange={(e) => handleChange(e, CATEGORY, id)}
      />
    );
  });

  return (
    <Flex gap="1em">
      {inputElement}
      <Button
        handleClick={() => handleDeleteCategory(CATEGORY, id)}
        text="Delete"
      />
    </Flex>
  );
}

EducationInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleDeleteCategory: PropTypes.func.isRequired,
  cvData: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default EducationInfo;
