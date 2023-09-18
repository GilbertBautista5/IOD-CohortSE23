let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.teamController.getTeams(res)
});

router.get("/:id", (req, res) => {
  Controllers.teamController.getOneTeam(req, res);
});

router.put("/:id", (req, res) => {
  Controllers.teamController.updateTeam(req, res);
});
module.exports = router;