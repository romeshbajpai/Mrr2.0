const divisionModel = require('../models/division.model')

const  division = async  (req,res)=>{
    try {
        const {divisionName} = req.body;
        const existDivision = await divisionModel.findOne({ divisionName:divisionName});
        if (existDivision) {
            return  res.status(409).send({ success: false, message: ` ${existDivision} Division is already exists`})
        }
        const createdDivision = await divisionModel.create({...req.body})
        if (!createdDivision) {
            return res.status(400).send({ success: false, message: `Unable to create Division` }); 
        }
        return res.status(201).send({ success: true, message: `Division created successfully`,createdDivision }); 
    } catch (error) {
        return res.status(500).send({ success: false, error: error.message });   
    }
}
const getDivision = async (req, res) => {
    try {
        const Division = await divisionModel.find();
        if (Division.length === 0) {
            return res.status(404).send({ success: false, message: 'No Division found' });
        }
        return res.status(200).send({ success: true, Division });
    } catch (error) {
        return res.status(500).send({ success: false, message: 'Internal Server Error', error: error.message });
    }
};
module.exports = {division,getDivision};