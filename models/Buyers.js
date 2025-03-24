import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BuyersSchema = new Schema({
    name: {type: String},
    Email : {type: String},
    mobileNo : {type : String},
    address : {type : String},
    roomNo : {type : String},
    status : {type : String},
})
    
   
{ timestamps: true }; // Correct placement of timestamps

const Buyers = model('Buyers', BuyersSchema);

export default Buyers
 
