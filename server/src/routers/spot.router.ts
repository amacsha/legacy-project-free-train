const expressRouterSpot = require("express");
const spotController = require("../controllers/spot.controller");

const spotRouterMain = expressRouterSpot.Router();

spotRouterMain.post("/addSpot", spotController.addSpot);
spotRouterMain.post("/like/:spotName", spotController.like);
spotRouterMain.post("/unLike/:spotName", spotController.unLike);
spotRouterMain.post("/addComment/:spotName", spotController.addComment);

spotRouterMain.get("/getAll", spotController.getAll);
spotRouterMain.get("/getSpot/:spotName", spotController.getSpot);
spotRouterMain.get("/getAuthorSpots/:author", spotController.getAuthorSpot);
spotRouterMain.get("/getLikedSpots/:userName", spotController.getLikedSpots);

spotRouterMain.delete("/deleteSpot/:spotName", spotController.deleteSpot);

module.exports = spotRouterMain;
