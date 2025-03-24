import express from "express";
import { spawn } from "child_process";
import multer from "multer";
import path from "path";

const router = express.Router();
const kidneyModel = "E:\\BACHELORS MINI PROJECTS\\Final\\AI-MedLab\\backend\\aimodels\\kidney.pkl";

const pythonScriptPathForKidney = "E:\\BACHELORS MINI PROJECTS\\Final\\AI-MedLab\\backend\\kidney.py";

router.post("/kidney", (req, res) => {
  try {
    const data = req.body.data;
    const pythonProcess = spawn("python", [
      pythonScriptPathForKidney,
      "--loads",
      kidneyModel,
      JSON.stringify(data),
    ]);
    let prediction = "";
    let responseSent = false; // Flag to track if response has been sent

    pythonProcess.stdout.on("data", (data) => {
      console.log("Python script output:", data.toString());
      prediction += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python script error:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      console.log("Python process closed with code:", code);
      console.log("Prediction:", prediction);
      if (!responseSent) {
        res.json({ prediction });
        responseSent = true;
      }
    });

    pythonProcess.on("error", (error) => {
      console.error("Python process error:", error);
      if (!responseSent) {
        res.status(500).send("Internal Server Error");
        responseSent = true;
      }
    });
  } catch (error) {
    console.error("Error:", error);
    if (!responseSent) {
      res.status(500).send("Internal Server Error");
      responseSent = true;
    }
  }
});

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

export default router;
