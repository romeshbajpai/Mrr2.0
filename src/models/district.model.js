const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
    districtName: { type: String, required: true },
    districtCode: { type: String, required: true },
    status: { type: Boolean, required: true },
    assignedTo: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'company' }], default: [], required: true },
    enableFor: { type: String, required: true },
    stateId: { type: mongoose.Schema.Types.ObjectId, ref: 'state' },
    assignedDivision:{ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'division' }], default: [], required: true }
},
{
    timestamps: true,
    versionKey: false
});

const District = new mongoose.model('district', districtSchema);
module.exports = District;
