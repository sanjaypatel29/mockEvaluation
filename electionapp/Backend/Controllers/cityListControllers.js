//const mongoose = require('mongoose')
const cityList = require("../Models/cityList")
//const db = mongoose.connection

const getAllcityLists = async (req, res) => {
    try {
        const cityLists = await cityList.find()
        res.status(200).send(cityLists)
    } catch (err) {
        res.status(400).send(err)
    }
}

const getcityLists = async (req, res, next) => {
    let { population, city, type } = req.query;

    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    let sortByPopulation = population === 'asc' ? 1 : population === 'desc' ? -1 : 0;
    if (type !== undefined && city === undefined) {
        const cityLists = await cityList.countDocuments(
            {
                type: { $regex: type }
            },
            (err) => {
                if (err) console.log(err);
            }
        );
        const finalPage = Math.ceil(cityLists / limit);
        try {
            const results = await cityList.find({
                type: { $regex: type }
            })
                .sort({ population: sortByPopulation })
                .skip((page - 1) * limit)
                .limit(limit);
            return res.status(200).send({ data: results, currentpage: page, finalPage });
        } catch (err) {
            console.log(err);
            return res.status(500).send('Something went wrong');
        }
    } else if (type === undefined && city !== undefined) {
        const cityLists = await cityList.countDocuments(
            {
                city: { $regex: city }
            },
            (err) => {
                if (err) console.log(err);
            }
        );
        const finalPage = Math.ceil(cityLists / limit);
        try {
            const results = await cityList.find({
                city: { $regex: city }
            })
                .sort({ population: sortByPopulation })
                .skip((page - 1) * limit)
                .limit(limit);
            return res.status(200).send({ data: results, currentpage: page, finalPage });
        } catch (err) {
            console.log(err);
            return res.status(500).send('Something went wrong');
        }
    } else if (city !== undefined && type !== undefined) {
        const cityLists = await cityList.countDocuments(
            {
                city: { $regex: city },
                type: { $regex: type }
            },
            (err) => {
                if (err) console.log(err);
            }
        );
        const finalPage = Math.ceil(cityLists / limit);
        try {
            const results = await cityList.find({
                city: { $regex: city },
                type: { $regex: type }
            })
                .sort({ population: sortByPopulation })
                .skip((page - 1) * limit)
                .limit(limit);
            return res.status(200).send({ data: results, currentpage: page, finalPage });
        } catch (err) {
            console.log(err);
            return res.status(500).send('Something went wrong');
        }
    } else {
        const cityLists = await cityList.countDocuments({}, (err) => {
            if (err) console.log(err);
        });
        const finalPage = Math.ceil(cityLists / limit);
        try {
            const results = await cityList.find({}).sort({ population: sortByPopulation }).skip((page - 1) * limit).limit(limit);
            return res.status(200).send({ data: results, currentpage: page, finalPage });
        } catch (err) {
            console.log(err);
            return res.status(500).send('Something went wrong');
        }
    }
};

const cityListId = (req, res) => {
    console.log(req.query.id);
    cityList.findById(req.query.id)
        .then((cityList) => res.json(cityList))
        .catch((err) => res.status(400).json('Error' + err));
};

module.exports = { getAllcityLists, getcityLists, cityListId }