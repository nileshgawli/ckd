import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config";
import DcotorsDropDown from "../../DoctorDropDown/DoctorDropDown";

const KidneyDiseaseTest = () => {
  const healthyData1 = {
    Age: "45",
    BP: "80",
    AL: "1.02",
    SU: "0",
    RBC: "normal",
    PC: "normal",
    PCC: "notpresent",
    BA: "notpresent",
    BGR: "117",
    BU: "46",
    SC: "1.2",
    POT: "137",
    WC: "5",
    HTN: "no",
    DM: "no",
    CAD: "no",
    PE: "good",
    ANE: "no",
  };

  const healthyData2 = {
    Age: "42",
    BP: "80",
    AL: "1.02",
    SU: "0",
    RBC: "normal",
    PC: "normal",
    PCC: "notpresent",
    BA: "notpresent",
    BGR: "132",
    BU: "24",
    SC: "0.7",
    POT: "140",
    WC: "4.1",
    HTN: "no",
    DM: "no",
    CAD: "no",
    PE: "good",
    ANE: "no",
  };

  const healthyData3 = {
    Age: "50",
    BP: "80",
    AL: "1.02",
    SU: "0",
    RBC: "normal",
    PC: "normal",
    PCC: "notpresent",
    BA: "notpresent",
    BGR: "97",
    BU: "40",
    SC: "0.6",
    POT: "150",
    WC: "4.5",
    HTN: "no",
    DM: "no",
    CAD: "no",
    PE: "good",
    ANE: "no",
  };

  const unhealthyData1 = {
    Age: "65",
    BP: "70",
    AL: "1.01",
    SU: "2",
    RBC: "normal",
    PC: "present",
    PCC: "notpresent",
    BGR: "112",
    BU: "73",
    SC: "3.3",
    HB: "10.9",
    HTN: "no",
    DM: "no",
    CAD: "no",
    PE: "good",
    ANE: "no",
  };

  const unhealthyData2 = {
    Age: "26",
    BP: "70",
    AL: "1.015",
    SU: "0",
    RBC: "normal",
    PC: "notpresent",
    PCC: "notpresent",
    BGR: "250",
    BU: "20",
    SC: "1.1",
    HB: "15.6",
    WC: "6900",
    RC: "6",
    HTN: "no",
    DM: "yes",
    CAD: "no",
    PE: "good",
    ANE: "no",
  };

  const unhealthyData3 = {
    Age: "61",
    BP: "80",
    AL: "1.015",
    SU: "0",
    RBC: "normal",
    PC: "notpresent",
    PCC: "notpresent",
    BGR: "360",
    BU: "19",
    SC: "0.7",
    POT: "137",
    WC: "4.4",
    HB: "15.2",
    HTN: "yes",
    DM: "yes",
    CAD: "no",
    PE: "good",
    ANE: "no",
  };

  const clearData = {
    Age: "",
    BP: "",
    AL: "",
    SU: "",
    RBC: "",
    PC: "",
    PCC: "",
    BA: "",
    BGR: "",
    BU: "",
    SC: "",
    POT: "",
    WC: "",
    HTN: "",
    DM: "",
    CAD: "",
    PE: "",
    ANE: "",
  }

  const [inputData, setInputData] = useState({
    Age: "",
    BP: "",
    AL: "",
    SU: "",
    RBC: "",
    PC: "",
    PCC: "",
    BA: "",
    BGR: "",
    BU: "",
    SC: "",
    POT: "",
    WC: "",
    HTN: "",
    DM: "",
    CAD: "",
    PE: "",
    ANE: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormFilled = Object.values(inputData).every(
      (value) => value.trim() !== ""
    );
    if (!isFormFilled) {
      setFormError("Please fill out all fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/kidney`, {
        data: inputData,
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-5 row mb-32">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h1 className="text-center text-3xl font-bold mb-8">
          Kidney Disease Predictor
        </h1>
        <div className="card border border-black rounded-lg p-8">
          <div className="flex justify-between mb-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-full m-2"
              onClick={() => setInputData(healthyData1)}
            >
              Healthy Data 1
            </button>

            <button
              className="bg-green-500 text-white px-4 py-2 rounded-full m-2"
              onClick={() => setInputData(healthyData2)}
            >
              Healthy Data 2
            </button>

            <button
              className="bg-green-500 text-white px-4 py-2 rounded-full m-2"
              onClick={() => setInputData(healthyData3)}
            >
              Healthy Data 3
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-full m-2"
              onClick={() => setInputData(unhealthyData1)}
            >
              Unhealthy Data 1
            </button>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded-full m-2"
              onClick={() => setInputData(unhealthyData2)}
            >
              Unhealthy Data 2
            </button>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded-full m-2"
              onClick={() => setInputData(unhealthyData3)}
            >
              Unhealthy Data 3
            </button>

            <button
              className="bg-slate-500 text-white px-4 py-2 rounded-full m-2"
              onClick={() => setInputData(clearData)}
            >
              Clear
            </button>
          </div>
          <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(inputData).map(([name, value]) => (
                <div key={name} className="col-span-1">
                  <input
                    className="border border-black p-2 w-full"
                    type="text"
                    name={name}
                    placeholder={`${name}`}
                    value={value}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              {formError && (
                <div className="text-red-500 mb-4">{formError}</div>
              )}
            </div>
            <input
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full mt-3"
              value="Predict"
            />
          </form>
          {loading && <div className="text-center mt-3">🔄 Loading...</div>}
          {prediction !== null && !loading && (
            <div
              className={`mt-3 ${
                prediction.includes("[1]") ? "bg-red-400" : "bg-green-400"
              } text-2xl`}
            >
              <h3 className="text-center">
                {prediction.includes("[1]")
                  ? "Sorry! Please consult your doctor."
                  : "Great! You are HEALTHY."}
              </h3>
            </div>
          )}
        </div>
      </div>
      <DcotorsDropDown
        testName={"Diabetes Disease Predictor"}
        testResult={prediction?.includes("[1]") ? "Unhealthy" : "Healthy"}
      />
    </div>
  );
};

export default KidneyDiseaseTest;
