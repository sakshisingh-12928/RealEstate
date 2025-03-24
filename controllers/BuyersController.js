import Buyers from "../models/Buyers.js";

export const createBuyers = async (req, res) => {
    try {
        const { name, Email, mobileNo, address, RoomNo, status} = req.body;
        if ( !name || !Email || !mobileNo || !address || !RoomNo || !status) {
            return res.status(400).json({ success: false, message: 'All fields are required!' });
        }

        await Buyers.create({ name, Email, mobileNo, address, RoomNo, status })
        res.status(201).json({
            message: 'Buyers created successfully'
        });
 } catch (error) {
        res.status(500).json({ error: 'Error saving the Buyers', details: error.message });
    }
};

export const getAllBuyers = async (req, res) => {
    try {
        const Buyers = await Buyers.find();
        res.json(Buyers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getBuyersById = async (req, res) => {
    try {
        const BuyersId = req.params.id;
        const Buyers = await Buyers.findById(BuyersId);
        if (!Buyers) {
            return res.status(404).json({ message: 'Buyers id not found' });
        }
        res.json(Buyers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateBuyers = async (req, res) => {
    try {
        const {  name, Email, mobileNo, address, RoomNo, status } = req.body;
        const BuyersId = req.params.id; 

        const existingBuyers = await Buyers.findById(BuyersId);
        if (!existingBuyers) {
            return res.status(404).json({ message: 'Buyers not found' });
        }

        const updateData = {
            name, Email, mobileNo, address, RoomNo, status
        };

        const updatedBuyers = await Buyers.findByIdAndUpdate(
            BuyersId,
            updateData,
            { new: true } 
        );

        res.json({
            message: 'Buyers updated successfully',
            Buyers: updatedBuyers
        });
    } catch (error) {
        res.status(500).json({ error: 'Error updating the branch', details: error.message });
    }
};

export const deleteBuyers = async (req, res) => {
    try {
        const BuyersId = req.params.id; 
        const deletedBuyers = await Buyers.findByIdAndDelete(BuyersId); 
        if (!deletedBuyers) {
            return res.status(404).json({ message: 'Buyers not found' });
        }
        res.json({ message: 'Buyers deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};