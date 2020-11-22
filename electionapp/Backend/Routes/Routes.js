const express = require("express");
const { getcityLists, getAllcityLists, cityListId } = require('../Controllers/cityListControllers')
const router = express.Router();

router.get("/getallcityLists", getAllcityLists)

router.get("/getcityLists", getcityLists)

router.get("/cityListId", cityListId)

module.exports = router