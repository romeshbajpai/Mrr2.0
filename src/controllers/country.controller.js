const countryModel = require('../models/country.model')

const  country = async  (req,res)=>{
    try {
        const {country} = req.body;
        const existCountry = await countryModel.findOne({ country:country});
        if (existCountry) {
            return  res.status(409).send({ success: false, message: ` ${existCountry} Country is already exists`})
        }
        const createdCountry = await countryModel.create({...req.body})
        if (!createdCountry) {
            return res.status(400).send({ success: false, message: `Unable to create Country` }); 
        }
        return res.status(201).send({ success: true, message: `Country created successfully`,createdCountry }); 
    } catch (error) {
        return res.status(500).send({ success: false, error: error.message });   
    }
}

module.exports = {country};