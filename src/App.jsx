import React, { PureComponent } from "react";
import uuid4 from "uuid4";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Preview from "./pages/preview/Preview";
import Wrapper from "./components/Wrapper";
import cvData from "./utils/cvData";

class App extends PureComponent {
  constructor() {
    super();

    this.state = cvData;
  }

  onChange = (e, category, id) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const newExperienceInfo = prevState[category].map((expItem) => {
        if (expItem.id === id) {
          return {
            ...expItem,
            [name]: value,
          };
        }
        return expItem;
      });

      return {
        [category]: newExperienceInfo,
      };
    });
  };

  addExperience = () => {
    this.setState((prevState) => ({
      ...prevState,
      experienceInfo: [
        ...prevState.experienceInfo,
        {
          position: "",
          company: "",
          city: "",
          employedFrom: "",
          employedTo: "",
          id: uuid4(),
        },
      ],
    }));
  };

  addEducation = () => {
    this.setState((prevState) => ({
      ...prevState,
      educationInfo: [
        ...prevState.educationInfo,
        {
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          educationFrom: "",
          educationTo: "",
          id: uuid4(),
        },
      ],
    }));
  };

  deleteCategory = (category, id) => {
    this.setState((prevState) => {
      const categoryLeft = prevState[category].filter((data) => data.id !== id);

      return { ...prevState, [category]: [...categoryLeft] };
    });
  };

  render() {
    return (
      <>
        <Header />
        <Wrapper
          flexDirection="row"
          padding="2em"
          justifyContent="center"
          position="relative"
          alignItems="flex-start"
          background={props => props.theme.colors.wrapperBg}
        >
          <Home
            handleChange={this.onChange}
            cvData={this.state}
            handleAddExperience={this.addExperience}
            handleAddEducation={this.addEducation}
            handleDeleteCategory={this.deleteCategory}
          />
          <Preview cvData={this.state}/>
        </Wrapper>
      </>
    );
  }
}

export default App;
