const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    country: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    weeklyOffOn: { type: String, required: true, default: "sunday" },
    currencySymbol: { type: String, required: true }
},
{
    timestamps: true,
    versionKey: false
});

const Country = new mongoose.model('country', countrySchema);
module.exports = Country;