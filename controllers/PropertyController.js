import Property from "../models/Property.js";

export const createProperty = async (req, res) => {
    try {
        const {name, Email, mobileNo, address, LeaseStartDate, LeaseEndDate, MonthlyRent, SecurityDeposit, paymentStatus, LeaseStatus} = req.body;
        if ( !name || !Email || !mobileNo || !address || !LeaseStartDate || !LeaseEndDate || !MonthlyRent || !SecurityDeposit || !paymentStatus || !LeaseStatus) {
            return res.status(400).json({ success: false, message: 'All fields are required!' });
        }

        await Property.create({name, Email, mobileNo, address, LeaseStartDate, LeaseEndDate, MonthlyRent, SecurityDeposit, paymentStatus, LeaseStatus})
        res.status(201).json({
            message: 'Property created successfully'
        });
 } catch (error) {
        res.status(500).json({ error: 'Error saving the Property', details: error.message });
    }
};

export const getAllProperties = async (req, res) => {
    try {
        const Property = await Property.find();
        res.json(Property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getPropertyById = async (req, res) => {
    try {
        const PropertyId = req.params.id;
        const Property = await Property.findById(PropertyId);
        if (!Property) {
            return res.status(404).json({ message: 'Property id not found' });
        }
        res.json(Property);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateProperty = async (req, res) => {
    try {
        const { name, Email, mobileNo, address, LeaseStartDate, LeaseEndDate, MonthlyRent, SecurityDeposit, paymentStatus, LeaseStatus} = req.body;
        const PropertyId = req.params.id; 

        const existingProperty = await Property.findById(PropertyId);
        if (!existingProperty) {
            return res.status(404).json({ message: 'Property not found' });
        }

        const updateData = {
            name, Email, mobileNo, address, LeaseStartDate, LeaseEndDate, MonthlyRent, SecurityDeposit, paymentStatus, LeaseStatus
        };

        const updatedProperty = await Property.findByIdAndUpdate(
            PropertyId,
            updateData,
            { new: true } 
        );

        res.json({
            message: 'Property updated successfully',
            Property: updatedProperty
        });
    } catch (error) {
        res.status(500).json({ error: 'Error updating the branch', details: error.message });
    }
};

export const deleteProperty = async (req, res) => {
    try {
        const PropertyId = req.params.id; 
        const deletedProperty = await Property.findByIdAndDelete(PropertyId); 
        if (!deletedProperty) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};