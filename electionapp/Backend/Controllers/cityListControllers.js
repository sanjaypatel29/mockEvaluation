//const mongoose = require('mongoose')
const cityList = require("../Models/cityList")
//const db = mongoose.connection

const addcityList = async (req, res) => {

}

const getAllcityLists = async (req, res) => {
    try {
        const cityLists = await cityList.find()
        res.status(200).send(cityLists)
    } catch (err) {
        res.status(400).send(err)
    }
}

const getcityLists = async (req, res) => {
    try {
        const search_params = {}

        if (req.query.city) {
            search_params["city"] = req.query.city
        }

        // const cityLists = await cityList.find(search_params).sort({ mrp: -1 }).collation({ locale: "en_US", numericOrdering: true })
        const cityLists = await cityList.find()

        if (req.query.sort === "") {
            return res.send(cityLists)
        }
        if (req.query.sort === "asc") {
            const sortedcityLists = cityLists.sort((cityList1, cityList2) => cityList1.population - cityList2.population)
            return res.send(sortedcityLists)
        }
        if (req.query.sort === "desc") {
            const sortedcityLists = cityLists.sort((cityList1, cityList2) => cityList2.population - cityList1.population)
            return res.send(sortedcityLists)
        }

    } catch (err) {
        res.status(400).send(err)
    }
}

const searchcityLists = async (req, res) => {
    try {
        await cityList.find({
            cityListName: {
                $regex: req.query.city,
                $options: "i"
            }
        }, function (err, data) {
            res.send(data)
        })
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports = { addcityList, getAllcityLists, searchcityLists, getcityLists }