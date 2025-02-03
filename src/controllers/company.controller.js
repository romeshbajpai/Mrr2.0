const CompanyModel = require("../models/company.model");

const addCompany = async (req, res) => {
    try {
        let company = await CompanyModel.findOne({ companyName: req.body.companyName });
        if (company) {
            return res.status(409).send({ status: "fail", message: "Company already exists!" });
        }
        company = await CompanyModel.create(req.body);
        if (!company) {
            return res.status(401).send({ status: "fail", message: "Unable to create company!" });   
        }
        return res.status(201).send({ status: "success", message: "Company created successfully!",company });
    } catch (error) {
        return res.status(500).send({ status: "fail", error: error.message });
    }
}

const updateCompany = async (req, res) => {
    try {
        const company = await CompanyModel.findById({ _id: req.params.id });
        if (!company) {
            return res.status(401).send({ status: "fail", message: `Company with id ${req.params.id} does not exists!` });
        }
        const updatedCompany = await CompanyModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if (!updatedCompany) {
            return res.status(401).send({ status: "fail", message: "Unable to update company!" });   
        }
        return res.status(200).send({ status: "success", message: "Company updated successfully!",company:updatedCompany });
    } catch (error) {
        return res.status(500).send({ status: "fail", error: error.message });
    }
}

module.exports = { addCompany,updateCompany };