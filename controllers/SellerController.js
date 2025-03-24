import Seller from "../models/Seller.js";

export const createSeller = async (req, res) => {
    try {
        const { propertyTitle, propertyType, address, price, areaSqft, furnishing, status} = req.body;
        if ( !propertyTitle || !propertyType || !address || !price || !areaSqft || !furnishing || !status) {
            return res.status(400).json({ success: false, message: 'All fields are required!' });
        }

        await Seller.create({ propertyTitle, propertyType, address, price, areaSqft, furnishing, status})
        res.status(201).json({
            message: 'Seller created successfully'
        });
 } catch (error) {
        res.status(500).json({ error: 'Error saving the Seller', details: error.message });
    }
};

export const getAllSellers = async (req, res) => {
    try {
        const Seller = await Seller.find();
        res.json(Seller);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getSellerById = async (req, res) => {
    try {
        const SellerId = req.params.id;
        const Seller = await Seller.findById(SellerId);
        if (!Seller) {
            return res.status(404).json({ message: 'Seller id not found' });
        }
        res.json(Seller);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateSeller = async (req, res) => {
    try {
        const { propertyTitle, propertyType, address, price, areaSqft, furnishing, status} = req.body;
        const SellerId = req.params.id; 

        const existingSeller = await Seller.findById(SellerId);
        if (!existingSeller) {
            return res.status(404).json({ message: 'Seller not found' });
        }

        const updateData = {
            propertyTitle, propertyType, address, price, areaSqft, furnishing, status
        };

        const updatedSeller = await Seller.findByIdAndUpdate(
            SellerId,
            updateData,
            { new: true } 
                   );

        res.json({
            message: 'Seller updated successfully',
            Seller: updatedSeller
        });
    } catch (error) {
        res.status(500).json({ error: 'Error updating the branch', details: error.message });
    }
};

export const deleteSeller = async (req, res) => {
    try {
        const SellerId = req.params.id; 
        const deletedSeller = await Seller.findByIdAndDelete(SellerId); 
        if (!deletedSeller) {
            return res.status(404).json({ message: 'Seller not found' });
        }
        res.json({ message: 'Seller deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};