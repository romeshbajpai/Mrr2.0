const districtModel = require('../models/district.model')

const  district = async  (req,res)=>{
    try {
        const {districtName} = req.body;
        const existDistrict = await districtModel.findOne({ districtName:districtName});
        if (existDistrict) {
            return  res.status(409).send({ success: false, message: ` ${existDistrict} District is already exists`})
        }
        const createdDistrict = await districtModel.create({...req.body})
        if (!createdDistrict) {
            return res.status(400).send({ success: false, message: `Unable to create District` }); 
        }
        return res.status(201).send({ success: true, message: `District created successfully`,createdDistrict }); 
    } catch (error) {
        return res.status(500).send({ success: false, error: error.message });   
    }
}

const getDistrict = async (req, res) => {
    try {
        const districts = await districtModel.find();
        if (districts.length === 0) {
            return res.status(404).send({ success: false, message: 'No districts found' });
        }
        return res.status(200).send({ success: true, districts });
    } catch (error) {
        return res.status(500).send({ success: false, message: 'Internal Server Error', error: error.message });
    }
};

module.exports = {district,getDistrict};