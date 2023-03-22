import React, { PureComponent } from "react";
import uuid4 from "uuid4";
import Header from "./components/Header";
import Home from "./pages/home/home";
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

  deleteEducation = (id) => {
    this.setState((prevState) => {
      const educationLeft = prevState.educationInfo.filter(
        (data) => data.id !== id
      );

      return { ...prevState, educationInfo: [...educationLeft] };
    });
  };

  deleteExperience = (id) => {
    this.setState((prevState) => {
      const experienceLeft = prevState.experienceInfo.filter(
        (data) => data.id !== id
      );

      return { ...prevState, experienceInfo: [...experienceLeft] };
    });
  };

  render() {
    return (
      <>
        <Header />
        <Wrapper flexDirection="row" padding="2em" justifyContent="center">
          <Home
            handleChange={this.onChange}
            cvData={this.state}
            handleAddExperience={this.addExperience}
            handleAddEducation={this.addEducation}
            handleDeleteEducation={this.deleteEducation}
            handleDeleteExperience={this.deleteExperience}
          />
        </Wrapper>
      </>
    );
  }
}

export default App;
