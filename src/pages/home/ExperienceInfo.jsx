import React, { PureComponent } from "react";
import { PropTypes } from "prop-types";
import uuid4 from "uuid4";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Flex from "../../components/Flex";

class ExperienceInfo extends PureComponent {
  render() {
    const { handleChange, handleDeleteExperience, cvData, id } = this.props;

    // Didn't have clue how to handle this otherwise and I wanted to use map function...
    const placeholders = ["Position", "Company", "City", "From", "To"];

    const inputElement = Object.keys(cvData).map((data, idx) => {
      if (data === "id") return null;
      return (
        <Input
          type={
            data === "employedTo" || data === "employedFrom" ? "number" : "text"
          }
          name={data}
          placeholder={placeholders[idx]}
          value={[cvData[data]]}
          key={uuid4()}
          handleChange={(e) => handleChange(e, "experienceInfo", id)}
        />
      );
    });

    return (
      <Flex gap="1em">
        {inputElement}
        <Button handleClick={() => handleDeleteExperience(id)} text="Delete" />
      </Flex>
    );
  }
}

ExperienceInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleDeleteExperience: PropTypes.func.isRequired,
  cvData: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default ExperienceInfo;
