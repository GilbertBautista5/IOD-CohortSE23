let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.playerController.getPlayers(res)
});

router.get("/:id", (req, res) => {
  Controllers.playerController.getOnePlayer(req, res);
});

router.put("/:id", (req, res) => {
  Controllers.playerController.updatePlayer(req, res);
});

module.exports = router;