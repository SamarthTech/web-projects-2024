const express = require("express");
const multer = require("multer");
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Setup multer
const upload = multer({ dest: "uploads/" });
console.log(upload);
// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Render the upload form
app.get("/", (req, res) => {
  res.render("upload");
});

app.post("/upload", upload.single("excelFile"), (req, res) => {
  if (!req.file) {
    res.status(400).send("No file uploaded.");
    return;
  }

  const filePath = req.file.path;

  try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames.find((name) => name === "Sheet1");
    if (!sheetName) {
      throw new Error("Sheet1 not found in the Excel file.");
    }
    const sheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json(sheet);

    const dataFolderPath = path.join(__dirname, "data");
    if (!fs.existsSync(dataFolderPath)) {
      fs.mkdirSync(dataFolderPath);
    }

    const jsonFilePath = path.join(dataFolderPath, "converted_data.json");

    const transformedData = jsonData.map((student) => ({
      "Student Details": {
        Email: student["Student Details"],
        Name: student["__EMPTY"],
        Surname: student["__EMPTY_1"],
        Branch: student["__EMPTY_2"],
        Gender: student["__EMPTY_3"],
      },
      "MBTI (out of 100)": {
        "4-letter personality": student["MBTI (out of 100)"],
        "I or E": student["__EMPTY_4"],
        "S or N": student["__EMPTY_5"],
        "F or T": student["__EMPTY_6"],
        "J or P": student["__EMPTY_7"],
      },
      "Learning Style (out of 100)": {
        "Auditory Learning": student["Learning Style (out of 100)"],
        "Visual Learning": student["__EMPTY_8"],
        "Kinesthetic Learning": student["__EMPTY_9"],
      },
      "Brain Type (out of 100)": {
        "Left Brain": student["Brain Type (out of 100)"],
        "Right Brain": student["__EMPTY_10"],
      },
      "Intelligence Type": {
        "Intelligence Type": student["Intelligence Type"],
        "Intelligence Score": student["__EMPTY_11"],
      },
      "DISC (Total 100)": {
        "Dominance (D)": student["DISC (Total 100)"],
        "Influence (Inf)": student["__EMPTY_12"],
        "Steadiness (St)": student["__EMPTY_13"],
        "Compliance (C)": student["__EMPTY_14"],
      },
      "OCEAN (Out of 100)": {
        "Openness (O)": student["OCEAN (Out of 100)"],
        "Conscientiousness (Cns)": student["__EMPTY_15"],
        "Extraversion (Ex)": student["__EMPTY_16"],
        "Agreeableness (A)": student["__EMPTY_17"],
        "Natural Reactions (NR)": student["__EMPTY_18"],
      },
      "RIASEC (Total 100)": {
        "Realistic (Rl)": student["RIASEC (Total 100)"],
        "Investigative (Inv)": student["__EMPTY_19"],
        "Artistic (Art)": student["__EMPTY_20"],
        "Social (Soc)": student["__EMPTY_21"],
        "Enterprising (Ent)": student["__EMPTY_22"],
        "Conventional (Cnv)": student["__EMPTY_23"],
      },
      "Emotional Intelligence (0 to 10)": {
        "Self-Awareness": student["Emotional Intelligence (0 to 10)"],
        "Self-Management": student["__EMPTY_24"],
        "Social Awareness": student["__EMPTY_25"],
        "Relationship Management": student["__EMPTY_26"],
      },
      "Aptitude (0 to 9)": {
        Core: student["Aptitude (0 to 9)"],
        Fundamentals: student["__EMPTY_27"],
        Verbal: student["__EMPTY_28"],
        Quantitative: student["__EMPTY_29"],
        Logical: student["__EMPTY_30"],
      },
      "Team Work Qualities (0 to 10)": {
        Communication: student["__EMPTY_31"],
        "Affective Communication": student["Team Work Qualities (0 to 10)"],
        Assertiveness: student["__EMPTY_32"],
        "Desire to Lead": student["__EMPTY_33"],
        Trust: student["__EMPTY_34"],
        Diversity: student["__EMPTY_35"],
        "Social Relationships": student["__EMPTY_36"],
        "Relation Building": student["__EMPTY_37"],
        "Team Spirit": student["__EMPTY_38"],
        Recognition: student["__EMPTY_39"],
      },
      "Work Orientation (0 to 10)": {
        Security: student["__EMPTY_40"],
        Planning: student["Work Orientation (0 to 10)"],
        "Achievement Orientation": student["__EMPTY_41"],
        "Process Orientation": student["__EMPTY_42"],
        "Service Orientation": student["__EMPTY_43"],
      },
      "Soft Skills (0 to 10)": {
        "System Orientation": student["__EMPTY_44"],
        "Self Esteem": student["Soft Skills (0 to 10)"],
        "Self Confidence": student["__EMPTY_45"],
        Empathy: student["__EMPTY_46"],
        "Decision Making": student["__EMPTY_47"],
        Creativity: student["__EMPTY_48"],
        Innovation: student["__EMPTY_49"],
        "Problem Solving": student["__EMPTY_50"],
        Inquisitiveness: student["__EMPTY_51"],
        "Adaptability/Flexibility": student["__EMPTY_52"],
        Integrity: student["__EMPTY_53"],
        Dutifulness: student["__EMPTY_54"],
        Accountability: student["__EMPTY_55"],
      },
    }));

    // Remove the first entry from transformedData (index 0)
    transformedData.shift();

    // Write JSON data to file
    fs.writeFileSync(jsonFilePath, JSON.stringify(transformedData, null, 2));

    // Cleanup: Delete the uploaded file after processing
    fs.unlinkSync(filePath);

    // Render a success message (you can customize this as per your needs)
    res.send(
      "File uploaded and processed successfully. JSON data saved to data/converted_data.json"
    );
  } catch (err) {
    console.error("Error processing file:", err);
    res.status(500).send("Error processing file. Please try again.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
