const mongoose = require('mongoose');

const divisionSchema = new mongoose.Schema({
    divisionName: { type: String, required: true },
    status: { type: Boolean, required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'company' },
},
{
    timestamps: true,
    versionKey: false
});

const Division = new mongoose.model('division', divisionSchema);
module.exports = Division;
