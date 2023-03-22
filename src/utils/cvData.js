import uuid4 from "uuid4";

const cvData = {
  personalInfo: [
    {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
      id: uuid4(),
    },
  ],
  experienceInfo: [
    {
      position: "",
      company: "",
      city: "",
      employedFrom: "",
      employedTo: "",
      id: uuid4(),
    },
  ],
  educationInfo: [
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
};

export default cvData;
