const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    stateName: { type: String, required: true },
    stateCode: { type: String, required: true },
    assignedTo: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'company' }], default: [], required: true },
    enableFor: { type: String, required: true },
    countryId: { type: mongoose.Schema.Types.ObjectId, ref: 'country' },
    assignedDivision:{ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'division' }], default: [], required: true }
},
{
    timestamps: true,
    versionKey: false
});

const State = new mongoose.model('state', stateSchema);
module.exports = State;
