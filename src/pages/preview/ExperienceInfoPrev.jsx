import React, { PureComponent } from "react";
import { PropTypes } from "prop-types";
import Flex from "../../components/Flex";
import Section from "../../components/Section";

class ExperienceInfoPrev extends PureComponent {
  render() {
    const { experienceInfoData } = this.props;

    const experienceInfoItem = experienceInfoData.map((experienceItem) => {
      const { position, company, city, employedFrom, employedTo, id } =
        experienceItem;

      return (
        <Flex direction="row" gap="1em" key={id}>
          <p>
            {employedFrom} - {employedTo}
          </p>
          <Flex gap=".4em">
            <h4>{position}</h4>
            <p>
              {company}, {city}
            </p>
          </Flex>
        </Flex>
      );
    });

    return (
      <Section gap=".5em" padding="2em">
        <h3>Experience</h3>
        <hr />
        {experienceInfoItem}
      </Section>
    );
  }
}

ExperienceInfoPrev.propTypes = {
  experienceInfoData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};

export default ExperienceInfoPrev;
