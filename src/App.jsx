import React, { useState } from "react";
import uuid4 from "uuid4";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Preview from "./pages/preview/Preview";
import Wrapper from "./components/Wrapper";
import cvDataEmpty from "./utils/cvData";

function App() {
  const [cvData, setCvData] = useState(cvDataEmpty);

  const onChange = (e, category, id) => {
    const { name, value } = e.target;

    setCvData((prevState) => {
      const newInfo = prevState[category].map((expItem) => {
        if (expItem.id === id) {
          return {
            ...expItem,
            [name]: value,
          };
        }
        return expItem;
      });

      return {
        ...prevState,
        [category]: newInfo,
      };
    });
  };

  const addExperience = () => {
    setCvData((prevState) => ({
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

  const addEducation = () => {
    setCvData((prevState) => ({
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

  const deleteCategory = (category, id) => {
    setCvData((prevState) => {
      const categoryLeft = prevState[category].filter((data) => data.id !== id);

      return { ...prevState, [category]: [...categoryLeft] };
    });
  };

  return (
    <>
      <Header />
      <Wrapper
        flexDirection="row"
        padding="2em"
        justifyContent="center"
        position="relative"
        alignItems="flex-start"
        background={(props) => props.theme.colors.wrapperBg}
      >
        <Home
          handleChange={onChange}
          cvData={cvData}
          handleAddExperience={addExperience}
          handleAddEducation={addEducation}
          handleDeleteCategory={deleteCategory}
        />
        <Preview cvData={cvData} />
      </Wrapper>
    </>
  );
}

export default App;
