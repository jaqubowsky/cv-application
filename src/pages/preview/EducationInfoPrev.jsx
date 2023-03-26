import React from "react";
import { PropTypes } from "prop-types";
import Flex from "../../components/Flex";
import Section from "../../components/Section";

function EducationInfoPrev({ educationInfoData }) {
  const educationInfoItem = educationInfoData.map((educationItem) => {
    const {
      universityName,
      city,
      degree,
      subject,
      educationFrom,
      educationTo,
      id,
    } = educationItem;

    return (
      <Flex direction="row" gap="1em" key={id}>
        <p>
          {educationFrom} - {educationTo}
        </p>
        <Flex gap=".4em">
          <h4>
            {universityName}, {city}
          </h4>
          <p>Degree: {degree}</p>
          <p>Subject: {subject}</p>
        </Flex>
      </Flex>
    );
  });

  return (
    <Section gap=".5em" padding="2em">
      <h3>Education</h3>
      <hr />
      {educationInfoItem}
    </Section>
  );
}

EducationInfoPrev.propTypes = {
  educationInfoData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};

export default EducationInfoPrev;
