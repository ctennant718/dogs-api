//the routes files control the routing
const path = require("path");

module.exports = function (app) {
  //information at the start of the URL
  const API_ENDPOINT = "/api";
  const API_VERSION = "v1";

  app.use(`${API_ENDPOINT}/${API_VERSION}/dogs`, require("./dogs.routes"));

  app.all("*", (req, res) => {
    res.sendStatus(404);
  });
};
