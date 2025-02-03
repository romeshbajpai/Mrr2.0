const stateModel = require('../models/state.model')

const  state = async  (req,res)=>{
    try {
        const {stateCode , stateName} = req.body;
        const existState = await stateModel.findOne({ stateName:stateName});
        if (existState) {
            return  res.status(409).send({ success: false, message: ` ${existState} state is already exists`})
        }
        const createdState = await stateModel.create({...req.body})
        if (!createdState) {
            return res.status(400).send({ success: false, message: `Unable to create state` }); 
        }
        return res.status(201).send({ success: true, message: `State created successfully`,createdState }); 
    } catch (error) {
        return res.status(500).send({ success: false, error: error.message });   
    }
}

const getState = async (req, res) => {
    try {
        const states = await stateModel.find();
        if (states.length === 0) {
            return res.status(404).send({ success: false, message: 'No states found' });
        }
        return res.status(200).send({ success: true, states });
    } catch (error) {
        return res.status(500).send({ success: false, message: 'Internal Server Error', error: error.message });
    }
};

module.exports = {state,getState};