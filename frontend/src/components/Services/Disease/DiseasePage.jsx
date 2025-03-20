import React, { useState } from "react";
import KidneyDiseaseTest from "./KidneyDiseaseTest.jsx";

const DiseasePage = ({ service }) => {
  const [prediction, setPrediction] = useState(null);
  const handlePrediction = (pred) => {
    setPrediction(pred);
  };

  console.log(service.id);

  // Render the appropriate disease component based on the URL parameter
  switch (service.id) {
    case "1":
      return <KidneyDiseaseTest />;

    default:
      return <div>No such disease found</div>;
  }
};

export default DiseasePage;
