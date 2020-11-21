const express = require("express");
const { addcityList, getcityLists, searchcityLists, getAllcityLists } = require('../Controllers/cityListControllers')
const router = express.Router();

router.post("/addcityList", addcityList)

router.get("/getallcityLists", getAllcityLists)

router.get("/getcityLists", getcityLists)

router.get("/searchcityList", searchcityLists)


module.exports = router