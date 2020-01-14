const express = require("express");
const path = require("path");
const app = express();
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "build")));
  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
