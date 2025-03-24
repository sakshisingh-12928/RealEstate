import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const SellerSchema = new Schema({
    propertyTitle : {type : String},
    propertyType : {type : String},
    address : {type : String},
    price : {type : String},
    areaSqft : {type : String},
    furnishing : {type : String},
    status : {type : String},
})
    
   
{ timestamps: true }; // Correct placement of timestamps

const Seller = model('Seller', SellerSchema);

export default Seller
 