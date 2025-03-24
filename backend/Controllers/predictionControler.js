import pickle from "pickle";
import fs from "fs";
import PythonShell from "python-shell";

const modelPath = "aimodels/diabetes.pkl";


// Route handler functions
export const predictDiabetes = (req, res) => {
  const data = req.body;
  console.log("data: ", data);
  let options = {
    mode: "text",
    // pythonPath:'C:/Users/Gujrat laptops/.pyenv/pyenv-win/versions/3.7.4/python.exe',
    args: [JSON.stringify(data)],
    pythonOptions: ["-u"],
  };

  // Use PythonShell to run the Python script
  PythonShell.run("predict.py", options, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      // Parse the result and send it back to the client
      const prediction = JSON.parse(result);
      res.json({ prediction });
    }
  });
};

export const predictKidney = (req, res) => {
  // Handle kidney prediction
  const input = req.body.input;
  const prediction = kidneyModel.predict(input);
  res.json({ prediction });
};