import React, { PureComponent } from "react";
import { PropTypes } from "prop-types";
import uuid4 from "uuid4";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Flex from "../../components/Flex";

class EducationInfo extends PureComponent {
  render() {
    const { handleChange, handleDeleteEducation, cvData, id } = this.props;

    // Didn't have clue how to handle this otherwise and I wanted to use map function...
    const placeholders = [
      "University Name",
      "City",
      "Degree",
      "Subject",
      "From",
      "To",
    ];

    const inputElement = Object.keys(cvData).map((data, idx) => {
      if (data === "id") return null;

      return (
        <Input
          type={
            data === "educationFrom" || data === "educationTo"
              ? "number"
              : "text"
          }
          name={data}
          placeholder={placeholders[idx]}
          value={[cvData[data]]}
          key={uuid4()}
          handleChange={(e) => handleChange(e, "educationInfo", id)}
        />
      );
    });

    return (
      <Flex gap="1em">
        {inputElement}
        <Button handleClick={() => handleDeleteEducation(id)} text="Delete" />
      </Flex>
    );
  }
}

EducationInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleDeleteEducation: PropTypes.func.isRequired,
  cvData: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default EducationInfo;
