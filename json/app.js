const fs = require("fs");


fs.readFile("./data.json", "utf8", (err, jsonString) => {
  if (err) {
    console.error("Error loading JSON:", err);
    return;
  }

  try {
    const data = JSON.parse(jsonString);
    console.log("JSON Data:", data);
  } catch (parseError) {
    console.error("Invalid JSON format:", parseError);
  }
});
